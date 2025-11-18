import type { JobPosition } from "@/data/careers";

interface RoleOverviewProps {
  job: JobPosition;
}

export default function RoleOverview({ job }: RoleOverviewProps) {
  return (
    <div className="space-y-8 px-6">
      <div>
        <h3 className="text-[clamp(17px,2vw,24px)] font-bold text-black2 mb-4">
          Job Summary:
        </h3>
        <p className="text-black leading-relaxed text-[18px]">
          {job?.jobSummary}
        </p>
      </div>

      <div>
        <h3 className="text-[clamp(17px,2vw,24px)] font-bold text-black2 mb-4">
          Responsibilities:
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {job?.responsibilities.map((responsibility, index) => (
            <li
              key={index}
              className="text-black leading-relaxed text-[18px] pl-2"
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {" "}
        <h3 className="text-[clamp(17px,2vw,24px)] font-bold text-black2 mb-4">
          Requirements:
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {job?.requirements.map((requirement, index) => (
            <li
              key={index}
              className="text-black leading-relaxed text-[18px] pl-2"
            >
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {" "}
        <h3 className="text-[clamp(17px,2vw,24px)] font-bold text-black2 mb-4">
          What We Offer:
        </h3>
        <p className="text-black leading-relaxed text-[18px]">
          {job?.whatWeOffer}
        </p>
      </div>

      <div>
        {" "}
        <h3 className="text-[clamp(17px,2vw,24px)] font-bold text-black2 mb-4">
          How to Apply:
        </h3>
        <p className="text-black leading-relaxed text-[18px]">
          {job?.howToApply}
        </p>
      </div>

      <div>
        {" "}
        <h3 className="text-[clamp(17px,2vw,24px)] font-bold text-black2 mb-4">
          Equal Opportunity Employer:
        </h3>
        <p className="text-black leading-relaxed text-[18px]">
          {job?.equalOpportunity}
        </p>
      </div>

      <div className="pt-8 flex justify-center">
        <button className="w-full sm:w-auto px-6 py-3 border-y-0 border-x-4 border-red text-black font-bold text-[28px] hover:text-red transition-colors duration-200 whitespace-nowrap">
          Apply To The Position
        </button>
      </div>
    </div>
  );
}
