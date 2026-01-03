export type CardTypes = {
  src: string | StaticImageData;
  title: string;
  des: string;
  tech?: any[];
  links?: { name: LinkButtonKey; url: string }[];
};
export type TechItem = {
  name: string;
  icon: React.ReactNode;
};

export type LinkButtonConfig = {
  name: string;
  icon: ReactNode;
  color: string;
};

export type LinkButtonKey = "github" | "figma" | "live";
