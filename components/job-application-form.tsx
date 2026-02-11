"use client";

import { createDocumentInSubCol, uploadFile } from "@/lib/common";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";

export default function ApplicationForm({ id }: { id: string }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    collegeAttended: "",
    educationLevel: "",
    major: "",
    workExperience: "",
    eligibleToWork: "",
    cv: null as File | null,
    whyApplying: "",
    securityCode: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (formData.securityCode.toUpperCase() !== "SURFCHEM") {
      alert("Please enter the correct security code: SURFCHEM");
      return;
    }
    if (formData.cv == null) {
      alert("Please upload a resume or CV");
      return;
    }

    try {
      await createDocumentInSubCol('Careers', id, 'JobApplications', {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        highest_education: formData.educationLevel,
        college: formData.collegeAttended,
        major_field: formData.major,
        experience: formData.workExperience,
        eligilble_in_us: formData.eligibleToWork,
        reason_to_apply: formData.whyApplying,
        resume_pdf: await uploadFile(formData.cv!),
      })
      router.push("/thank-you");
      // redirect('/thank-you')
    } catch (e) {
      alert(e)
      return
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
          />
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="City*"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="collegeAttended"
            placeholder="College Attended"
            value={formData.collegeAttended}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
          />
        </div>
        <div>
          <input
            type="text"
            name="educationLevel"
            placeholder="Highest level of education"
            value={formData.educationLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="major"
            placeholder="Major/Concentration & Minor"
            value={formData.major}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
          />
        </div>
        <div>
          <input
            type="text"
            name="workExperience"
            placeholder="Total years of work experience"
            value={formData.workExperience}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
          />
        </div>
      </div>

      <div>
        <p className="text-gray-700 mb-2">Eligible to work in the US?</p>
      </div>

      <div className="space-y-2">
        <p className="text-gray-700">Attach your CV:</p>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            name="cv"
            onChange={handleFileChange}
            accept=".pdf"
            className="text-gray-700"
          />
          <span className="text-sm text-gray-500 hidden sm:block">
            Max. file upload limit: 10 MB
            <br />
            (allowed extension: .pdf.)
          </span>
        </div>
      </div>

      <div>
        <textarea
          name="whyApplying"
          placeholder="Why are you applying for this position"
          value={formData.whyApplying}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700 resize-none"
        />
      </div>

      <div>
        <input
          type="text"
          name="securityCode"
          placeholder="For security, type SURFCHEM in the following field:"
          value={formData.securityCode}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500 text-gray-700"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-12 py-3 border-y-0 border-x-4 border-red text-black font-semibold text-lg hover:text-red transition-colors duration-200 whitespace-nowrap"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
