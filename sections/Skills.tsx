import { SectionTitle, SkillCard } from "@/components/index";
import { RiLayout3Fill } from "react-icons/ri";
import { FaBrush, FaServer } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

const Skills = () => {
  const skillsData = [
    {
      icon: <RiLayout3Fill className="text-[#FFCC00]" />,
      iconColor: "gradient-yellow",
      title: "Frontend Development",
      checkIcon: <IoCheckmarkDone className="text-[#FFCC00]" />,
      skills: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "SEO Optimization",
        "Responsive Design",
        "Git & GitHub",
        "Accessibility Best Practices",
      ],
    },
    {
      icon: <FaServer className="text-[#27C840]" />,
      iconColor: "gradient-green",
      title: "Backend Development",
      checkIcon: <IoCheckmarkDone className="text-[#27C840]" />,
      skills: [
        "Node.js",
        "Express",
        "mySQL",
        "SQL",
        "REST APIs",
        "Middleware",
        "Server side Rendering",
        "Postman"
      ],
    },
    {
      icon: <FaBrush className="text-[#CB30E0]" />,
      iconColor: "gradient-pink",
      title: "UI/UX Design",
      checkIcon: <IoCheckmarkDone className="text-[#CB30E0]" />,
      skills: [
        "Figma",
        "pixel-perfect Design",
        "responsive Design",
        "User Flows",
        "Prototyping",
        "collaboration with Developers",
        "style Guides",
      ],
    },
  ];

  return (
    <section className="paper" id="skills">
      <SectionTitle
        title="Skills"
        des="Creative coding expertise"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsData.map((skillCard, index) => (
          <div key={index} className="flex justify-center">
            <SkillCard
              icon={skillCard.icon}
              iconColor={skillCard.iconColor}
              title={skillCard.title}
              checkIcon={skillCard.checkIcon}
              skills={skillCard.skills}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
