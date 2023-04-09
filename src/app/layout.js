"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import {Analytics} from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`overflow-x-hidden bg-primary-black min-h-screen ${poppins.className}`}
      >
        <SessionProvider>
          <Navbar />
          {children}
          <GoogleAnalytics NEXT_GOOGLE_ANALYTICS_ID ='G-KG90W7EFHR'/>
          <Analytics />
          
        </SessionProvider>
        <CookieBanner />
      </body>
    </html>
  );
}


