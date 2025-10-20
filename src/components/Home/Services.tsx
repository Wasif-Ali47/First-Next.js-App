// "use client";
// import { motion,} from "framer-motion";
// import { container, child, imageChild } from "@/components/animations/FadeUp"

// import Image from 'next/image'

// export default function AboutMe() {

// //  image div
//     const MotionImage = motion(Image);

//     return (
//         <>
//             <div className="flex flex-col md:flex-row w-full gap-16 items-center justify-center min-h-screen px-6 md:px-12 border-t border-gray-800" id="AboutMe">
//                 {/* image */}
//                 <motion.div 
//                 variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}
//                 className="flex justify-center">
//                     <MotionImage variants={imageChild} src="/about-vector.svg" alt="Team illustration" width={500} height={500} className="w-[80%] sm:w-[400px] md:w-[500px] h-auto"/>
//                 </motion.div>
//                 {/*text content */}
//                 <motion.div
//                 variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}
//                 className="flex flex-col gap-2 max-w-[600px] text-center md:text-left items-center md:items-start text-white">
//                     <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">About ME</motion.h2>
//                     <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis aut fugit placeat, exercitationem alias non. </motion.p>
//                     <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300"> Odio facere molestiae natus hic fugiat dicta nobis quas corporis, asperiores voluptatum cum. Incidunt illo minus fugit maiores. Distinctio, deserunt assumenda.</motion.p>
//                     <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300">Vero corporis aut fugit placeat, exercitationem alias non. Quisquam nihil sunt ullam explicabo libero, adipisci quasi fugit nesciunt! </motion.p>
//                     <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-300">Sit amet consectetur adipisicing elit hic fugiat dicta nobis quas corporis aut fugit placeat, exercitationem alias non.</motion.p>
//                     <motion.a  variants={child} href="/about" className="bg-[#6200a3] text-[#dddddd] py-2 px-7 mt-5 hover:bg-[#4a007d] transition-colors duration-300"> Learn More</motion.a>
//                 </motion.div>
//             </div>
//         </>
//     )
// }











"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { child, childProjects, container,} from "../animations/FadeUp";

gsap.registerPlugin(ScrollTrigger);

interface ArchItem {
  id: string;
  title: string;
  desc: string;
  color: string;
}

interface ImgItem {
  src: string;
  alt: string;
  index: number;
}

