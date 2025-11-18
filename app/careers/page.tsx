export const dynamic = 'force-dynamic';

import { Footer } from "@/components/footer";
import JobCard from "@/components/job-card";
import { Navigation } from "@/components/navigation";
import { JobPosition } from "@/data/careers";
import { getCareers } from "@/lib/backend";

export default async function CareersPage() {
  const careers = await getCareers()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container px-4 pt-16 pb-6 sm:px-16">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
            {" "}
            Careers
          </h2>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 bg-gray-50 px-4 sm:px-16">
        <div className="space-y-12">
          {careers.map((job) => (
            <JobCard key={job.id} job={job as JobPosition} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Job Detail Modal
      <JobDetailModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      /> */}
    </div>
  );
}
