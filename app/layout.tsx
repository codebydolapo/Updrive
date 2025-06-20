import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Script from "next/script";


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
    <html lang="en">
      <head dangerouslySetInnerHTML={{
        __html:`
          ! function (e, t, p, r, n, a, s) {
            e[r] || ((n = e[r] = function () {
              n.process ? n.process.apply(n, arguments) : n.queue.push(arguments)
            }).queue = [], n.t = +new Date, (a = t.createElement(p)).async = 1, a.src = "https://cdn.tracking.prepr.io/js/prepr_v2.min.js?t=" + 864e5 * Math.ceil(new Date / 864e5), (s = t.getElementsByTagName(p)[0]).parentNode.insertBefore(a, s))
          }(window, document, "script", "prepr"), prepr("init", "ac_35e15b4d81fa2cff4477a58e19c33ef9320d5da12fda307d63caf030da623ed5"), prepr("event", "pageload");
    `}}/>
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
