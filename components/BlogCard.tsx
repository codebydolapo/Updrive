import React from 'react'
import Image from 'next/image'
import { ChevronRight, Calendar } from 'lucide-react'
import Blogs from '@/types/blogs'

function BlogCard({ title, datePublished, image, excerpt }: Blogs) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-[#1da1f2] mb-3">
          <Calendar className="size-3.5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            {datePublished}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-[#1da1f2] transition-colors mb-3">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
          {excerpt}
        </p>

        {/* Action Link - Pushed to bottom via margin-top-auto */}
        <div className="mt-auto pt-4 border-t border-slate-50">
          <button className="flex items-center gap-1 text-[#1da1f2] text-sm font-bold hover:gap-2 transition-all">
            Read Full Article
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard