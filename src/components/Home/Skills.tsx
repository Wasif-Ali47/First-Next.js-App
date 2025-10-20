"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { child, container } from "../animations/FadeUp";


const Tools = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".link");

    links.forEach((link) => {
      const moveLink = link.querySelector(".moveLink");
      const moveX = link.querySelectorAll(".moveX");

      gsap.to(moveX, {
        xPercent: -50,
        repeat: -1,
        duration: 5,
        ease: "none",
      });

      link.addEventListener("mouseenter", () => {
        gsap.to(moveLink, {
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(moveLink, {
          y: "-100%",
          duration: 0.4,
          ease: "power3.inOut",
        });
      });
    });
  }, []);

  return (
    <div className="text-white min-h-screen flex justify-center items-center flex-col w-full">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}  className="mx-auto max-w-2xl text-center pb-20">
            <motion.h2 variants={child} className="text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">My Choice of Tools</motion.h2>
            <motion.p  variants={child} className="mt-2 text-lg/8 text-gray-400">My choice of tools to create inspiring digital experiences.</motion.p>
          </motion.div>
      {["HTML/CSS", "React.Js", "Next.js", "gsap/Motion"].map((text, i) => (
        <div
          key={i}
          className="link relative border-t border-b border-white/50 overflow-hidden cursor-pointer w-full"
        >
          <h1 className="text-4xl lg:text-[5vw] text-center lg:leading-[0.8] pt-4 uppercase">
            {text}
          </h1>

          <div className="moveLink absolute top-0 left-0 w-full h-full bg-[#780091] text-black flex translate-y-[-100%]">
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap  lg:text-[5vw] text-4xl text-center lg:leading-[0.8] uppercase">
                See a project
              </h2>
              <img
                className="lg:h-16 h-8 rounded-full shrink-0 lg:w-64 w-24 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap  lg:text-[5vw] text-4xl text-center lg:leading-[0.8] uppercase">
                See a project
              </h2>
              <img
                className="lg:h-16 h-8 rounded-full shrink-0 lg:w-64 w-24 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap  lg:text-[5vw] text-4xl text-center lg:leading-[0.8] uppercase">
                See a project
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
