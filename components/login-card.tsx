"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { readDocument } from "@/lib/common";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function LoginCard() {
  const [remember, setRemember] = useState(false);
  const [isAuth, setAuth] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setAuth(u != null))
    return () => unsubscribe();
  }, []);


  const handleSubmit = async (data: FormData) => {
    try {
      const creds = await signInWithEmailAndPassword(auth,
        data.get('email')!.toString(),
        data.get('password')!.toString(),
      );
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
      <Card className="rounded-2xl bg-card p-8 shadow-xl md:p-10">
        <div className="space-y-6">
          <p className="text-pretty text-[27px] md:text-[32px] leading-[38px] font-bold tracking-tight">
            Login with your account details
            <br />
            to get access to our exclusive
            <br />
            content.
          </p>

          <form className="mt-6 space-y-12" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(new FormData(e.currentTarget))
          }}>
            <div>
              <Label htmlFor="login-email" className="sr-only">
                Email
              </Label>
              <Input
                id="login-email"
                type="email"
                name='email'
                placeholder="Email*"
                className="h-11 rounded-xl border border-black2"
                required
              />
            </div>

            <div>
              <Label htmlFor="login-password" className="sr-only">
                Password
              </Label>
              <Input
                id="login-password"
                type="password"
                placeholder="Password*"
                name='password'
                className="h-11 rounded-xl border border-black2"
                required
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(v) => setRemember(Boolean(v))}
              />
              <Label htmlFor="remember" className="text-sm text-muted-foreground">
                Remember Me?
              </Label>
            </div>

            {/* CTA with red vertical bars */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <div>
                <Button type="submit" className="text-[25px] md:text-[27px] font-bold bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none">
                  Login
                </Button>
              </div>
              <div>
                <Link href='/forget-password'>
                  <button
                    type="button"
                    className="mt-4 text-left text-[22px] text-muted-foreground underline-offset-4 hover:underline"
                  >
                    Forgot Password
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Card>}
    </>
  );
}
