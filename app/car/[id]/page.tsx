"use client";
import { usePathname } from 'next/navigation';
import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import popularCars from '@/data/popularCars';
import { Heart, Fuel, Users, Gauge, Car, Star, ClipboardList, MapPin, Wrench, CalendarDays } from 'lucide-react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api';
import Link from 'next/link';
import { SignInButton, useUser } from '@clerk/nextjs';

const libraries: Libraries = ["places", "marker"];

function Page() {
    const pathname = usePathname();
    const id = pathname.split('/').pop();

    // All hooks must be called unconditionally at the top level
    const car = useMemo(() => popularCars.find(item => item.id === Number(id)), [id]);

    // State to manage the currently displayed main car image
    const [mainCarImage, setMainCarImage] = useState(car?.image || "/images/placeholder.png");

    // Update main image when car changes or component mounts for the first time
    useEffect(() => {
        if (car?.image) {
            setMainCarImage(car.image);
        } else {
            setMainCarImage("/images/placeholder.png"); // Ensure a placeholder if car or image is missing
        }
    }, [car]);

    // Define defaultCenter unconditionally, providing a fallback if car is not found initially
    const defaultCenter = useMemo(() => ({
        lat: car?.lat || 6.5244, // Default to a fallback coordinate if car is null
        lng: car?.lng || 3.3792
    }), [car]);

    // useLoadScript must also be called unconditionally
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_Maps_API_KEY || "",
        libraries: libraries,
        version: "beta"
    });
     const { user } = useUser()


   

    // Handle case where car is not found - this return statement comes AFTER all hooks
    if (!car) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-700">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Car Not Found</h2>
                    <p className="text-lg">The car you are looking for does not exist.</p>
                    <Link href="/" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const mapContainerStyle = {
        width: '100%',
        height: '350px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    };

   

    return (
        <div className='min-h-screen bg-gray-50 md:p-10 flex flex-col items-center '>
            <div className='md:max-w-[95vw] w-full bg-white rounded-2xl shadow-xl overflow-hidden md:p-8'>
                {/* Main Content Area */}
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>

                    {/* Left Section: Car Image & Thumbnails */}
                    <div className='flex-1 flex flex-col items-center lg:items-center'>
                        {/* Main Car Image */}
                        <div className='w-full h-auto flex items-center justify-center bg-gray-100 rounded-xl p-4 shadow-md'>
                            <Image
                                src={mainCarImage}
                                alt={`Main image of ${car.brand} ${car.name}`}
                                unoptimized
                                width={0}
                                height={0}
                                className="w-full h-auto object-contain max-h-[350px] lg:max-h-[450px]"
                                priority
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className='flex flex-wrap justify-center lg:justify-start gap-3 mt-6'>
                            {
                                car.images && car.images.length > 0 ? (
                                    car.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`md:w-20 md:h-20 w-15 h-15 cursor-pointer border-2
                                                ${mainCarImage === image ? 'border-blue-600 ring-2 ring-blue-300' : 'border-transparent hover:border-blue-500'}
                                                rounded-lg overflow-hidden transition-all duration-200 shadow-sm`}
                                            onClick={() => setMainCarImage(image)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Thumbnail ${index + 1} of ${car.name}`}
                                                unoptimized
                                                width={0}
                                                height={0}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-gray-400 text-sm mt-2">No additional images available.</div>
                                )
                            }
                        </div>
                        {/* Google Map */}
                        <div className='w-full mt-8'>
                            <h3 className='md:text-2xl text-sm font-light text-gray-800 mb-4'>Car Location: <b className='text-[#1da1f2] text-base font-semibold'>{car.location}</b></h3>
                            {loadError && (
                                <div className="flex items-center justify-center min-h-[200px] text-red-600 border border-red-300 bg-red-50 rounded-lg p-4 mb-4">
                                    Error loading maps. Please check your API key and network.
                                </div>
                            )}
                            {!isLoaded && !loadError && (
                                <div className="flex items-center justify-center min-h-[200px] text-gray-700 border border-gray-300 bg-gray-50 rounded-lg p-4 mb-4">
                                    Loading Maps...
                                </div>
                            )}
                            {isLoaded && (
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={defaultCenter}
                                    zoom={14}
                                    options={{
                                        disableDefaultUI: true,
                                        zoomControl: true,
                                        streetViewControl: false,
                                        mapTypeControl: false,
                                        fullscreenControl: false,
                                    }}
                                >
                                    <Marker position={defaultCenter} />
                                </GoogleMap>
                            )}
                        </div>
                    </div>

                    {/* Right Section: Details & Map */}
                    <div className='flex-1 flex flex-col items-start space-y-6'>
                        {/* Car Header */}
                        <div className='w-full flex flex-row md:items-start items-center justify-between pb-4 border-b border-gray-200 '>
                            <div className='flex flex-col'>
                                <h1 className='font-extrabold md:text-4xl text-2xl text-gray-900 leading-tight'>{car.brand} <span className="text-blue-600">{car.name}</span></h1>
                                <p className='md:text-base text-sm text-gray-500 mt-1 flex items-center gap-1'>
                                    <MapPin className="size-4 text-gray-400" /> {car.location}
                                </p>
                                {/* Rating and Reviews */}
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex text-yellow-400">
                                        {Array(5).fill(0).map((_, i) => (
                                            <Star key={i} className={`md:size-5 size-3 ${i < Math.floor(car.rating) ? 'fill-current' : ''}`} />
                                        ))}
                                    </div>
                                    <span className="text-gray-600 md:text-sm text-xs">
                                        {car.rating.toFixed(1)} ({car.reviewsCount} reviews)
                                    </span>
                                </div>
                            </div>
                            <Heart className="md:size-8 size-6 text-red-500 fill-current mt-4 sm:mt-0 cursor-pointer hover:scale-110 transition-transform duration-200" />
                        </div>

                        {/* Description */}
                        <h2 className="md:text-2xl text-lg font-semibold text-gray-800">About this car</h2>
                        <p className='text-gray-700 leading-relaxed md:text-lg text-sm'>
                            {car.description}
                        </p>

                        {/* Car Specifications */}
                        <h2 className="md:text-2xl text-lg font-semibold text-gray-800 mt-4">Specifications</h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                                <Users className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Seaters:</span> {car.seaters}
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                                <Gauge className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Transmission:</span> {car.transmission}
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                                <Fuel className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Fuel Type:</span> {car.fuelType}
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md truncate">
                                <Car className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Engine:</span> {car.engine}
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                                <ClipboardList className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Mileage:</span> {car.mileage.toLocaleString()} km
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                                <Wrench className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Drive Train:</span> {car.driveTrain}
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                                <CalendarDays className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Year:</span> {car.year}
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                                <Fuel className="size-5 text-blue-600" />
                                <span className="font-semibold text-sm md:text-base">Tank Cap.:</span> {car.tankCapacity} L
                            </div>
                        </div>

                        {/* Features Section */}
                        {car.features && car.features.length > 0 && (
                            <>
                                <h2 className="md:text-2xl text-lg font-semibold text-gray-800 mt-4">Features & Amenities</h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-inside text-sm md:text-base">
                                    {car.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <svg className="h-4 w-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Call to Action / Price Section */}
                        <div className='w-full flex flex-col sm:flex-row items-center justify-between py-6 border-t mt-6 '>
                            <p className="text-4xl font-extrabold text-blue-600 mb-4 sm:mb-0">
                                ${car.price}
                                <span className="md:text-xl text-sm font-light text-gray-600">/day</span>
                            </p>
                            {
                                user ?
                            <Link className="px-16 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                                href={`/delivery?carName=${car.name}`}
                            >
                                Rent Now
                            </Link>
                            :
                            <div className="px-16 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                                // href={`${user ? `/delivery?carName=${car.name}` : handleGoogleSignIn}`}
                            >
                                <SignInButton/>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;