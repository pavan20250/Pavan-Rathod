
import About from "@/components/About";
import Header from "@/components/Header";
import ContactSection from "@/components/Contact";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Services />
      <ContactSection />
    </div>
  );
}
