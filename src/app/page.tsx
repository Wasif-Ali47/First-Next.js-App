'use client';
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Tools from '@/components/Home/Tools'
import SmoothScroll from "@/components/animations/SmoothScroll";
import StaggeredMenu from "@/components/StaggeredMenu";



export default function Home() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];


  const demoItems = [
  { link: '#', text: 'html/css', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'tailwind', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'react.js', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'next.js', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'gsap/motion', image: 'https://picsum.photos/600/400?random=4' }
];
  return (
    <>
      <SmoothScroll>




       <div className={`fixed inset-0 z-[9999] pointer-events-none`}>
  <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#fff"
    isFixed={true}
    changeMenuColorOnOpen={true}
    colors={['#9102c7', '#320047']}
    logoUrl="/path-to-your-logo.svg"
    accentColor="#ff6b6b"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
  />
</div>

<Hero />
<AboutMe />
<Projects />




<div>
  <Tools items={demoItems} />
</div>
<Footer />

      </SmoothScroll>
    </>
  );
}
