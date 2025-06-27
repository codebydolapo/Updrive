import Image from "next/image";
// import PopularCars from "@/types/popularCars";
import PopularCar from "@/components/PopularCar";
import popularCars from "@/data/popularCars";
import CarCard from "@/components/CarCard";
import BlogCard from "@/components/BlogCard";
import blogs from "@/data/blogs";




export default function Home() {
  return (
    <div className="w-full relative flex flex-col items-center">
      <div className="md:w-[110vw] md:h-[110vw] w-[100vh] h-[100vh] bg-[#1da1f2] rounded-b-full left-1/2 -translate-x-1/2 absolute -z-10 md:-top-[60vw] -top-[50vh]" />
      <div className="md:mt-10 mt-20 flex flex-col md:max-w-[55rem] max-w-[100vw]">
        <h1 className="text-white md:text-[5rem] text-4xl font-semibold text-center tracking-tight md:leading-20">The Best Platform For Car Rentals</h1>
      </div>
      <div className="flex flex-col md:max-w-[40rem] max-w-[90vw]">
        <p className="text-white md:text-lg text-xs font-light text-center">We open the doors for you to explore the world in comfort and style, being your trusted car rental partner</p>
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
                  key={(id! * Math.round(Math.random() * 10))}
                  name={name}
                  price={price}
                  location={location}
                  image={image}
                  manual={manual}
                  seaters={seaters}
                  tankCapacity={tankCapacity}
                  background={background}
                  id={id} brand={""} model={""} year={0} images={[]} fuelType={"Petrol"} engine={""} mileage={0} transmission={"Automatic"} driveTrain={"AWD"} description={""} features={[]} rating={0} reviewsCount={0} lat={0} lng={0} />
              )
            })
          }
        </div>
      </div>
      <div className="my-10 py-4 w-full flex md:flex-row flex-col bg-gray-200 space-y-6 ">
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <Image src={"/images/rentalBanner.webp"} alt="" unoptimized width={0} height={0} className="w-[90%] h-auto" />
        </div>
        <div className="md:w-[50%] w-full flex flex-col md:items-start items-center justify-center space-y-4 md:pr-[12rem]">
          <h1 className="font-bold md:text-4xl text-2xl">Download our app!</h1>
          <p className="md:text-sm text-xs md:text-start text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tempore tenetur quidem odit quos dicta, minus exercitationem autem magnam inventore assumenda temporibus! Architecto fugit quaerat magnam dolorum repellendus quas quia.</p>
          <button className="bg-black px-3 py-2 text-sm text-white rounded-full">Download Now</button>
        </div>
      </div>
      <div className="md:my-10 my-20 flex flex-col items-start justify-start w-[100vw] scrollbar-hidden">
        <h1 className="font-semibold md:text-3xl text-xl">The Best Platform For Car Rentals</h1>
        <div className="w-full mt-5 flex flex-wrap items-center justify-around no-scrollbar scrollbar-hidden">
          {
            popularCars.map(({ name, price, location, image, manual, seaters, tankCapacity, background, id }) => {
              return (
                <CarCard
                  key={(id! * Math.round(Math.random() * 10))}
                  name={name}
                  price={price}
                  location={location}
                  image={image}
                  manual={manual}
                  seaters={seaters}
                  tankCapacity={tankCapacity}
                  background={background}
                  id={id} brand={""} model={""} year={0} images={[]} fuelType={"Petrol"} engine={""} mileage={0} transmission={"Automatic"} driveTrain={"AWD"} description={""} features={[]} rating={0} reviewsCount={0} lat={0} lng={0}                />
              )
            })
          }
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <button className="md:py-4 py-2 px-8 text-xs bg-black md:rounded-full rounded-xl text-white cursor-pointer">See More</button>
        </div>
      </div>
      <div className="md:my-10 my-20 flex flex-col items-start justify-start w-[100vw] scrollbar-hidden">
        <h1 className="font-semibold md:text-3xl text-xl">Learn More About Us!</h1>
        <div className="w-full mt-5 flex md:flex-row flex-col items-center justify-around no-scrollbar scrollbar-hidden">
          {blogs.map(({ title, datePublished, image, excerpt }) => {
            return (<BlogCard
              title={title}
              datePublished={datePublished}
              image={image}
              excerpt={excerpt}
              key={title}
            />)
          })}

        </div>
      </div>
    </div >
  );
}
