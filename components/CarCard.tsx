import { Heart, User, Fuel, CarFront } from 'lucide-react'; // Import HeartOff
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PopularCars from '@/types/popularCars';

function CarCard({ name, price, location, image, seaters, tankCapacity, id }: PopularCars) {
  // Generate a random boolean to decide if the heart should be filled
  const isHeartFilled = Math.random() < 0.5; // This will make about half of them filled

  return (
    <Link className={`shadow-md md:min-w-[14vw] md:max-w-[14vw] min-w-[48vw] max-w-[48vw] flex flex-col items-center justify-between md:h-[17vw] h-[60vw] p-2 rounded-lg md:my-4 md:mx-4 my-2`} href={`/car/${id}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-1 flex-col items-start justify-start">
          <p className="text-md font-bold">{name}</p>
          <p className="text-black-300 md:text-sm text-xs">{location}</p>
        </div>
        <div className="">
          {isHeartFilled ? (
            <Heart className="size-6 text-red-500 fill-current" /> // Filled red heart
          ) : (
            <Heart className="size-6" /> // Outlined heart
          )}
        </div>
      </div>
      <div className="w-full h-[60%] flex items-center justify-center">
        <Image src={image} alt="" unoptimized width={0} height={0} className="w-[90%] h-auto" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center space-x-1">
          <User className="size-4" />
          <p className="text-[0.6rem] font-light">{seaters}</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <Fuel className="size-4" />
          <p className="text-[0.6rem] font-light">{tankCapacity} L</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <CarFront className="size-4" />
          <p className="text-[0.6rem] font-light">Manual</p>
        </div>
      </div>
      <div className="flex items-center justify-around w-full">
        <div className="flex items-start justify-start">
          <p className="text-sm font-bold">${price}<strong className="text-[0.5rem] font-light">/day</strong></p>
        </div>
        <div className="flex-1 flex items-end justify-end">
          <button className="md:py-2 py-1 px-4 md:text-xs text-[0.7rem] font-semibold bg-[#1da1f2] md:rounded-full rounded-lg text-white ">Rent Now!</button>
        </div>
      </div>
    </Link>
  );
}

export default CarCard;