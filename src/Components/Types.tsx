export type BlogPost = {
    id: string,
    blogTitle: string,
    blogText: string,
    comments: Comment[], // a blog post will have a comment section so a comment section is part of its type
    isPublished: boolean
}

export type Comment = {
    id: string
    text: string,
    date: String
}

export type CommentsProps = {
    comments: Comment[],
    addComment: (text: string) => void
    editComment: (id: string, text: string) => void
    deleteComment: (id: string) => void
}

export type MyButtonProps = {
    onClick: () => void
    label?: string
}