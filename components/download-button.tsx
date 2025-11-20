"use client";

import { auth } from "@/lib/firebase";
import { Button, Link } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export default function DownloadButton({ href, text, capitalized = false }: { href: string, text?: string, capitalized?: boolean }) {
    const [isAuth, setAuth] = useState<boolean>(false);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(u => setAuth(u != null))
        return () => unsubscribe();
    }, []);

    return (
        <>
            {isAuth && <Button
                type="submit"
                className={`px-10 mb-20 bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red rounded-none font-bold text-4xl ${capitalized ? 'upp' : ''}`}
            >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                    Download {text}
                </Link>
            </Button>}
        </>
    )
}
