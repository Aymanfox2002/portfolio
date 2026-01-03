import Image, { StaticImageData } from "next/image";
import { SiCoursera } from "react-icons/si";

import { Ubuntu } from "next/font/google";
import { Barcode } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-ubuntu",
});

type CertifiCardProps = {
  image: string | StaticImageData;
  title: string;
  platform?: string;
  date: string;
  id: string;
  certificateLink: string;
  credlyLink?: string;
};

const CertifiCard = ({
  image,
  title,
  platform,
  date,
  id,
  certificateLink,
  credlyLink,
}: CertifiCardProps) => {
  return (
    <div className="border rounded-[10px] bg-white overflow-clip">
      <div className="p-4 pb-0 custom_inset_shadow max-h-[200px] overflow-clip">
        <Image src={image} alt={title} width={400} height={200} className="w-full" />
      </div>
      <div className="p-4 pt-2">
        <h3 className={`text-xl mb-3 ${ubuntu.className}`}>{title}</h3>
        <div className="mb-2">
          <p className="flex items-center gap-2">
            {platform === "Coursera" && (
              <SiCoursera className="text-blue-500" />
            )}
            <span className="font-semibold text-[var(--dark-gray)]">
              {platform}
            </span>
            | <span className="text-[var(--gray)]">{date}</span>
          </p>
        </div>
        <div className="mb-5">
          <p className="flex items-center gap-2 text-[var(--gray)]">
            <Barcode size={16} />
            <span>Credential ID: {id}</span>
          </p>
        </div>
        <div className="flex justify-around gap-1">
          <Button
            asChild
            className="flex-1 bg-[var(--main-color)] font-black text-white cursor-pointer"
            variant="outline"
            size="lg"
          >
            <a href={certificateLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </Button>
          {credlyLink && (
            <Button
              asChild
              className="flex-1 bg-[#FF9448] font-black text-white cursor-pointer"
              variant="outline"
              size="lg"
            >
              <a href={credlyLink} target="_blank" rel="noopener noreferrer">View on Credly</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertifiCard;
