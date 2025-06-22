import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <div className={`flex items-center justify-between bg-[#1da1f2] md:px-5 xs:px-3 py-3`}>

            <div className='flex items-center justify-between w-full md:px-0 px-2'>
                {/* <div className='flex space-x-2 items-center justify-center'>
                    <Link href="/">
                        <Image alt="" src="/icons/prelo_logo.jpg" width={0} height={0} className='rounded-full size-8' />
                    </Link>
                    <div className=''>
                        <h1 className='text-xs capitalize text-white font-semibold'>Hello,</h1>
                        <h1 className='md:text-xl capitalize text-[#1DA1F2] font-extrabold tracking-wider'>User</h1>
                    </div>
                </div> */}


                <div className='flex items-center w-full justify-between md:px-4 px-2 '>
                    <Link href="/" className='flex space-x-2 items-center justify-between'>
                        <Image alt="" src="/icons/logo.png" width={0} height={0} className='rounded-full md:size-8 size-6' unoptimized/>
                        <h1 className='font-bold text-3xl text-black'>Updrive</h1>
                    </Link>
                    <div className='items-center justfy-around md:flex hidden md:w-auto w-0 '>
                        <Link href="/">
                            <p className={`px-2 py-2 mx-4 cursor-pointer text-black hover:border-b-[#000] hover:border-b-3 `} >Home</p>
                        </Link>
                        <Link href="/home">
                            <p className={`px-2 py-2 mx-4 cursor-pointer text-black hover:border-b-[#000] hover:border-b-3 `} >About Us</p>
                        </Link>
                        <Link href="">
                            <p className={`px-2 py-2 mx-4 cursor-pointer text-black hover:border-b-[#000] hover:border-b-3 `} >Service</p>
                        </Link>
                        <Link href="/pricing">
                            <p className={`px-2 py-2 mx-4 cursor-pointer text-black hover:border-b-[#000] hover:border-b-3 `} >Pricing</p>
                        </Link>
                    </div>
                    <Link href={"/home"} className="cursor-pointer md:w-[10rem] w-[7rem] md:h-[3rem] h-[2rem] bg-black text-white rounded-full font-bold flex items-center justify-center md:text-[1rem] text-xs">
                        <p>Sign up</p>
                        {/* <ArrowRightIcon className="md:size-6 size-4 text-white mx-2" /> */}
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header