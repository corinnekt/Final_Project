import { useEffect, useState } from "react";
import Comments from "./Comments";
import type {BlogPost} from './Types'
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { createEntry, fetchEntries } from './API'


export default function Blog() { //Blog() needs to give props to EditButton, DeleteButton, and Comments
    
    const [blogTitle, setBlogTitle] = useState("")
    const [blogText, setBlogText] = useState("")
    const [blogPost, setBlogPost] = useState<BlogPost[]>([])
    const [nextBlogPostId, setNextBlogPostId] = useState(1)
    const [nextCommentId, setNextCommentId] = useState(1)

    const handlePublish = async (
      e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()
        const newBlogPost: Omit<BlogPost, "id"> = {            
            blogTitle,
            blogText,
            isPublished: true,
            comments: []
        }

        try {
          const savedEntry = await createEntry(newBlogPost)
        

        setBlogPost((prev) => [savedEntry, ...prev])
        setNextBlogPostId(nextBlogPostId + 1)
        setBlogTitle("")
        setBlogText("")
      } catch (err) {
        console.log(err)
      }
    }

    const handleAddComment = (postId: string, text: string)  => {
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

    const handleEditPost = (postId: string) => {
    console.log("Edit post", postId);
    //  editing logic here
  };

  const handleDeletePost = (postId: string) => {
    setBlogPost((prev) => prev.filter((post) => post.id !== postId));
  };

  
  useEffect(() => {
    async function loadEntries() {
      try {
        const data = await fetchEntries()
        setBlogPost(data)
      } catch (err) {
        console.error(err)
      }
    }
    loadEntries()
  }, [])
    
console.log(blogPost)
    return (
        <>
        <div className="m-5">
            <h1>Create Blog Post</h1>
        </div>
        <div className="m-5">
            <form onSubmit={handlePublish}>
              <input 
                value={blogTitle} 
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Title"
              />
              <br />
              <input 
                value={blogText} 
                onChange={(e) => setBlogText(e.target.value)}
                placeholder="Text"
              />
              <br />
             <button className="m-2" type="submit">Publish</button>
            </form>
          </div>  

      <h1 className="m-5">Published Posts</h1>
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