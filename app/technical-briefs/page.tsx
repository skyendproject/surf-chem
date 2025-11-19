export const dynamic = 'force-dynamic';

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { TechnicalBriefCard } from "@/components/technical-brief-card";
import { getTechnicalBriefs } from "@/lib/backend";

export default async function TechnicalBriefsPage() {
  const technicalBriefsData = await getTechnicalBriefs();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-16">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
            Technical Briefs
          </h2>
        </div>
      </section>

      {/* All Technical Briefs */}
      <section className="py-4 bg-white">
        <div className="container px-4 sm:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2">
            {technicalBriefsData.map((brief) => (
              <div className="px-4" key={brief.id}>
                <TechnicalBriefCard brief={brief} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
