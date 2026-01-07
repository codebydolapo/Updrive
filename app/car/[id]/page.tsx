"use client";
import { usePathname } from 'next/navigation';
import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import popularCars from '@/data/popularCars';
import { 
    Heart, Fuel, Users, Gauge, Car, Star, 
    ClipboardList, MapPin, Wrench, CalendarDays, 
    CheckCircle2, Info
} from 'lucide-react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api';
import Link from 'next/link';
import { SignInButton, useUser } from '@clerk/nextjs';

const libraries: Libraries = ["places", "marker"];

function CarPage() {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const { user } = useUser();

    const car = useMemo(() => popularCars.find(item => item.id === Number(id)), [id]);
    const [mainCarImage, setMainCarImage] = useState(car?.image || "/images/placeholder.png");

    useEffect(() => {
        if (car?.image) setMainCarImage(car.image);
    }, [car]);

    const defaultCenter = useMemo(() => ({
        lat: car?.lat || 6.5244,
        lng: car?.lng || 3.3792
    }), [car]);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_Maps_API_KEY || "",
        libraries: libraries,
        version: "beta"
    });

    if (!car) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-50">
                <div className="text-center p-12 bg-white rounded-3xl shadow-xl max-w-md">
                    <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Info className="size-10 text-red-500" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Car Not Found</h2>
                    <p className="text-slate-500 mb-8">We couldn&apos;t find the vehicle you&apos;re looking for. It might have been unlisted.</p>
                    <Link href="/" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all block text-center">
                        Back to Fleet
                    </Link>
                </div>
            </div>
        );
    }

    const mapContainerStyle = { width: '100%', height: '350px', borderRadius: '24px' };

    return (
        <div className='min-h-screen bg-[#F6F7F9]'>
            {/* Breadcrumbs / Back button */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <Link href="/" className="text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center gap-2">
                    ← Back to results
                </Link>
            </div>

            <main className='max-w-7xl mx-auto px-4 lg:px-6 pb-24'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    
                    {/* LEFT COLUMN: Visuals (Sticky on Desktop) */}
                    <div className='lg:w-7/12'>
                        <div className="lg:sticky lg:top-24 space-y-6">
                            {/* Main Display */}
                            <div className='relative aspect-video bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 flex items-center justify-center overflow-hidden'>
                                <div className="absolute top-6 right-6">
                                    <button className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform">
                                        <Heart className="size-6 text-red-500 fill-red-500" />
                                    </button>
                                </div>
                                <Image
                                    src={mainCarImage}
                                    alt={car.name}
                                    width={800}
                                    height={500}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>

                            {/* Thumbnails Gallery */}
                            <div className='flex gap-4 overflow-x-auto pb-2 no-scrollbar'>
                                {car.images?.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setMainCarImage(img)}
                                        className={`relative flex-shrink-0 w-24 h-20 rounded-2xl overflow-hidden border-2 transition-all
                                            ${mainCarImage === img ? 'border-blue-600 ring-4 ring-blue-50' : 'border-white hover:border-slate-200 shadow-sm'}`}
                                    >
                                        <Image src={img} alt="preview" fill className="object-cover" />
                                    </button>
                                ))}
                            </div>

                            {/* Map Card */}
                            <div className="hidden lg:block bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <MapPin className="size-5 text-blue-600" /> Location: {car.location}
                                </h3>
                                <div className="rounded-3xl overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
                                    {isLoaded ? (
                                        <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={14} options={{ disableDefaultUI: true }}>
                                            <Marker position={defaultCenter} />
                                        </GoogleMap>
                                    ) : <div className="h-[350px] bg-slate-100 animate-pulse" />}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Details & Action */}
                    <div className='lg:w-5/12 space-y-8'>
                        {/* Title Section */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                            <h1 className='text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-2'>
                                {car.brand} <span className="text-blue-600">{car.name}</span>
                            </h1>
                            <div className="flex items-center gap-4 text-slate-500 mb-6">
                                <div className="flex items-center text-amber-400">
                                    <Star className="size-4 fill-current" />
                                    <span className="ml-1 text-slate-900 font-bold">{car.rating.toFixed(1)}</span>
                                </div>
                                <span className="text-sm font-medium">• {car.reviewsCount} verified reviews</span>
                            </div>
                            <p className='text-slate-600 leading-relaxed text-lg'>
                                {car.description}
                            </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Users, label: "Seaters", val: car.seaters },
                                { icon: Gauge, label: "Type", val: car.transmission },
                                { icon: Fuel, label: "Fuel", val: car.fuelType },
                                { icon: CalendarDays, label: "Year", val: car.year },
                                { icon: Wrench, label: "Drive", val: car.driveTrain },
                                { icon: ClipboardList, label: "Mileage", val: `${car.mileage.toLocaleString()}km` }
                            ].map((spec, i) => (
                                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                                    <div className="bg-blue-50 p-2 rounded-xl">
                                        <spec.icon className="size-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{spec.label}</p>
                                        <p className="text-sm font-bold text-slate-900">{spec.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Premium Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {car.features?.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 className="size-5 text-green-500" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Booking Sidebar / Floating Bottom Mobile */}
                        <div className="fixed bottom-0 left-0 right-0 lg:relative bg-white lg:bg-blue-600 p-6 lg:p-10 lg:rounded-[2rem] border-t lg:border-none border-slate-200 z-50 flex items-center justify-between lg:flex-col lg:items-start lg:gap-6 shadow-2xl lg:shadow-blue-200">
                            <div>
                                <p className="text-slate-500 lg:text-blue-100 text-xs font-bold uppercase tracking-widest">Total Price</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl lg:text-4xl font-black text-slate-900 lg:text-white">${car.price}</span>
                                    <span className="text-sm text-slate-500 lg:text-blue-200 font-medium">/ day</span>
                                </div>
                            </div>
                            
                            {user ? (
                                <Link 
                                    href={`/delivery?carName=${car.name}`}
                                    className="lg:w-full bg-blue-600 lg:bg-white text-white lg:text-blue-600 py-4 px-10 rounded-2xl font-bold text-center shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    Rent This Car
                                </Link>
                            ) : (
                                <div className="lg:w-full bg-blue-600 lg:bg-white text-white lg:text-blue-600 px-10 py-4 rounded-2xl font-bold text-center shadow-lg">
                                    <SignInButton mode="modal" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CarPage;