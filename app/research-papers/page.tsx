export const dynamic = 'force-dynamic';

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { TechnicalBriefCard } from "@/components/technical-brief-card";
import { getResearchPapers } from "@/lib/backend";

export default async function ResearchPapersPage() {
  const researchPapers = await getResearchPapers()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white  max-w-[1600px] mx-auto">
        <div className="container mx-auto px-4 sm:px-14">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold mb-24">
            Research Papers
          </h2>
        </div>
      </section>
      <div className="container px-4 sm:px-16  max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2">
          {researchPapers.map((paper) => (
            <div className="px-4" key={paper.id}>
              <TechnicalBriefCard brief={paper} />
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
