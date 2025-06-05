import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function Home() {
    return (
        <>
            <div>
                <Header />
                <main className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Welcome to MyApp</h1>
                    <p className="mb-4">This is the home page of your Next.js application.</p>
                    <Card title="Latest News" content="Stay tuned for updates!" />
                </main>
            </div>
            <div style={{ padding: '2rem' }}>
                <Card title="Welcome to NexTech" content="We build innovative tech solutions." />
                <Card title="Our Mission" content="To empower developers through education and tools." />
                <Card title="Contact Us" content="Reach out via our support portal anytime!" />
            </div>
        </>
    );
}