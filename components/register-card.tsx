"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createDocument } from "@/lib/common";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CountryDropdown } from "react-country-region-selector";
import { useRouter } from "next/navigation";


export function RegisterCard() {
  const router = useRouter();
  const [isAuth, setAuth] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setAuth(u != null))
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (data: FormData) => {
    if (data.get("check") != "SURFCHEM") {
      alert("Enter SURFCHEM for security")
      return
    }
    try {
      const password = randomString()
      const creds = await createUserWithEmailAndPassword(auth,
        data.get('email')!.toString(),
        password
      );

      await createDocument('Users', {
        email: data.get("email"),
        display_name: data.get("first_name") + ' ' + data.get('last_name'),
        uid: creds.user.uid,
        phone_number: data.get("phone_number"),
        country: selectedCountry,
        company: data.get("company"),
        company_web: data.get("company_web"),
        password: password,
        is_admin: false,
        is_completed: false,
        is_approved: false,
        created_time: serverTimestamp(),
      }, creds.user.uid);

      await signOut(auth);
      router.push('/account-activation')
      router
    } catch (error) {
      console.error(error)
      alert(error)
    }
  };

  return (
    <>{!isAuth ?
      (
        <Card className="rounded-2xl bg-card p-8 shadow-xl md:p-10">
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-pretty text-[27px] md:text-[32px] leading-[38px] font-bold tracking-tight">
                Need a sample?
              </h3>
              <p className="text-pretty text-[27px] md:text-[32px] leading-[38px] font-normal text-foreground/90">
                Access exclusive content?
              </p>
            </div>

            <form
              className="mt-2 grid grid-cols-1 gap-8"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(new FormData(e.currentTarget))
              }}
            >
              <div>
                <Label htmlFor="first" className="sr-only">
                  First Name
                </Label>
                <Input
                  id="first"
                  name='first_name'
                  placeholder="First Name*"
                  className="h-11 rounded-xl border border-black2"
                />
              </div>

              <div>
                <Label htmlFor="last" className="sr-only">
                  Last Name
                </Label>
                <Input
                  id="last"
                  name='last_name'
                  placeholder="Last Name*"
                  className="h-11 rounded-xl border border-black2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="country" className="sr-only">
                  Country
                </Label>
                <CountryDropdown
                  id="country"
                  value={selectedCountry}
                  onChange={(val) => setSelectedCountry(val)}
                  className="h-11 rounded-xl border border-black2 w-full px-3 text-gray-500"
                />
              </div>

              <div>
                <Label htmlFor="reg-email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="reg-email"
                  name='email'
                  type="email"
                  placeholder="Email*"
                  className="h-11 rounded-xl border border-black2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company" className="sr-only">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name='company'
                  placeholder="Company Name*"
                  className="h-11 rounded-xl border border-black2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="webpage" className="sr-only">
                  Webpage
                </Label>
                <Input
                  id="webpage"
                  name='company_web'
                  placeholder="Webpage*"
                  className="h-11 rounded-xl border border-black2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobile" className="sr-only">
                  Mobile number
                </Label>
                <Input
                  id="mobile"
                  name='phone_number'
                  placeholder="Mobile number*"
                  className="h-11 rounded-xl border border-black2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="security" className="sr-only">
                  Security
                </Label>
                <Input
                  id="security"
                  name='check'
                  placeholder="For security, type SURFCHEM in the following field:"
                  className="h-11 rounded-xl border border-black2"
                  required
                />
              </div>

              {/* CTA with red vertical bars */}
              <div className="mt-10 flex flex-col items-center gap-3">
                <div>
                  <Button type='submit' className="text-[25px] md:text-[27px] font-bold bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red h-12 rounded-none">
                    Register
                  </Button>
                </div>

              </div>
            </form>
          </div>
        </Card >) : null}
    </>
  );
}


function randomString(length = 10) {
  return Math.random().toString(36).substring(2, 2 + length);
}
