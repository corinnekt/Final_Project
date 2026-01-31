import { useEffect, useState } from "react";
import Comments from "./Comments";
import type { BlogPost } from './Types'
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { createEntry, fetchEntries, updateEntry } from './API'
import { Button, Form } from "react-bootstrap";


export default function Blog() { //Blog() needs to give props to EditButton, DeleteButton, and Comments

  const [blogTitle, setBlogTitle] = useState("")
  const [blogText, setBlogText] = useState("")
  const [blogPost, setBlogPost] = useState<BlogPost[]>([])
  const [nextBlogPostId, setNextBlogPostId] = useState(1)

  const [nextCommentId, setNextCommentId] = useState(1)

  const [editBlogTitle, setEditBlogTitle] = useState("")
  const [editBlogText, setEditBlogText] = useState("")
  const [editBlogId, setEditBlogId] = useState("")

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

  const handleEditPost = (postId: string) => {
    const post = blogPost.find((p) => p.id === postId);
    if (!post) return;

    setEditBlogId(postId);
    setEditBlogTitle(post.blogTitle);
    setEditBlogText(post.blogText);
  };

  const handleSaveEdit = async () => {
    if (!editBlogId) return; // no post being edited
    const post = blogPost.find((p) => p.id === editBlogId);
    if (!post) return;

    try {
      const updatedPost = await updateEntry({
        ...post,
        blogTitle: editBlogTitle,
        blogText: editBlogText,
      });

      // Update state with the saved post
      setBlogPost((prev) =>
        prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
      );

      // Clear edit state
      setEditBlogId("");
      setEditBlogTitle("");
      setEditBlogText("");
    } catch (err) {
      console.error(err);
    }
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

  const handleAddComment = (postId: string, text: string) => {
    setBlogPost((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
            ...post,
            comments: [
              ...post.comments,
              {
                id: nextCommentId.toString(),
                text,
                date: new Date().toISOString()
              }],
          }
          : post
      )
    );
    setNextCommentId((prev) => prev + 1);
  }

  const editComment = (
    postId: string,
    commentId: string,
    text: string
  ) => {
    setBlogPost((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
            ...post,
            comments: post.comments.map((c) =>
              c.id === commentId ? { ...c, text } : c
            ),
          }
          : post
      )
    );
  };


  const deleteComment = (
    postId: string,
    commentId: string
  ) => {
    setBlogPost((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
            ...post,
            comments: post.comments.filter(
              (c) => c.id !== commentId
            ),
          }
          : post
      )
    );
  };


  console.log(blogPost)
  

 return (
  <>
    <div className="m-5">
      <h1>Create Blog Post</h1>
      <Form onSubmit={handlePublish}>
      <Form.Group >
        <Form.Control
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Title"
        />
        <br />
        <Form.Control
          value={blogText}
          onChange={(e) => setBlogText(e.target.value)}
          placeholder="Text"
        />
        <br />
        <Button variant="primary" className="m-2" type="submit">
          Publish
        </Button>
      </Form.Group>
      </Form>
    </div>

    <h1 className="m-5">Published Posts</h1>
    {blogPost.map((post) => (
      <div key={post.id} className="mb-4">
        {editBlogId === post.id ? (
          <div>
            <input
              value={editBlogTitle}
              onChange={(e) => setEditBlogTitle(e.target.value)}
            />
            <input
              value={editBlogText}
              onChange={(e) => setEditBlogText(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => setEditBlogId("")}>Cancel</button>
          </div>
        ) : (
          <>
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
                editComment={(commentId, text) =>
                  editComment(post.id, commentId, text)
                }
                deleteComment={(commentId) =>
                  deleteComment(post.id, commentId)
                }
              />
            )}
          </>
        )}
      </div>
    ))}
  </>
);
}


//lean on array methods like .map --> loops over an array and returns a new array where each item is transformed to render lists of components
//.map needs a key prop --> ex. key={item.id