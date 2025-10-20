import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutContent from '@/components/About/AboutContent';
import MySkills from '@/components/About/MySkills';

export default function About() {
  return (
    <>
      <Navbar/>
        <AboutContent/>
        <MySkills/>
      <Footer/>
    </>
  )
}
