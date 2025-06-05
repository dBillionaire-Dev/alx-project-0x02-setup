import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
    title: string;
    content: string;
}

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (newPost: Post) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Posts</h1>
            <button onClick={() => setIsModalOpen(true)} style={{ marginBottom: '1rem' }}>
                Add Post
            </button>
            {posts.map((post, index) => (
                <Card key={index} title={post.title} content={post.content} />
            ))}
            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddPost}
            />
        </div>
    );
};

export default HomePage;
