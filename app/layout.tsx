import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spangler Heating & Cooling | HVAC Services Lake City, MI",
  description: "Spangler Heating & Cooling provides expert HVAC services in Lake City, Michigan. Emergency furnace repair, AC installation, and more. 5-Star Rated & Locally Owned.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { businessSchema } from "@/lib/schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-grow pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
