"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getCompanyHistory } from "@/lib/backend";
import { useEffect, useState } from "react";

export default function CompanyHistoryPage() {
  const [html, setHtml] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanyHistory().then((data) => {
      setHtml(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-gray-500">Loading company history...</div>
        ) : (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
