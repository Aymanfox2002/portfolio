import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "../../components/index";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ayman Mirghani | software developer",
  description: "personal portfolio for a MERN developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased repeated_bg w-full h-full bg-white/80`}
      >
        <div className="layout">
          <div className="container mx-auto mt-8 mb-8">
            <Header />
            {children}
            <Toaster position="top-center" richColors expand closeButton />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
