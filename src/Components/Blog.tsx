import { useState } from "react";
import Comments from "./Comments";
import type {BlogPost} from './Types'
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";


export default function Blog() { //Blog() needs to give props to EditButton, DeleteButton, and Comments
    
    const [blogTitle, setBlogTitle] = useState("")
    const [blogText, setBlogText] = useState("")
    const [blogPost, setBlogPost] = useState<BlogPost[]>([])
    const [nextBlogPostId, setNextBlogPostId] = useState(1)
    const [nextCommentId, setNextCommentId] = useState(1)

    const handlePublish = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newBlogPost: BlogPost = {
            id: nextBlogPostId,
            blogTitle,
            blogText,
            comments: [],
            isPublished: true
        }
        setBlogPost([newBlogPost, ...blogPost])
        setNextBlogPostId(nextBlogPostId + 1)
        setBlogTitle("")
        setBlogText("")
    }

    const handleAddComment = (postId: number, text: string)  => {
    setBlogPost((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { id: nextCommentId, text }],
            }
          : post
      )
    );
    setNextCommentId(nextCommentId + 1);
    }

    const handleEditPost = (postId: number) => {
    console.log("Edit post", postId);
    // Implement editing logic here
  };

  const handleDeletePost = (postId: number) => {
    setBlogPost((prev) => prev.filter((post) => post.id !== postId));
  };
    
    return (
        <>
            <h1>Create Blog Post</h1>
            <form onSubmit={handlePublish}>
                <label>
                    Title
                    <input value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)}/>
                </label>
                <br />
                <label>
                    Text
                    <input value={blogText} onChange={(e) => setBlogText(e.target.value)}/>
                </label>
                <br />
            <button type="submit">Publish</button>
      </form>

      <h1>Published Posts</h1>
      {blogPost.map((post) => (
        <div key={post.id} >
          <h2>{post.blogTitle}</h2>
          <p>{post.blogText}</p>

          {post.isPublished && (
            <>
              <EditButton onClick={() => handleEditPost(post.id)} />
              <DeleteButton onClick={() => handleDeletePost(post.id)} />
            </>
          )}

          {post.isPublished && (
            <Comments
              comments={post.comments}
              addComment={(text) => handleAddComment(post.id, text)}
            />
          )}
        </div>
      ))}
    </>
  );
}

//lean on array methods like .map --> loops over an array and returns a new array where each item is transformed to render lists of components
//.map needs a key prop --> ex. key={item.id}