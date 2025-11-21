"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createDocument } from "@/lib/common";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

export function ContactModal({
  triggerText = "Let's Talk",
  triggerClassName = "",
  children,
}: {
  triggerText?: string;
  triggerClassName?: string;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: FormData) => {
    if (data.get("check") != "SURFCHEM") {
      alert("Enter SURFCHEM for security")
      return
    }

    await createDocument('LetsTalkInquiry', {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      description: data.get("description"),
    })
    setIsOpen(false)
    router.push('/inquiry-confirmation')
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={`bg-greenCustom hover:bg-white text-white hover:text-greenCustom border-2 text-[14px] md:py-3 md:px-4 hover:border-1 border-greenCustom ${triggerClassName} rounded-xl font-bold`}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="h-screen w-full md:max-w-5xl p-0 bg-white rounded-none overflow-hidden">
        <DialogHeader>
          <DialogTitle className="hidden" />
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Side Text */}
          <div className="bg-white p-10 flex flex-col text-left">
            <h2 className="text-greenCustom font-bold text-[18px] md:text-[22px] mb-4">
              HAVE A QUESTIONS?
            </h2>
            <p className="text-[16px] md:text-[18px] font-semibold text-black mb-4">
              Let us know how we can help you!
            </p>
            <p className="text-[16px] md:text-[18px] text-black font-semibold">
              We look forward to speaking with you!
            </p>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-10 overflow-y-auto">
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(new FormData(e.currentTarget))
            }}>
              <input
                type="text"
                name='first_name'
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                required
              />
              <input
                type="text"
                name='last_name'
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                required
              />
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                required
              />
              <textarea
                rows={4}
                name='description'
                placeholder="How can Surfactant Chemicals Company help you today?"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                required
              />
              <input
                type="text"
                name='check'
                placeholder="For security, type SURFCHEM"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                required
              />
              <div className="flex justify-center ">
                <Button
                  type="submit"
                  className="bg-greenCustom hover:bg-greenCustomHover text-white font-bold py-3 rounded-xl uppercase"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
