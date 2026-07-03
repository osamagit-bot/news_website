'use client'

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { categories, categoryMeta, getByCategory } from "@/lib/articles"
import { ArrowRight } from "lucide-react"
import api from "@/lib/api"
import { useLanguage } from "@/context/LanguageContext";

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { useEffect, useState } from "react"

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-")
}
const FALLBACK_CATEGORIES =[
  {id:1 ,name:'Sports', article_count:'3', button_text:'Explore More',image :'/images/feature-bridge.png'},
  {id:2, name:'World', article_count:'11', button_text:'Explore More',image :'/images/feature-bridge.png'},

]
export default function CategoriesOverview() {
const [category, setCategory] = useState<any[]>([]);
const {language} = useLanguage()


useEffect(() => {
 const fetchCategories = async () => {
  try {
    const response = await api.get("/categories/");

    const data = response.data;

    if (Array.isArray(data)) {
      setCategory(data);
    } else {
      console.warn("API did not return array:", data);
      setCategory([]);
    }

  } catch (error) {
    console.log(error, "Error Fetching Categories");
    setCategory([]);
  }
};

  fetchCategories();
}, [language]);

const available_categories = category.length > 0
  ? category
  : FALLBACK_CATEGORIES;






  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="font-display text-3xl lg:text-5xl font-bold  tracking-tight text-black">Browse <span className="text-brand">Categories</span></p>
       </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="categories-slider"
      >
        {available_categories.map((category) => {
        
          return (
            <SwiperSlide key={category.id}>
              <Link href={`/category/${slugify(category.name)}`}>
                <div className="group relative overflow-hidden rounded-md">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                    <h3 className="font-display text-md lg:text-2xl font-bold text-navy-foreground">{category.name}</h3>
                    <p className="text-xs text-navy-foreground/70">{category.article_count}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      {category.button_text} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <style jsx>{`
        :global(.categories-slider) {
          padding-bottom: 3rem !important;
        }
        
        :global(.categories-slider .swiper-pagination-bullet) {
          background: #1a2a3a;
          opacity: 0.5;
        }
        
        :global(.categories-slider .swiper-pagination-bullet-active) {
          background: #e31837;
          opacity: 1;
        }
        
        :global(.categories-slider .swiper-pagination) {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  )
}