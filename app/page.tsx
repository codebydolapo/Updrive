import { CarFront, Fuel, Heart, User } from "lucide-react";
import Image from "next/image";
import PopularCars from "@/types/popularCars";
import PopularCar from "@/components/PopularCar";
import popularCars from "@/data/popularCars";
import CarCard from "@/components/CarCard";




export default function Home() {
  return (
    <div className="w-[100vw] relative flex flex-col items-center">
      <div className="md:w-[110vw] md:h-[110vw] w-[100vh] h-[100vh] bg-[#1da1f2] rounded-b-full left-1/2 -translate-x-1/2 absolute -z-10 md:-top-[60vw] -top-[50vh]"></div>
      <div className="md:mt-10 mt-20 flex flex-col md:max-w-[55rem] max-w-[100vw]">
        <h1 className="text-white md:text-[5rem] text-5xl font-semibold text-center tracking-tight md:leading-20">The Best Platform For Car Rentals</h1>
      </div>
      <div className="md:mt-0 mt-5 flex flex-col md:max-w-[40rem] max-w-[90vw]">
        <p className="text-white text-sm font-light text-center">We open the doors for you to explore the world in comfort and style, being your trusted car rental partner</p>
      </div>
      <Image src={"/images/SUV.png"} alt="" unoptimized width={0} height={0} className="md:w-[70vw] w-[90vw] h-auto" />
      <div className="md:my-10 my-10 w-full overflow-hidden"> {/* Add overflow-hidden */}
        <div className="flex items-center w-max animate-scroll-x"> {/* Add w-max and animation class */}
          {/* Duplicate your logo set to create the perpetual scroll effect */}
          {/* First set of logos */}
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/1.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/2.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/3.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/4.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/5.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/6.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>

          {/* Second set of logos (duplicate of the first set) */}
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/1.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/2.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/3.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/4.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/5.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center flex-shrink-0">
            <Image src={"/images/logos/6.png"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
          </div>
        </div>
      </div>
      <div className="md:my-10 mt-5 flex flex-col items-start justify-start w-[100vw] scrollbar-hidden">
        <h1 className="font-semibold md:text-3xl text-xl">Some of Our Popular Cars</h1>
        <div className="w-full mt-5 flex items-center justify-around overflow-x-scroll no-scrollbar scrollbar-hidden">
          {
            popularCars.map(({ name, price, location, image, manual, seaters, tankCapacity, background, id }) => {
              return (
                <PopularCar
                  key={id! + Math.round(Math.random() * 10)}
                  name={name}
                  price={price}
                  location={location}
                  image={image}
                  manual={manual}
                  seaters={seaters}
                  tankCapacity={tankCapacity}
                  background={background} />
              )
            })
          }
        </div>
      </div>
      <div className="my-10 w-full flex bg-gray-200">
        <div className="w-[50%] flex items-center justify-center">
          <Image src={"/images/rentalBanner.webp"} alt="" unoptimized width={0} height={0} className="w-[70%] h-auto" />
        </div>
        <div className="w-[50%] flex flex-col items-start justify-center space-y-4 pr-[12rem]">
          <h1 className="font-bold text-4xl">Download our app!</h1>
          <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tempore tenetur quidem odit quos dicta, minus exercitationem autem magnam inventore assumenda temporibus! Architecto fugit quaerat magnam dolorum repellendus quas quia.</p>
          <button className="bg-black px-3 py-2 text-sm text-white rounded-full">Download Now</button>
        </div>
      </div>
      <div className="md:my-10 my-20 flex flex-col items-start justify-start w-[100vw] scrollbar-hidden">
        <h1 className="font-semibold text-3xl">The Best Platform For Car Rentals</h1>
        <div className="w-full mt-5 flex flex-wrap items-center justify-around no-scrollbar scrollbar-hidden">
          {
            popularCars.map(({ name, price, location, image, manual, seaters, tankCapacity, background, id }) => {
              return (
                <CarCard
                  key={id! + Math.round(Math.random() * 10)}
                  name={name}
                  price={price}
                  location={location}
                  image={image}
                  manual={manual}
                  seaters={seaters}
                  tankCapacity={tankCapacity}
                  background={background}
                />
              )
            })
          }
        </div>
      </div>
    </div >
  );
}
