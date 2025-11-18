import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { NewsCard } from "@/components/news-card";
import { getNews } from "@/lib/backend";

export default async function NewsPage() {
  const newsData = await getNews()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-16">
          <h2 className="text-[48px] md:text-[66px] leading-[60px] md:leading-[70px] text-black2 font-bold">
            {" "}
            News
          </h2>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-4">
        <div className="container px-4 sm:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((article) => (
              <div className="px-4" key={article.id}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
