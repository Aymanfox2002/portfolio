"use client";
import Link from "next/link";
import { MenuNav } from "./index";
import { Ubuntu } from "next/font/google";
import { Button } from "@/src/components/ui/button";
import { FileUser } from "lucide-react";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-ubuntu",
});

export default function Header() {
  return (
    <header className={` ${ubuntu.className}`}>
      <div className="bg-[var(--paper)] rounded-[20px] py-3 px-10 mb-10 min-h-19.5 mx-5 shadow-xl flex items-center justify-center">
        {/* Mobile menu link */}
        <MenuNav />
        <nav className="hidden md:block md:text-xl lg:text-2xl text-[var(--gray)]">
          <ul className=" flex items-center justify-center md:gap-10 lg:gap-20 ">
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#certificates">Certificates</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-[var(--main-color)] text-white"
            >
              <a
                href="/docs/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume <FileUser size={24} />
              </a>
            </Button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
