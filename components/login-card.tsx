"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export function LoginCard() {
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (data: FormData) => {
    await signInWithEmailAndPassword(auth,
      data.get('email')!.toString(),
      data.get('password')!.toString(),
    );
    redirect('/');
  };

  return (
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
              <button
                type="button"
                className="mt-4 text-left text-md text-muted-foreground underline-offset-4 hover:underline"
              >
                Forgot Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}
