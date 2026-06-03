'use client'

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { categories, categoryMeta, getByCategory } from "@/lib/articles"
import { ArrowRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-")
}

export default function CategoriesOverview() {
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
        {categories.map((category) => {
          const count = getByCategory(category).length
          return (
            <SwiperSlide key={category}>
              <Link href={`/category/${slugify(category)}`}>
                <div className="group relative overflow-hidden rounded-md">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={categoryMeta[category].image || "/placeholder.svg"}
                      alt={category}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                    <h3 className="font-display text-md lg:text-2xl font-bold text-navy-foreground">{category}</h3>
                    <p className="text-xs text-navy-foreground/70">{count} articles</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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