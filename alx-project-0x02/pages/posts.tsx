import React from 'react';
import PostCard from '../components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '../interfaces';

interface PostsPageProps {
    posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
    return (
        <>
            <Header />
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Posts</h1>
                {posts.length === 0 ? (
                    <p>No posts found.</p>
                ) : (
                    posts.map((post) => (
                        <PostCard
                            key={`${post.userId}-${post.title}`}
                            userId={post.userId}
                            title={post.title}
                            content={post.content}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await res.json();

        const posts: PostProps[] = data.map((post: any) => ({
            userId: post.userId,
            title: post.title,
            content: post.body,
        }));

        return {
            props: { posts },
            revalidate: 60, // Optional, for ISR
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            props: { posts: [] },
        };
    }
}

export default PostsPage;
