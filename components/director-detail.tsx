import Image from "next/image";
import Link from "next/link";
import type { Director } from "@/types/director";
import { X } from "lucide-react";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(text: string) {
  return escapeHtml(text)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">$1</a>'
    )
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function markdownToHtml(md: string): string {
  const lines = (md || "").replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let para: string[] = [];
  let list: "ul" | "ol" | null = null;

  const flushPara = () => {
    if (para.length) {
      html.push(`<p style="margin-bottom:1rem">${para.map(inline).join("<br />")}</p>`);
      para = [];
    }
  };
  const closeList = () => {
    if (list) {
      html.push(`</${list}>`);
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      flushPara();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushPara();
      closeList();
      const lvl = heading[1].length;
      const size = lvl === 1 ? "1.875rem" : lvl === 2 ? "1.5rem" : "1.25rem";
      html.push(
        `<h${lvl} style="font-weight:700;font-size:${size};margin-bottom:0.75rem">${inline(heading[2])}</h${lvl}>`
      );
      continue;
    }

    const ul = line.match(/^[-*+]\s+(.*)$/);
    const ol = line.match(/^\d+[.)]\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (list !== type) {
        closeList();
        html.push(
          `<${type} style="list-style-type:${type === "ul" ? "disc" : "decimal"};padding-left:1.5rem;margin-bottom:1rem">`
        );
        list = type;
      }
      html.push(`<li style="margin-bottom:0.25rem">${inline((ul || ol)![1])}</li>`);
      continue;
    }

    closeList();
    para.push(line);
  }

  flushPara();
  closeList();
  return html.join("");
}

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
              className="text-xl text-black leading-relaxed"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(String(content ?? "")) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
