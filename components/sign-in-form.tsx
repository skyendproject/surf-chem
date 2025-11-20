"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { readDocument } from "@/lib/common";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FormEvent, useEffect, useState } from "react";

export function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isAuth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setAuth(u != null))
    return () => unsubscribe();
  }, []);



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const creds = await signInWithEmailAndPassword(auth, username, password);
      const userDoc = await readDocument(creds.user.uid, 'Users') as Record<string, any>;
      if (!userDoc.is_approved) {
        signOut(auth)
        alert('Use is not approved for sign-in')
      }
    } catch (error) {
      console.error(error)
      alert(error)
    }
  };


  return (
    <>{!isAuth &&
      <div className="bg-white p-8 rounded-3xl shadow-lg border max-w-xl w-full">
        <h2 className="text-5xl sm:text-6xl text-center font-bold text-black2 mb-12 mt-12">Sign In</h2>
        <p className="text-black text-4xl mb-4 text-center">Sign in to view this content</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Username*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <label htmlFor="remember" className="text-gray-600 text-sm">
              Remember Me?
            </label>
          </div>
          <div className="flex justify-center items-center h-full">

            <Button
              type="submit"
              className="bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none font-bold text-2xl"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    }</>
  );
}
