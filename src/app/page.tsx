import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Home/Skills";



export default function Home() {
  return (
    <>
    <Navbar/>     
      <Hero/>
      <AboutMe/>
      <Projects/> 
      <Tools/>     
    <Footer />
    </>
  );
}
