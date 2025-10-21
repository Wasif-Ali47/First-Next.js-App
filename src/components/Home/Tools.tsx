// "use client";
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { motion } from "framer-motion";
// import { child, container } from "../animations/FadeUp";


// const Tools = () => {
//   useEffect(() => {
//     const links = document.querySelectorAll(".link");

//     links.forEach((link) => {
//       const moveLink = link.querySelector(".moveLink");
//       const moveX = link.querySelectorAll(".moveX");

//       gsap.to(moveX, {
//         xPercent: -50,
//         repeat: -1,
//         duration: 5,
//         ease: "none",
//       });

//       link.addEventListener("mouseenter", () => {
//         gsap.to(moveLink, {
//           y: 0,
//           duration: 0.4,
//           ease: "power3.out",
//         });
//       });

//       link.addEventListener("mouseleave", () => {
//         gsap.to(moveLink, {
//           y: "-100%",
//           duration: 0.4,
//           ease: "power3.inOut",
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="text-white min-h-screen flex justify-center items-center flex-col w-full">
//         <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}  className="mx-auto max-w-2xl text-center pb-20">
//             <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">My Choice of Tools</motion.h2>
//             <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-400">My choice of tools to create inspiring digital experiences.</motion.p>
//           </motion.div>
//       {["HTML/CSS", "React.Js", "Next.js", "gsap/Motion"].map((text, i) => (
//         <div
//           key={i}
//           className="link relative border-t border-b border-white/50 overflow-hidden cursor-pointer w-full"
//         >
//           <h1 className="text-4xl lg:text-[5vw] text-center lg:leading-[0.8] pt-4 uppercase">
//             {text}
//           </h1>

//           <div className="moveLink absolute top-0 left-0 w-full h-full bg-[#780091] text-black flex translate-y-[-100%]">
//             <div className="moveX flex items-center">
//               <h2 className="whitespace-nowrap  lg:text-[5vw] text-4xl text-center lg:leading-[0.8] uppercase">
//                 See a project
//               </h2>
//               <img
//                 className="lg:h-16 h-8 rounded-full shrink-0 lg:w-64 w-24 object-cover"
//                 src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
//                 alt=""
//               />
//               <h2 className="whitespace-nowrap  lg:text-[5vw] text-4xl text-center lg:leading-[0.8] uppercase">
//                 See a project
//               </h2>
//               <img
//                 className="lg:h-16 h-8 rounded-full shrink-0 lg:w-64 w-24 object-cover"
//                 src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
//                 alt=""
//               />
//               <h2 className="whitespace-nowrap  lg:text-[5vw] text-4xl text-center lg:leading-[0.8] uppercase">
//                 See a project
//               </h2>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tools;

'use client';

import React, { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { child, container } from "../animations/FadeUp"; 

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface ToolsProps {
  items?: MenuItemProps[];
}

const Tools: React.FC<ToolsProps> = ({ items = [] }) => {
  return (
<div className="min-h-screen flex justify-center items-center flex-col w-full">
<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}  className="mx-auto max-w-2xl text-center pb-20">
          <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">My Choice of Tools</motion.h2>
          <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-400">My choice of tools to create inspiring digital experiences.</motion.p>
        </motion.div>
    <div className="w-full h-full lg:h-[60vh] ">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
</div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
    tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }).to(marqueeInnerRef.current, {
      y: edge === 'top' ? '101%' : '-101%'
    });
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">{text}</span>
        <div
          className="w-[100px] md:w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    
    <div className="flex-1 relative overflow-hidden  text-center shadow-[0_-1px_0_0_#fff]" ref={itemRef}>
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060010] focus:text-white focus-visible:text-[#060010]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee ">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;