const AboutMe = () => {
  useEffect(() => {
    // Set z-index for images
    document.querySelectorAll<HTMLElement>(".arch__right .img-wrapper").forEach((el) => {
      const order = el.dataset.index;
      if (order) el.style.zIndex = order;
    });

    // Mobile layout handler
    const handleMobileLayout = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const leftItems = gsap.utils.toArray<HTMLElement>(".arch__left .arch__info");
      const rightItems = gsap.utils.toArray<HTMLElement>(".arch__right .img-wrapper");

      if (isMobile) {
        leftItems.forEach((item, i) => (item.style.order = `${i * 2}`));
        rightItems.forEach((item, i) => (item.style.order = `${i * 2 + 1}`));
      } else {
        leftItems.forEach((item) => (item.style.order = ""));
        rightItems.forEach((item) => (item.style.order = ""));
      }
    };

    let resizeTimeout: NodeJS.Timeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleMobileLayout, 100);
    });

    handleMobileLayout();

    // GSAP Animations
    const imgs = gsap.utils.toArray<HTMLImageElement>(".img-wrapper img");

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".arch",
            start: "top top",
            end: "bottom bottom",
            pin: ".arch__right",
            scrub: true
          }
        });

        gsap.set(imgs, { clipPath: "inset(0)", objectPosition: "0px 0%" });

        imgs.forEach((_, index) => {
          const currentImage = imgs[index];
          const nextImage = imgs[index + 1] || null;

          const sectionTimeline = gsap.timeline();
          if (nextImage) {
            sectionTimeline
              .to(
                currentImage,
                { clipPath: "inset(0px 0px 100%)", objectPosition: "0px 60%", duration: 1.5, ease: "none" },
                0
              )
              .to(nextImage, { objectPosition: "0px 40%", duration: 1.5, ease: "none" }, 0);
          }

          mainTimeline.add(sectionTimeline);
        });
      },

      "(max-width: 768px)": () => {
        const mbTimeline = gsap.timeline();
        gsap.set(imgs, { objectPosition: "0px 60%" });

        imgs.forEach((image) => {
          const innerTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: image,
              start: "top-=70% top+=50%",
              end: "bottom+=200% bottom",
              scrub: true
            }
          });

          innerTimeline.to(image, { objectPosition: "0px 30%", duration: 5, ease: "none" });

          mbTimeline.add(innerTimeline);
        });
      }
    });
  }, []);

  const arches: ArchItem[] = [
    {
      id: "green-arch",
      title: "Modern Web Design",
      desc: "Pixel-perfect, responsive, and visually stunning web interfaces that blend creativity with usability — every layout crafted to make users stay.",
      color: "#D5FF37"
    },
    {
      id: "blue-arch",
      title: "Interactive UI/UX",
      desc: "Smooth, intuitive, and engaging user experiences powered by motion design, micro-interactions, and modern frameworks like React and Next.js.",
      color: "#7DD6FF"
    },
    {
      id: "pink-arch",
      title: "Performance Optimization",
      desc: "I make sites load faster than your patience — optimized assets, clean code, and SEO-friendly architecture for lightning-fast performance.",
      color: "#FFA0B0"
    },
    {
      id: "orange-arch",
      title: "Maintenance & Scalability",
      desc: "Clean, modular, and scalable codebases ready to grow with your business — from bug fixes to new features, I keep your site running smooth.",
      color: "#FFA17B"
    }
  ];


  const images: ImgItem[] = [
    {
      src: "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp",
      alt: "Modern Web Design",
      index: 4
    },
    {
      src: "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
      alt: "Interactive UI/UX",
      index: 3
    },
    {
      src: "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
      alt: "Performance Optimization",
      index: 2
    },
    {
      src: "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
      alt: "Maintenance & Scalability",
      index: 1
    }
  ];

  return (
    <>

      {/* headings */}
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="mx-auto max-w-2xl text-center pt-20">
        <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">What I Provide</motion.h2>
        <motion.p variants={child} className="mt-2 text-lg/8 text-gray-400">I build clean, fast, and interactive web experiences — from design to deployment.</motion.p>
      </motion.div>

      <div className="container max-w-[1440px] md:px-8 " >


        <div className="arch hidden lg:flex gap-14 justify-between max-w-[1100px] mx-auto">
          <div className="arch__left flex flex-col min-w-[300px]">
            {arches.map((arch) => (
              <div key={arch.id} id={arch.id} className="arch__info grid place-items-center max-w-[356px] h-screen">
                <div className="content">
                  <h2 className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl pb-8">{arch.title}</h2>
                  <p className="desc mt-2 text-lg/8 text-gray-300 mb-7">{arch.desc}</p>
                  <a
                    href="#"
                    className="link flex items-center gap-1 px-4 py-3 rounded-[40px]"
                    style={{ backgroundColor: arch.color }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none">
                      <path
                        fill="#121212"
                        d="M5 2c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11 3.5c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6 9a2 2 0 1 1-4 0c0-1.105.895-3 2-3s2 1.895 2 3Z"
                      />
                    </svg>
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="arch__right relative flex flex-col flex-shrink-0 h-screen w-full max-w-[540px]">
            {images.map((img) => (
              <div
                key={img.index}
                className="img-wrapper absolute top-1/2 left-0 transform -translate-y-1/2 h-[400px] w-full rounded-[16px] overflow-hidden"
                data-index={img.index}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" />
              </div>
            ))}
          </div>
        </div>
        {/* Mobile */}
        <div className="flex flex-col w-full justify-center items-center lg:hidden gap-20 mx-auto px-4 py-16">
          {arches.map((arch, i) => (
              <motion.div variants={childProjects} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
                key={arch.id} className="group bg-black relative h-[300px] sm:h-[400px] w-full max-w-full overflow-hidden">
                <img src={images[i].src} alt={images[i].alt} className="absolute w-full h-full opacity-50 group-hover:opacity-80 object-cover object-center transition duration-300" />
                <div className="flex flex-col justify-center items-center absolute w-full px-5 text-center  h-full">
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white pb-6 pointer-events-none">{arch.title}</h2>
                  <p className="mt-2 text-base sm:text-lg text-gray-300 mb-6 pointer-events-none">{arch.desc}</p>
                  <a href="#" className='lg:bg-[#42016d] bg-[#9a5fc23f] text-white hover:bg-transparent font-light border border-white/70 py-2 px-3 text-center transition duration-200'>
                    <span>See Example</span>
                  </a>
                </div>
              </motion.div>
          ))}
        </div>

      </div>
    </>
  );
};

export default AboutMe;

