import { IoCheckmarkDone } from "react-icons/io5";

type SkillsCardProps = {
  icon: React.ReactNode;
  iconColor?: string;
  title: string;
  checkIcon?: React.ReactNode;
  skills: string[];
};

const SkillCard = ({ icon, iconColor, title, checkIcon, skills }: SkillsCardProps) => {
  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 border">
      {/* Icon */}
      <div className={`mb-4 flex justify-center ${iconColor} text-6xl text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-10 text-center text-2xl font-bold text-[var(--dark-gray)]">
        {title}
      </h3>

      {/* Skills */}
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-3 border-b pb-2 text-gray-600 last:border-b-0"
          >
            {checkIcon}
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
