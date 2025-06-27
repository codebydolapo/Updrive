import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { SignInButton, UserButton } from '@clerk/nextjs'

function Header() {
    return (
        <div className={`flex items-center justify-between bg-[#1da1f2] md:px-5 xs:px-3 py-3`}>

            <div className='flex items-center justify-between w-full md:px-0 px-2'>


                <div className='flex items-center w-full justify-between md:px-4 px-2 '>
                    <Link href="/" className='flex space-x-2 items-center justify-between'>
                        <Image alt="" src="/icons/logo.png" width={0} height={0} className='rounded-full md:size-8 size-7' unoptimized />
                        <h1 className='font-bold text-3xl text-white'>Updrive</h1>
                    </Link>
                    {/* <Link href={"/home"} className="cursor-pointer md:w-[10rem] w-[7rem] md:h-[3rem] h-[2rem] bg-black text-white rounded-full font-bold flex items-center justify-center md:text-[1rem] text-xs">
                        <p>Sign up</p>
                    </Link> */}
                    <SignedOut>
                        <div className='cursor-pointer md:w-[10rem] w-[7rem] md:h-[3rem] h-[2rem] bg-black text-white rounded-full font-bold flex items-center justify-center md:text-[1rem] text-xs'>
                            <SignInButton />
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

            </div>
        </div>
    )
}

export default Header