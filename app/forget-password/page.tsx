"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase"; // make sure your Firebase is initialized here
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent successfully!");
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        }
    };

    return (
        <>
            <Navigation />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                {/* Heading outside the box */}
                <h1 className="text-4xl font-bold text-center mb-6 text-black">
                    Forgot Password
                </h1>

                <div className="bg-white px-10 pb-10 pt-0 rounded-xl shadow-md w-full max-w-md h-[480px] flex flex-col justify-center align-top">
                    <p className="text-center mb-6">
                        Enter email to get your login detail.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email*"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-black font-bold py-2 rounded-lg relative hover:bg-red-50 transition-colors"
                        >
                            {/* Two vertical red borders */}
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-red-500"></span>
                            <span className="absolute right-0 top-0 h-full w-[2px] bg-red-500"></span>
                            <Button className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl">
                                Submit
                            </Button>
                        </button>
                    </form>

                    {message && <p className="text-green-600 mt-4 text-center">{message}</p>}
                    {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
                </div>
            </div>
            <Footer />
        </>
    );
}
