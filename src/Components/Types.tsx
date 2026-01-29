export type BlogPost = {
    id: number,
    blogTitle: string,
    blogText: string,
    comments: Comment[], // a blog post will have a comment section so a comment section is part of its type
    isPublished: boolean
}

export type Comment = {
    id: number
    text: string
}

export type CommentsProps = {
    comments: Comment[],
    addComment: (text: string) => void
}

export type ButtonProps = {
    onClick: () => void
}