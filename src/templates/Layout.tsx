import React from "react";
import Image from "next/image";
import Link from "next/link";
import ErrorsList from "../modules/errors/components/ErrorList";

const Layout: React.FC = function({ children }) {
    return (
        <div className="p-4 bg-gray-100 text-center h-full">
            <header className="mb-5 flex justify-between">
                <h1 className="text-2xl">NextJS Example</h1>

                <div>
                    <Link href="/" passHref>
                        <a data-cy="nav-home" className="py-2 px-4 inline-block">Home</a>
                    </Link>
                    <Link href="/users" passHref>
                        <a data-cy="nav-users" className="py-2 px-4 inline-block">Users</a>
                    </Link>
                    <Link href="/posts" passHref>
                        <a data-cy="nav-posts" className="py-2 px-4 inline-block">Posts</a>
                    </Link>
                </div>
            </header>

            {children}

            <ErrorsList/>

            <footer className="mt-5">
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
            </footer>
        </div>
    )
};

export default Layout;
