import { Star } from "lucide-react";

type LinksType = {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  linkText: string;
  Link: string;
};

const LinksCard = ({ icon, iconBg, title, linkText, Link}: LinksType) => {
  return (
    <div className="flex items-center bg-white p-3 rounded-2xl border gap-2 max-h-[90px] max-w-[490px] w-full mb-4 overflow-clip">
        <div className={`${iconBg} flex justify-center items-center min-w-[44px] h-[44px] rounded-full`}>
            {icon}  
        </div>
        <div>
            <p className="text-base text-[var(--gray)]">{title}</p>
            <a href={Link} target="_blank" rel="noopener noreferrer">{linkText}</a>
        </div>
    </div>
  )
}

export default LinksCard