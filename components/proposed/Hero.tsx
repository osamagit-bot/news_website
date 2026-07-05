"use client"

import { useEffect, useState } from "react"
import { User, Clock, Flame, ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"
import { useLanguage } from "@/context/LanguageContext"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import api from "@/lib/api"

const heroPosts = [
  {
    id: "h1",
    title: "Pick The Best Travel Guide Book To Enjoy With Travel",
    category: "Fashion",
    published_by: "Johen Doe",
    published_at: "12 March, 2021",
    image: "/images/hero-travel.png",
  },
  {
    id: "h2",
    title: "Essential Things For A Successful Music Festival",
    category: "Music",
    published_by: "Johen Doe",
    published_at: "12 March, 2021",
    image: "/images/hero-music.png",
  },
  {
    id: "h3",
    title: "How Nature Walks Reset Your Mind And Mood",
    category: "Travel",
    published_by: "Johen Doe",
    published_at: "12 March, 2021",
    image: "/images/hero-nature.png",
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [herodata, setHerodata] = useState([])
  const { language } = useLanguage()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/news/hero/")
        setHerodata(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
        setHerodata([])
      }
    }
    fetchData()
  }, [language])

  // Use API data if available, otherwise fallback to static data
  const heroData = herodata.length > 0 ? herodata : heroPosts
  const totalSlides = heroData.length

  // Navigation functions
  const goToPrev = () => {
    setActive((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setActive((prev) => (prev + 1) % totalSlides)
  }

  return (
    <section className="bg-background py-2 z-10">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] gap-2 lg:gap-0 items-stretch">

          {/* LEFT PEEK - Only show if more than 1 slide */}
          {totalSlides > 1 && (
            <button
              onClick={goToPrev}
              className="hidden lg:block relative h-[500px] overflow-hidden"
              aria-label="Previous slide"
            >
              <img
                src={heroData[(active - 1 + totalSlides) % totalSlides].image}
                alt=""
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute inset-0 bg-navy/30" />
            </button>
          )}

          {/* SWIPER MAIN */}
          <div className="relative overflow-hidden lg:mx-3 lg:rounded-lg h-[420px] sm:h-[500px] lg:h-[600px]">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={1200}
              loop={totalSlides > 1} // Only loop if more than 1 slide
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(swiper) => setActive(swiper.realIndex)}
              className="h-full"
            >
              {heroData.map((item) => (
                <SwiperSlide key={item.id} className="h-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover scale-125 transition-transform duration-[6000ms] ease-linear"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-10">
                      <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <span className="rounded bg-amber-400 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase text-navy">
                          {item.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-white">
                          <Flame className="h-3 w-3 sm:h-4 sm:w-4 text-brand" />
                          Trending
                        </span>
                      </div>
                      <h1 className="max-w-2xl font-display text-lg sm:text-2xl lg:text-5xl font-extrabold text-white leading-tight">
                        {item.title}
                      </h1>
                      <div className="mt-3 sm:mt-5 flex flex-wrap gap-4 text-xs sm:text-sm text-white/85">
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {item.published_by}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {item.published_at}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT PEEK - Only show if more than 1 slide */}
          {totalSlides > 1 && (
            <button
              onClick={goToNext}
              className="hidden lg:block relative h-[500px] overflow-hidden"
              aria-label="Next slide"
            >
              <img
                src={heroData[(active + 1) % totalSlides].image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/20" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="rounded bg-amber-400 px-2 py-1 text-xs font-bold uppercase text-navy">
                  {heroData[(active + 1) % totalSlides].category}
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold text-white">
                  {heroData[(active + 1) % totalSlides].title}
                </h2>
              </div>
            </button>
          )}
        </div>

        {/* CONTROLS - Only show if more than 1 slide */}
        {totalSlides > 1 && (
          <div className="mx-auto mt-3 sm:mt-4 flex max-w-7xl items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4">
            <button
              onClick={goToPrev}
              className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-secondary text-navy hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="flex items-center gap-2">
              {heroData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 sm:w-7 bg-brand" : "w-2.5 bg-navy/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-secondary text-navy hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}