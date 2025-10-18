import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <>
    <Navbar/>     
      <Hero/>
      <AboutMe/>
      <Projects/>      
    <Footer />
    </>
  );
}
