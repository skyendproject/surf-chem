import Link from "next/link";
import type { JobPosition } from "@/data/careers";

interface JobCardProps {
  job: JobPosition;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex-1">
        <h2 className="text-[clamp(24px,2vw,28px)] text-black leading-[30px] font-bold mb-2 md:text-[28px]">
          {job.title}
        </h2>
        <p className="text-[clamp(17px,2vw,22px)] text-black leading-[30px]">
          {job.location}
        </p>
      </div>
      <div className="flex-shrink-0">
        <Link href={`/careers/${job.id}`}>
          <button className="w-full sm:w-auto px-6 py-3 border-y-0 border-x-4 border-red text-black font-bold text-[clamp(23px,2vw,27px)] hover:text-red transition-colors duration-200 whitespace-nowrap">
            Apply For The Position
          </button>
        </Link>
      </div>
    </div>
  );
}
