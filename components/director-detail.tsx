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

          {director.fullBio.map((paragraph, index) => (
            <p key={index} className="text-xl text-black mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
