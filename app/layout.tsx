import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer"


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', "800", "900"]
})

export const metadata: Metadata = {
  title: "Updrive",
  description: "Work in progress",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-[100vw] no-scrollbar scrollbar-hidden overflow-x-hidden ">
      <body
        className={`${poppins.className} max-w-[100vw] `}
      >
        <Header />
        <div className="md:px-4 px-2">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
