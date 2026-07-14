import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <About />
      <Stats />
      <Services />
      <Calculator />
      <Insights />
      <Footer />
    </main>
  );
}
