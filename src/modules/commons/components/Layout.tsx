import React from "react";
import Image from "next/image";
import ErrorsWrapper from "../../errors/components/ErrorsWrapper";

const Layout: React.FC = function({ children }) {
    return (
        <div className="p-4 bg-gray-100 text-center h-full">
            <header className="mb-5">
                <h1 className="text-2xl">NextJS Example</h1>
            </header>

            {children}

            <ErrorsWrapper/>

            <footer className="mt-5">
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
            </footer>
        </div>
    )
};

export default Layout;
