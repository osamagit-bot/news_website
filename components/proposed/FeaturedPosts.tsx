'use client'

import { User, Clock } from "lucide-react"
import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import api from "@/lib/api"
import { useLanguage } from "@/context/LanguageContext"

const featuredPosts = [
  {
    id: "f1",
    news_title: "Guide to Picking the Best Travel Card",
    excerpt: "",
    news_category: "Travel",
    published_by: "Johen Doe",
    published_at: "12 March, 2021",
    image: "/images/feature-bridge.png",
  },
  {
    id: "f2",
    news_title: "If you want to find your life, you go to nature.",
    excerpt: "",
    news_category: "Lifestyle",
    published_by: "Johen Doe",
    published_at: "12 March, 2021",
    image: "/images/feature-lake.png",
  },
  {
    id: "f3",
    news_title: "Try to be happy all the time no matter.",
    excerpt: "",
    news_category: "Music",
    published_by: "Johen Doe",
    published_at: "12 March, 2021",
    image: "/images/feature-concert.png",
  },
]







export default function FeaturedPosts() {
  const[posts, setPosts] = useState([]);
  const {language }= useLanguage();

 useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/news/latest/");
        setPosts(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
        setPosts([]);
      }
    };

    fetchData();
  }, [language]);

const available_posts = posts.length > 0 ? posts : featuredPosts;



  return (
   <section className="bg-background py-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="mb-10 font-display text-3xl lg:text-5xl font-bold tracking-tight">
      Latest <span className="text-brand">News</span>

    </h2>

    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {available_posts.map((post) => (
        <article key={post.id} className="group">
          {/* Image */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={post.image}
              alt={post.news_title}
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-125"
            />

            {/* Category */}
            <span className="absolute left-5 top-5 rounded-full bg-brand px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {post.news_category}
            </span>
          </div>

          {/* Floating Content Card */}
          <div className="relative z-10 mx-5 -mt-16 rounded-2xl shadow-sm bg-white p-6 ">
            <h3 className="font-display text-xl font-bold leading-snug text-gray-900">
              <a href="#" className="transition-colors hover:text-brand">
                {post.news_title}
              </a>
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 text-brand" />
                {post.published_by}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" />
                {post.published_at}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
  )
}