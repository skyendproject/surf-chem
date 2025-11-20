"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createDocumentInSubCol } from "@/lib/common";
import { useState } from "react";

export function RegionalContactForm({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    security: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.security.toUpperCase() !== "SURFCHEM") {
      alert("Please enter the correct security code: SURFCHEM");
      return;
    }

    setIsSubmitting(true);

    await createDocumentInSubCol("RegionalContact", id, "ContactList", {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      regional_name: formData.name,
      description: formData.project,
    });

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        project: "",
        security: "",
      });
    }, 3000);
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.company.trim() !== "" &&
    formData.project.trim() !== "" &&
    formData.security.trim() !== "";

  if (isSubmitted) {
    return (
      <div className="bg-white px-8 py-4 rounded-lg shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
        <p className="text-lg text-gray-600 mb-2">
          Thank you for contacting us.
        </p>
        <p className="text-gray-500">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div
      className="
        relative flex justify-center items-start 
        min-h-[450px] 
        md:min-h-[650px] 
        pt-0 md:pt-4 
        pb-8 md:pb-10
      "
    >
      {/* Red Semicircle Background */}
      <div
        className="absolute top-0 -right-28 h-[80%] w-full bg-no-repeat mt-10 md:mt-20"
        style={{
          backgroundImage: "url(/assets/semicircleRed.png)",
          backgroundSize: "contain",
          backgroundPosition: "right top",
        }}
      />

      {/* Form Box */}
      <div
        className="
          bg-white rounded-2xl shadow-xl 
          px-8 py-6 
          md:px-10 md:py-8
          relative z-10
        "
      >
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-[28px] md:text-[32px] font-bold text-black2">
            Need a sample?
          </h2>
          <p className="text-[28px] md:text-[32px] text-black">
            We want to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          <Input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="h-12 text-base border-black2 rounded-lg"
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="h-12 text-base border-black2 rounded-lg"
          />

          <Input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="h-12 text-base border-black2 rounded-lg"
          />

          <Input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className="h-12 text-base border-black2 rounded-lg"
          />

          <Textarea
            name="project"
            placeholder="What else should we know about your project?"
            value={formData.project}
            onChange={handleInputChange}
            required
            rows={4}
            className="text-base border-black2 rounded-lg resize-none"
          />

          <Input
            type="text"
            name="security"
            placeholder="For security, type SURFCHEM in the following field"
            value={formData.security}
            onChange={handleInputChange}
            required
            className="h-12 text-base border-black2 rounded-lg"
          />

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full h-14 text-lg font-bold bg-red-600 hover:bg-red-700 rounded-lg text-gray-800 border-2 border-gray-600"
          >
            {isSubmitting ? "SENDING..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
