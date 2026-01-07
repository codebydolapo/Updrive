import { Heart, User, Fuel, Gauge } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PopularCars from '@/types/popularCars';

function CarCard({ name, price, location, image, seaters, tankCapacity, id, manual }: PopularCars) {
  // Use the ID to create a stable "random" state so it doesn't flicker on re-render
  const isHeartFilled = id ? id % 3 === 0 : false; 

  return (
    <Link 
      href={`/car/${id}`}
      className="group bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 
                 flex flex-col justify-between 
                 w-full sm:max-w-[300px] min-h-[380px] 
                 p-4 rounded-2xl transition-all duration-300 ease-in-out"
    >
      {/* Header Section */}
      <div className="flex justify-between items-start w-full">
        <div className="space-y-0.5">
          <h3 className="font-bold text-lg text-slate-900 truncate max-w-[150px]">
            {name}
          </h3>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
            {location}
          </p>
        </div>
        <button className="transition-transform active:scale-90">
          <Heart 
            className={`size-5 ${isHeartFilled ? 'text-red-500 fill-red-500' : 'text-slate-300'}`} 
          />
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-32 flex items-center justify-center my-6">
        <Image 
          src={image} 
          alt={name} 
          width={220} 
          height={100}
          unoptimized 
          className="object-contain transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Subtle shadow gradient under car */}
        <div className="absolute bottom-2 w-3/4 h-2 bg-slate-900/5 blur-xl rounded-[100%]" />
      </div>

      {/* Specs Row */}
      <div className="flex items-center justify-between w-full py-3 border-t border-slate-50">
        <div className="flex items-center gap-1.5">
          <User className="size-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">{seaters}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Fuel className="size-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">{tankCapacity}L</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Gauge className="size-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">
            {manual ? 'Manual' : 'Auto'}
          </span>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="flex items-center justify-between w-full pt-3">
        <div className="flex flex-col">
          <p className="text-xl font-extrabold text-slate-900 leading-none">
            ${price}
          </p>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">per day</span>
        </div>
        
        <button className="bg-[#1da1f2] hover:bg-blue-600 text-white 
                           px-5 py-2.5 rounded-xl text-sm font-bold 
                           transition-colors shadow-lg shadow-blue-100 active:translate-y-0.5">
          Rent Now
        </button>
      </div>
    </Link>
  );
}

export default CarCard;