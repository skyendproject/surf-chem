import { DirectorDetail } from "@/components/director-detail";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { directors } from "@/data/directors";
import { getBoardOfDirector } from "@/lib/backend";
import { Director } from "@/types/director";
import { notFound } from "next/navigation";

interface DirectorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return directors.map((director) => ({
    id: director.id,
  }));
}

export default async function DirectorPage({ params }: DirectorPageProps) {
  const { id } = await params;

  const director = await getBoardOfDirector(id);

  if (!director) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}

      <div className="bg-greenCustom py-2"></div>

      {/* Director Detail Section */}
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-black z-10"></div>
        {/* White Background Section - full height */}
        <div className="absolute top-0 left-0 w-full h-full bg-white z-0"></div>

        <div className="container mx-auto px-4 sm:px-12 z-30 relative py-12">
          <DirectorDetail director={director as Director} />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
