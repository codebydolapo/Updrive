import { Heart, User, Fuel, CarFront } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import PopularCars from '@/types/popularCars'
import Link from 'next/link'

function PopularCar({ name, price, location, image, manual, seaters, tankCapacity, background, id }: PopularCars) {
    return (
        <Link className={`${background} md:min-w-[18vw] md:max-w-[18vw] min-w-[60vw] max-w-[60vw] flex flex-col items-center justify-between md:h-[19vw] h-[70vw] p-2 rounded-lg mx-2`} href={`/car/${id}`}>
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-1 flex-col items-start justify-start">
                    <p className="text-md font-bold">{name}</p>
                    <p className="text-black-300 text-sm">{location}</p>
                </div>
                <div className="">
                    <Heart className="size-6" />
                </div>
            </div>
            <div className="w-full h-[60%] flex items-center justify-center">
                <Image src={image} alt="" unoptimized width={0} height={0} className="w-[90%] h-auto" />
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center space-x-1">
                    <User className="size-4" />
                    <p className="text-[0.7rem] font-light">{seaters} People</p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    <Fuel className="size-4" />
                    <p className="text-[0.7rem] font-light">{tankCapacity} Liters</p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    <CarFront className="size-4" />
                    <p className="text-[0.7rem] font-light">Manual</p>
                </div>
            </div>
            <div className="flex items-center justify-around w-full">
                <div className="w-[50%] flex items-start justify-start">
                    <p className="text-sm font-bold">${price}<strong className="text-[0.5rem] font-light">/day</strong></p>
                </div>
                <div className="w-[50%] flex items-end justify-end">
                    <button className="py-2 px-4 text-xs bg-black rounded-full text-white ">Rent Now!</button>
                </div>
            </div>
        </Link>
    )
}

export default PopularCar