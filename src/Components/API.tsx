import type {BlogPost} from './Types'

const URL = "https://696d097ff4a79b3151805ef2.mockapi.io/api/entry"


// read
export async function fetchEntries(): Promise<BlogPost[]> {
    const response = await fetch(`${URL}?sortBy=id&order=desc`)
    return response.json()
}

// create
export async function createEntry(
    post: Omit<BlogPost, "id">
): Promise<BlogPost> {
    const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    })
    return response.json()
}

// update
export async function updateEntry(post: BlogPost): Promise<BlogPost> {
  const response = await fetch(`${URL}/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to update post");
  return response.json();
}
