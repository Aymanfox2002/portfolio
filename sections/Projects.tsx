import { SectionTitle, ProjectCard } from "../components/index";

import Link from "next/link";
import p1 from "../public/images/projects/alsafwa.webp";
import p2 from "../public/images/projects/taqdimak.webp";
import p3 from "../public/images/projects/vortex.webp";
import p4 from "../public/images/projects/lnr.webp";
// types
import type { LinkButtonKey } from "@/types/projects";

const Projects = () => {
  const projectsData = [
    {
      src: p2,
      title: "Taqdimak",
      des: "It is a website that facilitates university applications for students, whether for fully or partially funded scholarships. The website supports both Arabic and English languages ​​smoothly and features an elegant and attractive design.",
      techList: [
        "nextJS",
        "react",
        "swiper",
        "tailwindCSS",
        "shadcn",
        "i18n",
        "framerMotion",
      ],
      links: [
        { name: "live" as LinkButtonKey, url: "https://taqdimak.vercel.app/" },
        {
          name: "github" as LinkButtonKey,
          url: "https://github.com/Aymanfox2002/taqdimak",
        },
        {
          name: "figma" as LinkButtonKey,
          url: "https://www.figma.com/design/ovhTs6HXK9vM0SlGBw9Fm5/Taqdimak?node-id=418-632&t=jm7pAAXFgqHVoFxI-1",
        },
      ],
    },
    {
      src: p3,
      title: "VortexGaming 🎮",
      des: "VortexGaming is a modern web-based gaming platform designed to showcase interactive experiences with a sleek and dynamic UI",
      techList: ["react", "mui", "swiper", "bootstrap"],
      links: [
        {
          name: "live" as LinkButtonKey,
          url: "https://vortex-gaming.vercel.app/",
        },
        {
          name: "github" as LinkButtonKey,
          url: "https://github.com/Aymanfox2002/VortexGaming/",
        },
      ],
    },
    {
      src: p1,
      title: "Al-Safwa",
      des: "Alsafwa Global is a web application designed to showcase and sell high-quality plastic products.",
      techList: ["react", "mui", "swiper", "bootstrap", "i18n"],
      links: [
        {
          name: "figma" as LinkButtonKey,
          url: "https://www.figma.com/design/141UEdHt3FHkIlmZjpnKsU/Alsafwa?node-id=261-470&t=s1DrezIHr1EiRuOx-1",
        },
      ],
    },
    {
      src: p4,
      title: "LNR",
      des: "The LNR site is a full-service moving company platform designed to make relocations simple and stress-free. Its content focuses on guiding visitors through every stage of the moving process.",
      techList: ["react", "swiper", "bootstrap"],
      links: [
        { name: "live" as LinkButtonKey, url: "https://lnr-one.vercel.app/" },
      ],
    },
  ];

  return (
    <section className="paper " id="projects">
      <SectionTitle title="Projects" des="Some of my recent works" />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-15">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            des={project.des}
            tech={project.techList}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
