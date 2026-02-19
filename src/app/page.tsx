
import About from "@/components/About";
import Header from "@/components/Header";
import ContactSection from "@/components/Contact";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import NowAndChangelog from "@/components/NowAndChangelog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <NowAndChangelog />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  );
}
