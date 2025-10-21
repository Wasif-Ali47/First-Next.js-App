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

        // Cleanup function
        return () => {
          mainTimeline.kill();
          ScrollTrigger.getAll().forEach((st) => st.kill());
          gsap.globalTimeline.clear();
        };
      }
    });
  }, []);
 const arches: ArchItem[] = [
  {
    id: "green-arch",
    title: "Sleek Web Design",
    desc: "I build sites that *look* as good as they *feel* — modern, clean, and hella responsive. Every pixel’s on purpose.",
    color: "#D5FF37"
  },
  {
    id: "blue-arch",
    title: "Next-Level Interactivity",
    desc: "Think smooth animations, snappy transitions, and scroll effects that actually slap — built with React, Next.js, and a lil GSAP magic.",
    color: "#7DD6FF"
  },
  {
    id: "pink-arch",
    title: "Speed & Performance",
    desc: "Nobody likes slow sites. I squeeze out every millisecond — optimized assets, lazy loading, and clean code that flies.",
    color: "#FFA0B0"
  },
  {
    id: "orange-arch",
    title: "Scalable & Maintainable",
    desc: "Code that doesn’t crumble when you grow. I make modular, future-proof setups so your site can level up without breaking.",
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
              <div key={arch.id} id={arch.id} className="arch__info grid place-items-center max-w-[456px]  h-screen">
                <div className="content">
                  <h2 className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl pb-8">{arch.title}</h2>
                  <p className="desc mt-2 text-lg/8 text-gray-300 mb-7">{arch.desc}</p>
                  <a
                    href="#"
                    className='link bg-[#42016d] text-white hover:bg-transparent font-light border border-white/70 py-2 px-5 text-center transition duration-200'
                  >
                    Learn More
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

