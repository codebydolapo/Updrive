// app/delivery/page.tsx
'use client'; // This page component itself is now a client component to allow for Suspense

import React, { useRef, useEffect, Suspense } from "react";
import animationData from "./delivery.json"; // Assuming this path is correct relative to the component
import { useRouter, useSearchParams } from 'next/navigation';

// MyLottieComponent will now be defined directly within this file, or as a separate component file
// If it's a separate file, make sure it still has 'use client' at the top.

const MyLottieComponentContent = () => {
  const animationRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams(); // This hook is now safely within a client component rendered after Suspense

  const carName = searchParams.get("carName");

  async function getLottie() {
    const lot = await import("lottie-web");

    lot.default.loadAnimation({
      autoplay: true,
      loop: true,
      animationData,
      container: animationRef.current!
    });
  }

  useEffect(() => {
    getLottie();
  }, []);

  useEffect(() => {
    // Navigate after 3 seconds
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]); // Added router to the dependency array

  return (
    <div className="md:w-[30rem] md:h-[30rem] w-[98vw] h-[10rem] flex flex-col items-center justify-center rounded-full relative">
      <div className="w-full z-10" ref={animationRef!}></div>
      <p className='mt-12 text-center md:text-lg text-xs'>
        One <b className='text-[#1da1f2]'>{carName ? carName : "vehicle"}</b> coming right to your location!
      </p>
    </div>
  );
};


function DeliveryPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      {/* Wrap MyLottieComponentContent in Suspense */}
      <Suspense fallback={<div>Loading delivery details...</div>}>
        <MyLottieComponentContent />
      </Suspense>
    </div>
  );
}

export default DeliveryPage;