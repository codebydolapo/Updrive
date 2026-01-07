import Image from "next/image";
import PopularCar from "@/components/PopularCar";
import popularCars from "@/data/popularCars";
import CarCard from "@/components/CarCard";
import BlogCard from "@/components/BlogCard";
import blogs from "@/data/blogs";

// const LOGO_IMAGES = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <div className="w-full relative flex flex-col items-center overflow-x-hidden scrollbar-hidden">
      {/* Hero Background Shape */}
      <div className="md:w-[110vw] md:h-[110vw] w-[100vh] h-[100vh] bg-[#1da1f2] rounded-b-[100%] left-1/2 -translate-x-1/2 absolute -z-10 md:-top-[65vw] -top-[50vh]" />

      {/* Hero Content */}
      <header className="md:mt-16 mt-10 flex flex-col items-center px-4 max-w-4xl">
        <h1 className="text-white md:text-7xl text-4xl font-bold text-center tracking-tight leading-tight">
          The Best Platform For Car Rentals
        </h1>
        <p className="text-white/90 md:text-lg text-sm font-light text-center mt-6 max-w-xl">
          We open the doors for you to explore the world in comfort and style, being your trusted car rental partner.
        </p>
      </header>

      <Image 
        src="/images/SUV.png" 
        alt="Featured SUV" 
        width={1200} 
        height={600} 
        priority
        className="md:w-[60vw] w-[90vw] h-auto mt-8 object-contain" 
      />

      {/* Infinite Logo Slider */}
      {/* <div className="py-12 w-full overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center w-max animate-scroll-x gap-8">
          {[...LOGO_IMAGES, ...LOGO_IMAGES].map((num, idx) => (
            <div key={idx} className="w-32 h-20 flex items-center justify-center flex-shrink-0">
              <Image src={`/images/logos/${num}.png`} alt="Partner Logo" width={100} height={50} className="object-contain" />
            </div>
          ))}
        </div>
      </div> */}

      {/* Popular Cars Horizontal Scroll */}
      <section className="w-full max-w-7xl px-4 my-10 scrollbar-hidden">
        <h2 className="font-bold md:text-3xl text-2xl mb-6">Some of Our Popular Cars</h2>
        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x">
          {popularCars.map((car) => (
            <div key={`popular-${car.id}`} className="snap-start flex-shrink-0">
              <PopularCar {...car} transmission="Automatic" fuelType="Petrol" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Download App Banner */}
      <section className="my-16 w-full bg-slate-100 rounded-3xl overflow-hidden max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full p-8 flex justify-center">
          <Image 
            src="/images/rentalBanner.webp" 
            alt="App Preview" 
            width={500} 
            height={400} 
            className="rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
          />
        </div>
        <div className="md:w-1/2 w-full p-10 flex flex-col md:items-start items-center text-center md:text-left space-y-6">
          <h2 className="font-extrabold md:text-5xl text-3xl text-slate-900">Download our app!</h2>
          <p className="text-slate-600 leading-relaxed max-w-md">
            Get the full Updrive experience on your mobile device. Book in seconds, track your rental, and access 24/7 support.
          </p>
          <button className="bg-black hover:bg-slate-800 transition-colors px-10 py-4 text-white rounded-full font-semibold shadow-lg">
            Download Now
          </button>
        </div>
      </section>

      {/* Full Inventory Grid */}
      <section className="w-full max-w-7xl px-4 my-10">
        <h2 className="font-bold md:text-3xl text-2xl mb-8">Browse Our Full Fleet</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularCars.map((car) => (
            <CarCard key={`grid-${car.id}`} {...car} transmission="Automatic" fuelType="Petrol" />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-12">
          <button className="py-4 px-12 bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 font-bold rounded-full">
            See More Vehicles
          </button>
        </div>
      </section>

      {/* Blogs */}
      <section className="w-full max-w-7xl px-4 my-20">
        <h2 className="font-bold md:text-3xl text-2xl mb-8">Learn More About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </section>
    </div>
  );
}