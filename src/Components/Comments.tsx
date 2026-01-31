import { useState } from "react"
import type { CommentsProps } from "./Types"
import { Form } from "react-bootstrap"
import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"


export default function Comments( { comments, addComment, editComment, deleteComment }: CommentsProps) {
   
    const [commentText, setCommentText] = useState("")
    const [editCommentId, setEditCommentId] = useState<string | null>(null)
    const [editCommentText, setEditCommentText] = useState("")

    const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (commentText.trim() === "") return
        addComment(commentText)
        setCommentText("")
    }

    const handleSaveEdit = () => {
        if (!editCommentId) return
        editComment(editCommentId, editCommentText)
        setEditCommentId(null)
        setEditCommentText("")
    }
    
    return (
  <>
    <div className="m-3">
      <h6>Add a Comment</h6>
    </div>

    <div className="m-3">
      <Form onSubmit={handlePost}>
        {comments.map((c) => (
          <div key={c.id} className="mb-2">
            {editCommentId === c.id ? (
              <>
                <Form.Control
                  type="text"
                  value={editCommentText}
                  onChange={(e) =>
                    setEditCommentText(e.target.value)
                  }
                />
                <EditButton onClick={handleSaveEdit} label="Save" />
              </>
            ) : (
              <>
                <p>{c.text}</p>
                <EditButton
                  onClick={() => {
                    setEditCommentId(c.id);
                    setEditCommentText(c.text);
                  }}
                  label="Edit"
                />
                <DeleteButton
                  onClick={() => deleteComment(c.id)}
                />
              </>
            )}
          </div>
        ))}

        <Form.Control
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Text"
        />

        <br />

        <button type="submit">Post</button>
      </Form>
    </div>
  </>
)
}