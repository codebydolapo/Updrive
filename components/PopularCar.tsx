import { Heart, User, Fuel, Gauge } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import PopularCars from '@/types/popularCars'
import Link from 'next/link'

function PopularCar({ name, price, location, image, seaters, tankCapacity, background, id, manual }: PopularCars) {
    return (
        <Link 
            href={`/car/${id}`}
            className={`group relative flex flex-col justify-between 
                        min-w-[280px] max-w-[320px] md:min-w-[300px] 
                        h-[400px] md:h-[380px] p-5 rounded-3xl 
                        transition-all duration-300 ease-out
                        hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20
                        ${background || 'bg-white border border-slate-100'}`}
        >
            {/* Header: Name & Like Button */}
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">{location}</p>
                </div>
                <button className="p-2 bg-white/50 backdrop-blur-sm rounded-full shadow-sm hover:bg-red-50 transition-colors">
                    <Heart className="size-5 text-slate-400 hover:text-red-500 hover:fill-red-500 transition-all" />
                </button>
            </div>

            {/* Image Section: Using a Container for consistent scale */}
            <div className="relative w-full h-32 flex items-center justify-center my-4">
                <Image 
                    src={image} 
                    alt={name} 
                    width={260} 
                    height={120}
                    className="object-contain transform group-hover:scale-110 transition-transform duration-500" 
                />
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="flex flex-col items-center gap-1 p-2 rounded-2xl bg-white/40">
                    <User className="size-4 text-slate-600" />
                    <span className="text-[10px] font-semibold text-slate-700">{seaters} People</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 rounded-2xl bg-white/40">
                    <Fuel className="size-4 text-slate-600" />
                    <span className="text-[10px] font-semibold text-slate-700">{tankCapacity}L</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-2 rounded-2xl bg-white/40">
                    <Gauge className="size-4 text-slate-600" />
                    <span className="text-[10px] font-semibold text-slate-700">
                        {manual ? 'Manual' : 'Auto'}
                    </span>
                </div>
            </div>

            {/* Footer: Price & CTA */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-900/5">
                <div>
                    <span className="text-2xl font-black text-slate-900">${price}</span>
                    <span className="text-sm text-slate-500 font-medium">/day</span>
                </div>
                
                <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold 
                                   hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-slate-200">
                    Rent Now
                </button>
            </div>
        </Link>
    )
}

export default PopularCar