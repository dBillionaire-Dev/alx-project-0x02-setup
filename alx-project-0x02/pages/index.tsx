import Header from "@/components/layout/Header";

const index = () => {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
        <p className="mt-4 text-lg">This is a simple Next.js application.</p>
        <p className="mt-2 text-sm text-gray-500">Explore the features and enjoy!</p>
      </main>
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

export default index
