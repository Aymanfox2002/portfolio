import { Github, Linkedin, Send, Target } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { Button } from "@/src/components/ui/button";
import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-ubuntu",
});
export default function Hero() {
  return (
    <section className="paper lg:px-50">
      <div className="flex flex-col items-center text-center">
        <h1
          className={`mb-3 pb-3 text-4xl md:text-5xl lg:text-8xl ${ubuntu.className} gradient-heading`}
        >
          Ayman Mirghani
        </h1>
        <h2
          className={`text-[var(--gray)] text-2xl md:text-3xl lg:text-4xl mb-10  ${ubuntu.className} `}
        >
          Front-end Web Developer
        </h2>
        <p className="text-xl lg:text-3xl text-[var(--gray)] mb-14">
          Hi 🖐, I’m a software engineer specializing in front-end web development.
          I enjoy turning UI designs into smooth, user-friendly experiences and
          can help take a project from concept and design all the way to a
          polished, deployed product. I’m always happy to collaborate and bring
          ideas to life.
        </p>
        <div className="mb-10">
          <p className="text-2xl font-light mb-5 text-[var(--gray)]">
            Tech stack
          </p>
          <ul className="flex gap-6 justify-center flex-wrap">
            <li className="flex flex-col items-center">
              <FaReact className="text-[var(--main-color)]" size={57} />
              <span className="text-[var(--gray)]">React</span>
            </li>
            <li className="flex flex-col items-center">
              <FaNodeJs className="text-[var(--main-color)]" size={57} />
              <span className="text-[var(--gray)]">Node</span>
            </li>
            <li className="flex flex-col items-center">
              <SiNextdotjs className="text-[var(--main-color)]" size={57} />
              <span className="text-[var(--gray)]">Next</span>
            </li>
            <li className="flex flex-col items-center">
              <SiExpress className="text-[var(--main-color)]" size={57} />
              <span className="text-[var(--gray)]">Express</span>
            </li>
          </ul>
        </div>
        {/* links */}
        <div className="flex gap-3">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-[var(--main-color)] text-white"
          >
            <Link href={"#contact"}>
              Get in touch <Send size={24} />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <a href={"https://github.com/Aymanfox2002"} target="_blank" rel="noopener noreferrer">
              <Github size={"icon"} />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <a href={"https://www.linkedin.com/in/ayman-mirghani-448882229/"} target="_blank" rel="noopener noreferrer">
              <Linkedin size={"icon"} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
