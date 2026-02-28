
import About from "@/components/About";
import Header from "@/components/Header";
import ContactSection from "@/components/Contact";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import NowAndChangelog from "@/components/NowAndChangelog";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

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
