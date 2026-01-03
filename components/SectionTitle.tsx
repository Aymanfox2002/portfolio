import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700"] });

const SectionTitle = ({title, des}: {title?: string, des?: string}) => {
  return (
    <div className="mb-16 text-center mx-auto max-w-[500px]">
      <h1
        className={`text-2xl lg:text-4xl font-bold mb-4 gradient-section-header ${ubuntu.className}`}
      >
        {title}
      </h1>
      <p className="text-[var(--gray)]">
        {des}
      </p>
    </div>
  );
};

export default SectionTitle;
