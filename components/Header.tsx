import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { SignInButton, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-[#1da1f2] py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1 rounded-full transition-transform group-hover:scale-110">
            <Image alt="Logo" src="/icons/logo.png" width={32} height={32} className="rounded-full" />
          </div>
          <h1 className="font-black text-2xl text-white tracking-tighter">UPDRIVE</h1>
        </Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <div className="bg-black hover:bg-slate-900 transition-colors text-white px-6 py-2 rounded-full font-bold text-sm">
              <SignInButton mode="modal" />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}