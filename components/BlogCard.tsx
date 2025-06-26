import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Blogs from '@/types/blogs'

function BlogCard({title, datePublished, image, excerpt}: Blogs) {
    return (
        <div className='md:w-[23%] h-[30rem] w-full shadow-xl pb-2 md:p-0 p-2 relative rounded-xl bg-gray-100 md:my-0 my-4'>
            <div className='w-full'>
                <Image
                    src={image}
                    alt={``}
                    unoptimized
                    width={0}
                    height={0}
                    className="w-full h-full object-cover rounded-t-xl"
                />
            </div>
            <p className='text-[#1da1f2] text-xs my-2'>{datePublished}</p>
            <h1 className='font-semibold md:text-2xl text-xl'>{title}</h1>
            <p className='text-sm font-light my-2'>{excerpt}</p>

            <p className='text-[#1da1f2] text-sm font-semibold flex items-center absolute bottom-2'>Learn More
                <ChevronRight/>
            </p>
        </div>
    )
}

export default BlogCard