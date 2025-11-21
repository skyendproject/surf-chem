"use client";

import { auth } from "@/lib/firebase";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DownloadButton({
    href,
    text,
    capitalized = false,
    isTechnicalPage = false,
}: {
    href: string;
    text?: string;
    capitalized?: boolean;
    isTechnicalPage?: boolean;
}) {
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => setAuth(!!u));
        return () => unsubscribe();
    }, []);

    if (!isAuth) return null;

    return (
        <div
            className={` bg-white rounded-2xl shadow-2xl max-w-xl mx-auto
        ${isTechnicalPage ? "h-auto py-2 px-6" : "h-[400px] p-6"}
        flex items-start justify-center relative`}
        >
            <div
                className={`relative flex items-center ${isTechnicalPage ? "mt-0" : "mt-12"
                    }`}
            >
                {/* Left red bar */}
                <span className="absolute -left-3 w-[5px] bg-red rounded-full h-[120%]" />

                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl font-bold text-black hover:text-red whitespace-nowrap ${capitalized ? "uppercase" : ""
                        }`}
                >
                    Download {text}
                </Link>

                {/* Right red bar */}
                <span className="absolute -right-3 w-[5px] bg-red rounded-full h-[120%]" />
            </div>
        </div>
    );
}
