import React, { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';
import Header from '@/components/layout/Header'

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!res.ok) throw new Error('Failed to fetch posts');
                const data = await res.json();

                const formattedPosts = data.map((post: any) => ({
                    userId: post.userId,
                    title: post.title,
                    content: post.body,
                }));

                setPosts(formattedPosts);
            } catch (err: any) {
                setError(err.message || 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <p className="p-4">Loading posts...</p>;
    if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Header />
            <h1 className="text-2xl font-bold mb-6">Posts</h1>
            {posts.map((post) => (
                <PostCard
                    key={`${post.userId}-${post.title}`}
                    userId={post.userId}
                    title={post.title}
                    content={post.content}
                />
            ))}
        </div>
    );
};

export default PostsPage;