import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div className=" h-[100vh]">
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}
