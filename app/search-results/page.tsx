"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { searchAll, SearchResult } from "@/lib/search";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      searchAll(query).then((searchResults) => {
        setResults(searchResults);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [query]);

  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.type]) {
      acc[result.type] = [];
    }
    acc[result.type].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-8 sm:py-12 bg-white max-w-[1600px] mx-auto">
        <div className="container mx-auto px-4 sm:px-16">
          <h1 className="text-5xl sm:text-6xl md:text-[66px] font-bold mb-6 text-black2 mt-8">
            Search Results
          </h1>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Searching...</p>
            </div>
          ) : query ? (
            <>
              <div className="mb-8">
                <p className="text-xl text-gray-700">
                  Results Found: <span className="font-bold">{results.length}</span>
                </p>
                <p className="text-lg text-gray-600 mt-2">
                  Search query: <span className="font-semibold">&quot;{query}&quot;</span>
                </p>
              </div>

              {results.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">
                    No results found for &quot;{query}&quot;
                  </p>
                  <p className="text-gray-500">
                    Try different keywords or check your spelling.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {Object.entries(groupedResults).map(([type, items]) => (
                    <div key={type} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h2 className="text-2xl md:text-3xl font-bold text-black2 mb-4">
                        {type}
                      </h2>
                      <div className="space-y-4">
                        {items.map((result) => (
                          <Link
                            key={result.id}
                            href={result.url}
                            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <h3 className="text-xl font-semibold text-greenCustom mb-2">
                              {result.title}
                            </h3>
                            {result.description && (
                              <p className="text-gray-600 line-clamp-2">
                                {result.description}
                              </p>
                            )}
                            <p className="text-sm text-gray-500 mt-2">
                              {result.url}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Please enter a search query.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

