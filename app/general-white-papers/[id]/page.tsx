import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SignInForm } from "@/components/sign-in-form";
import { Button } from "@/components/ui/button";
import { getWhitePaper } from "@/lib/backend";
import Link from "next/link";
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

            {/* Right side - Sign In Form */}
            <div className="flex flex-col w-full max-w-full items-end">
              {whitePaper.pdf && <Button
                type="submit"
                className="px-10 mb-20 bg-transparent hover:bg-transparent border-y-0 border-x-4 text-black border-red hover:text-red rounded-none font-bold text-4xl"
              >
                <Link href={whitePaper.pdf} target="_blank" rel="noopener noreferrer">
                  DOWNLOAD PDF
                </Link>
              </Button>}
              <SignInForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
