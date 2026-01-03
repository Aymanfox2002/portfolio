import { Certificates, Contact, Hero, Projects, Skills } from "../../sections/index";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </main>
  );
}
