"use client";

export const dynamic = 'force-dynamic';

import { Footer } from "@/components/footer";
import ApplicationForm from "@/components/job-application-form";
import { Navigation } from "@/components/navigation";
import { JobPosition } from "@/data/careers";
import { getCareer } from "@/lib/backend";
import { use, useEffect, useState } from "react";

interface JobDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = use(params); // <-- Correctly unwrap the Promise here
  const [job, setJob] = useState<JobPosition>()
  const [activeTab, setActiveTab] = useState<"overview" | "application">("overview");

  useEffect(() => {
    getCareer(id).then((e) => setJob(e as JobPosition))
    return () => { };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="px-4 sm:px-16 py-16">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold mb-6">
            {" "}
            {job?.title}
          </h2>
          <p className="text-[clamp(17px,2vw,21px)] text-black">
            <span className="font-bold">Location:</span> {job?.location}
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-400 mb-16 mt-16 px-6 max-w-3xl">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2 px-1 border-b-2 text-[26px] uppercase tracking-wide transition-colors duration-200 ${activeTab === "overview"
                ? "border-red text-red font-bold "
                : "border-transparent text-gray-500 hover:text-gray-500"
                }`}
            >
              ROLE OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab("application")}
              className={`pb-2 px-1 border-b-2 text-[26px] uppercase tracking-wide transition-colors duration-200 ${activeTab === "application"
                ? "border-red text-red font-bold "
                : "border-transparent text-gray-500 hover:text-gray-500"
                }`}
            >
              APPLICATION
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          {activeTab === "overview" ?
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: job?.jobSummary || '' }}
            /> :
            <ApplicationForm id={id} />
          }
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
