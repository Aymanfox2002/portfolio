import React from "react";
import Image, { StaticImageData } from "next/image";
import { Ubuntu } from "next/font/google";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
// icons for tech list
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiI18Next } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiShadcnui } from "react-icons/si";
import { SiSwiper } from "react-icons/si";
import { SiMui } from "react-icons/si";

// icons for links
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { PiPlanetFill } from "react-icons/pi";
// types
import type {
  CardTypes,
  LinkButtonConfig,
  LinkButtonKey,
  TechItem
} from "@/types/projects";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });



const techList: Record<string, TechItem> = {
  react: {
    name: "React",
    icon: <FaReact />,
  },
  nextJS: {
    name: "NextJS",
    icon: <RiNextjsFill />,
  },
  tailwindCSS: {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  nodeJS: {
    name: "NodeJS",
    icon: <RiNodejsLine />,
  },
  express: {
    name: "Express",
    icon: <SiExpress />,
  },
  mongoDB: {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  framerMotion: {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion />,
  },
  i18n: {
    name: "i18n",
    icon: <SiI18Next />,
  },
  bootstrap: {
    name: "Bootstrap",
    icon: <BsBootstrapFill />,
  },
  shadcn: {
    name: "Shadcn UI",
    icon: <SiShadcnui />,
  },
  swiper: {
    name: "SwiperJS",
    icon: <SiSwiper />,
  },
  mui: {
    name: "Material UI",
    icon: <SiMui />,
  },
};

const linkBut: Record<LinkButtonKey, LinkButtonConfig> = {
  github: {
    name: "GitHub",
    icon: <FaGithub />,
    color: "bg-[#999999] text-[#535353]",
  },
  figma: {
    name: "Figma",
    icon: <IoLogoFigma />,
    color: "bg-[#C3AFFF] text-[#9C7BFF]",
  },
  live: {
    name: "Demo",
    icon: <PiPlanetFill />,
    color: "bg-[#74BEFF] text-[#007FFF]",
  },
};

const ProjectCard = ({ src, title, des, tech, links }: CardTypes) => {
  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <Image
        src={src}
        alt={title}
        className="w-full mb-3"
        width={600}
        height={400}
      />
      <div className="px-4 pb-6">
        <h3
          className={`mb-3 text-2xl md:text-4xl font-bold text-[var(--main-color)] ${ubuntu.className}`}
        >
          {title}
        </h3>
        <p className="text-base text-[var(--gray)] mb-4">{des}</p>
        <hr className="mb-4" />
        <h4
          className={`mb-3 text-xl md:text-2xl font-bold text-[var(--main-color)] ${ubuntu.className}`}
        >
          Technologies used
        </h4>
        <ul className="flex gap-5 mb-4 flex-wrap">
          {tech?.map((techItem: string, index: number) => {
            const techData = techList[techItem];
            if (!techData) return null;
            return (
              <li key={index} className="text-[var(--gray)] cursor-pointer">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-4xl">{techData.icon}</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{techData.name}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
        <hr className="mb-4" />
        <h4
          className={`mb-3 text-xl md:text-2xl font-bold text-[var(--main-color)] ${ubuntu.className}`}
        >
          Links
        </h4>
        <div className="flex gap-5">
          {links?.map((link, index: number) => {
            const linkName = link.name;
            const color = linkBut[linkName].color; // (*)
            return (
              <Button
                key={index}
                asChild
                variant="outline"
                size="default"
                className={`rounded-full ${color}`}
              >
                <Link href={link.url}>
                  {linkBut[linkName].icon} {link.name}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
