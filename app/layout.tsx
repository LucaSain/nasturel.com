import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Suspense } from "react";
import Footer from "./components/NewFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/nasturel.png",
  },
  title: "Festivalul Nasturel",
  description:
    "Cel mai tare festival pentru copii din Romania! In curand la Sibiu !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <div className="text-base-content bg-base-100">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
