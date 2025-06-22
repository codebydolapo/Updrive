import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen relative flex flex-col items-center no-scrollbar">
      <div className="w-[110vw] h-[110vw] bg-[#1da1f2] rounded-b-full left-1/2 -translate-x-1/2 absolute -z-10 -top-[60vw]"></div>
      <div className="mt-10 flex flex-col max-w-[55rem]">
        <h1 className="text-white text-[5rem] font-semibold text-center tracking-tight">The Best Platform For Car Rentals</h1>
      </div>
      <div className=" flex flex-col max-w-[45rem]">
        <p className="text-white text-sm font-light text-center">We open the doors for you to explore the world in comfort and style, being your trusted car rental partner</p>
      </div>
      <Image src={"/images/SUV.png"} alt = "" unoptimized width={0} height={0} className="w-[70vw] h-auto"/>
    </div>
  );
}
