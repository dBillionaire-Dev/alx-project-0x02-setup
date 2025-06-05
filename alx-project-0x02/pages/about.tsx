import Header from "@/components/layout/Header"
import Button from "@/components/common/Button"
const About = () => {
    return (
        <div>
            <header className="bg-gray-800 p-4">
                <Header />
            </header>

            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4 text-lg">This is the about page of our Next.js application.</p>
                <p className="mt-2 text-sm text-gray-500">Learn more about our features and team!</p>
            </main>

            <div className="space-y-4 p-6">
                <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
                <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
                <Button size="large" shape="rounded-full">Large Rounded-full</Button>
            </div>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <span className="text-blue-600">Next.js</span>
                </a>
            </footer>
        </div>
    )
}

export default About
