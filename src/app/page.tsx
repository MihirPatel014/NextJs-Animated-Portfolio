import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero />
  <About />
  <Portfolio/>
  <Skills/>
  <Contact/>
  <Footer/>
  </>
  );
}
