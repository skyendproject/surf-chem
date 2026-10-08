import Image from "next/image";
import Link from "next/link";
import type { Director } from "@/types/director";
import { X } from "lucide-react";

interface DirectorDetailProps {
  director: Director;
}

export function DirectorDetail({ director }: DirectorDetailProps) {
  return (
    <div className="relative bg-gray-100 rounded-[3rem] shadow-lg p-8 md:p-20">
      {/* Cross button */}
      <Link href="/board-of-directors">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-black bg-white border rounded-full p-1">
          <X size={28} />
        </button>
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-2/3 sm:w-3/12">
          <div className="bg-white p-2 rounded-lg">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={director.image || "/placeholder.svg"}
                alt={director.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-4xl sm:text-5xl text-black2 font-bold mb-2">
            {director.name}
          </h1>
          <p className="text-2xl text-black2 mb-6">
            Nationality: {director.nationality}
          </p>

          {director.fullBio.map((content, index) => (
            <div
              key={index}
              className="text-xl text-black leading-relaxed [&_p]:mb-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1 [&_strong]:font-bold [&_em]:italic [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(content ?? "") }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
