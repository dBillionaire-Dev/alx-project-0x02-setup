export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: string;
}
export interface Comment {
    id: string;
    postId: string;
    authorId: string;
    content: string;
    createdAt: string;
}