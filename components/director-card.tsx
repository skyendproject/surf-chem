import Image from "next/image";
import Link from "next/link";
import type { Director } from "@/types/director";

interface DirectorCardProps {
  director: Director;
}

export function DirectorCard({ director }: DirectorCardProps) {
  return (
    <Link href={`/board-of-directors/${director.id}`}>
      <div className="p-6 flex flex-col items-center text-center bg-transparent hover:bg-white transition-colors duration-300 ease-in-out">
        <h3 className="text-xl font-bold mb-1">{director.name}</h3>
        <div className="text-sm text-gray-500 mb-2">
          <span className="text-gray-600">Nationality: </span>
          {director.nationality}
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-gray-600">Work Experience: </span>
          {director.experience} years
        </div>

        <div className="mb-4 relative overflow-hidden rounded-lg w-full aspect-square  border-8 border-white">
          <Image
            src={director.image || "/placeholder.svg"}
            alt={director.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        <p className="text-gray-600 text-sm md:text-[16px] mb-6 overflow-hidden text-ellipsis line-clamp-3">
          {director.fullBio}
        </p>


        <button
          className="w-full sm:w-auto px-6 py-3 border-y-0 border-x-4 border-red text-black font-semibold text-lg hover:text-red transition-colors duration-200 whitespace-nowrap"
        >
          Read More
        </button>
      </div>
    </Link>
  );
}
