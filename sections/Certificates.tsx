import { CertifiCard, SectionTitle } from "@/components/index";
import c1 from "@/public/images/certificates/1.webp";
import c2 from "@/public/images/certificates/2.webp";
import c3 from "@/public/images/certificates/3.webp";
import c4 from "@/public/images/certificates/4.webp";
import c5 from "@/public/images/certificates/5.webp";
import c6 from "@/public/images/certificates/6.webp";
import c7 from "@/public/images/certificates/7.webp";
const Certificates = () => {
  const certificates = [
    {
      id: "DZOIH7T8LO3D",
      image: c7,
      title: "Introduction to Databases for Back-End Development",
      platform: "Coursera",
      date: "March 13, 2026",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/DZOIH7T8LO3D",
      credlyLink: "",
    },
    {
      id: "U3S5A7RRQR59",
      image: c1,
      title: "Introduction to Software Engineering",
      platform: "Coursera",
      date: "September 16, 2025",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/U3S5A7RRQR59",
      credlyLink: "https://www.credly.com/badges/6c038843-bbd6-47ff-bbb5-24c3cf63401d/public_url",
    },
    {
      id: "WNCPOVMXBTEW",
      image: c2,
      title: "Linux Commands and Shell Scripting",
      platform: "Coursera",
      date: "October 8, 2025",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/WNCPOVMXBTEW",
      credlyLink: "https://www.credly.com/badges/e0e8cdb7-9157-44f9-9d49-40883cda72a5/public_url",
    },
    {
      id: "LHBD6T1RE56Q",
      image: c3,
      title: "Back-End Apps with Node.js and Express",
      platform: "Coursera",
      date: "December 17, 2025",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/LHBD6T1RE56Q",
      credlyLink: "https://www.credly.com/badges/5ca4ea5b-f822-4a75-a119-8898ab87f136/public_url",
    },
    {
      id: "NDTCL040OXHW",
      image: c4,
      title: "Getting Started with Git and GitHub",
      platform: "Coursera",
      date: "September 21, 2025",
      certificateLink: "https://www.coursera.org/account/accomplishments/verify/NDTCL040OXHW",
      credlyLink: "https://www.credly.com/badges/5aa8e0ea-61aa-42e9-830a-016b922d059a/public_url",
    },
    {
      id: "CSC-20210407-3446",
      image: c5,
      title: "Certificaten of Master HTML",
      platform: "codershiyar Academy",
      date: "07 April, 2021",
      certificateLink: "https://academy.codershiyar.com/certification.php?certificate_number=CSC-20210407-3446",
      credlyLink: "",
    },
    {
      id: "CSC-20220106-4444",
      image: c6,
      title: "Certificaten of Master CSS",
      platform: "codershiyar Academy",
      date: "06 January, 2022",
      certificateLink: "https://academy.codershiyar.com/certification.php?certificate_number=CSC-20220106-4444",
      credlyLink: "",
    },
  ];
  return (
    <section className="paper" id="certificates">
      <SectionTitle
        title="Certificates"
        des="Verified learning achievements"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((certifi, i) => (
          <CertifiCard
            key={i}
            image={certifi.image}
            title={certifi.title}
            platform={certifi.platform}
            date={certifi.date}
            id={certifi.id}
            certificateLink={certifi.certificateLink}
            credlyLink={certifi.credlyLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
