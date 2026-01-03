import { ContactForm, LinksCard, SectionTitle } from "@/components/index";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const LinksData = [
    {
      icon: <Github className="text-white" />,
      iconBg: "bg-[var(--dark-gray)]",
      title: "GitHub",
      linkText: "github.com/Aymanfox2002",
      Link: "https://github.com/Aymanfox2002",
    },
    {
      icon: <Mail className="text-[#0088FF]" />,
      iconBg: "bg-[#0088FF]/30",
      title: "Gmail",
      linkText: "ayman2002.dev@gmail.com",
      Link: "mailto:ayman2002.dev@gmail.com",
    },
    {
      icon: <Linkedin className="text-white" />,
      iconBg: "bg-[#0088FF]",
      title: "LinkedIn",
      linkText: "linkedin.com/ayman-mirghani",
      Link: "https://www.linkedin.com/in/ayman-mirghani-448882229/",
    },
    {
      icon: <BsWhatsapp className="text-green-500" />,
      iconBg: "bg-green-100",
      title: "Whatsapp",
      linkText: "+249 125 44 2017",
      Link: "tel:+249125442017",
    },
    {
      icon: <Phone className="text-cyan-600" />,
      iconBg: "bg-cyan-200",
      title: "Call",
      linkText: "0150 7800 445",
      Link: "tel:+20 1507800445",
    },
  ];
  return (
    <section className="paper" id="contact">
      <SectionTitle
        title="Get In Touch"
        des="Connect and collaborate"
      />
      <div className="flex lg:px-20 gap-5 flex-wrap justify-center">
        <div className="flex-3">
          <ContactForm />
        </div>
        <div className="flex-2 ">
          {LinksData.map((link, index) => (
            <LinksCard
              key={index}
              icon={link.icon}
              iconBg={link.iconBg}
              title={link.title}
              linkText={link.linkText}
              Link={link.Link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
