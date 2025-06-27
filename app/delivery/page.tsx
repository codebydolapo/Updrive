"use client"
import React from 'react'
import { useRef, useEffect } from "react";
// import Image from 'next/image';
import animationData from "./delivery.json";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const MyLottieComponent = () => {
    const animationRef = useRef(null);

    async function getLottie() {
        const lot = await import("lottie-web");

        lot.default.loadAnimation({
            autoplay: true,
            loop: true,
            animationData,
            container: animationRef.current!
        })

    }

    useEffect(() => {

        getLottie();

    }, []);
    return (
        <>
            <div className="md:w-[30rem] md:h-[30rem] w-[98vw] h-[10rem] flex items-center justify-center rounded-full relative">
                <div className="w-full z-10" ref={animationRef!}></div>
                {/* <Image alt="" src="/vector.svg" width={0} height={0} className='w-full h-full absolute self-center tint-gray-300' /> */}
            </div>
        </>
    );
};

function page() {
    const router = useRouter()
    const searchParams = useSearchParams();

    const carName = searchParams.get("carName")


    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <MyLottieComponent />
            <p className='mt-12 text-center md:text-lg text-xs'>One <b className='text-[#1da1f2]'>{carName ? carName : "vehicle"}</b> coming right to your location!</p>
        </div>
    )
}

export default page