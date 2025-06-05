import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">MyApp</div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/home" className="text-white hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                        </li>
                        <li>
                            <Link href="/posts" className="text-white hover:text-gray-300">Posts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
