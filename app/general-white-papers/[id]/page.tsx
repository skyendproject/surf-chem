export const dynamic = 'force-dynamic';

import DownloadButton from "@/components/download-button";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SignInForm } from "@/components/sign-in-form";
import { getWhitePaper } from "@/lib/backend";
import { notFound } from "next/navigation";

interface WhitePaperDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WhitePaperDetailPage({
  params,
}: WhitePaperDetailPageProps) {
  const { id } = await params;
  const whitePaper = await getWhitePaper(id)

  if (!whitePaper) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl px-4 sm:px-14 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-black2 leading-tight uppercase">
                {whitePaper.title}:
              </h1>
              <p className="text-black2 leading-relaxed text-lg">
                {whitePaper.description}
              </p>
            </div>

            {whitePaper.pdf &&
              <div className="flex flex-col w-full max-w-full items-end">
                <DownloadButton href={whitePaper.pdf} text="White Paper" capitalized={true}/>
                <SignInForm />
              </div>
            }
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
