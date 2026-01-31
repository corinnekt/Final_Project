import { useState } from "react"
import type { CommentsProps } from "./Types"


export default function Comments( { comments, addComment }: CommentsProps) {
   
    const [commentText, setCommentText] = useState("")

    const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (commentText.trim() === "") return
        addComment(commentText)
        setCommentText("")
    }
    
    return (
        <>
            <div className="m-3">
            <h6>Add a Comment</h6>
            </div>
            <div className="m-3">
            <form onSubmit={handlePost}>
                {comments.map((c) => (
                    <div key={c.id}>
                    <p>{c.text}</p>
                    </div>
                ))}
                <label>
                    Text
                    <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </label>
                <br></br>
                <button type="submit">Post</button>
            </form>
            </div>
        </>
    )
}