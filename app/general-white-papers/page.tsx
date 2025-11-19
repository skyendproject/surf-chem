export const dynamic = 'force-dynamic';

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { WhitePaperCard } from "@/components/white-paper-card";
import { getWhitePapers } from "@/lib/backend";

export default async function GeneralWhitePapersPage() {

  const whitePapers = await getWhitePapers();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white  max-w-[1600px] mx-auto">
        <div className="container px-4 sm:px-16">
          <div className="max-w-6xl">
            <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
              White Papers
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4  max-w-[1600px] mx-auto">
        <div className="container px-4 sm:px-16">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-2">
            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                {whitePapers.map((whitePaper) => (
                  <div className="px-4" key={whitePaper.id}>
                    <WhitePaperCard whitePaper={whitePaper} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
