import { NewsCard } from "@/components/news-card";
import { getNews } from '@/lib/backend';
import { NewsArticle } from '@/types/news';
import { useEffect, useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation as SwiperNavigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Resources() {
  const [news, setNews] = useState<NewsArticle[]>([])
  useEffect(() => {
    getNews().then(setNews)
    return () => { }
  }, [])

  return (
    <div>
      <section className="py-16 bg-white">
        {/* Title */}
        <div className="w-full flex justify-center">
          <h1 className="text-5xl md:text-6xl text-center text-black2 font-bold mb-6">
            Resources
          </h1>
        </div>

        {/* Slider */}
        <div className="container relative px-8 sm:px-16 lg:max-w-[1400px] lg:mx-auto">
          {/* Custom Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-3"
            id="prevBtn"
          >
            <BiSolidLeftArrow className="text-gray-200 text-4xl" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-3"
            id="nextBtn"
          >
            <BiSolidRightArrow className="text-gray-200 text-4xl" />
          </button>

          <Swiper
            modules={[SwiperNavigation, Pagination]}
            spaceBetween={35} // 🔥 Increased gap between cards
            slidesPerView={1}
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {news.map((article) => (
              <SwiperSlide key={article.id}>
                {/* Wrap card with padding */}
                <div className="">
                  <NewsCard article={article} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
