'use client'
import { Menu, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { FileUser } from "lucide-react";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Accordion type="single" collapsible className="w-full md:hidden">
      <AccordionItem value="item-1">
        <AccordionTrigger
          className="flex justify-center [&>svg]:hidden"
          onClick={() => handleClick()}
        >
          <span className="flex items-center text-[var(--main-color)]">
            {isOpen ? <X /> : <Menu />}
          </span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance p-5">
          {/* create 4 links */}
          <nav className="flex flex-col gap-4 text-center text-xl text-[var(--gray)] font-bold">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
              <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-[var(--main-color)] text-white cursor-pointer"
            >
              <a
                href="/docs/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume <FileUser size={24} />
              </a>
            </Button>
          </nav>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MenuNav;
