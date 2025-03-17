import React, { useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import HomeEnd from "./HomeEnd";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import abchomebg from "../assets/abchomebg.jpg";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonGroupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -1000, y: -1000, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      paragraphRef.current,
      { x: -1000, y: -1000, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      buttonGroupRef.current,
      { x: -1000, y: -1000, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
    );
  }, []);
  useGSAP(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(7% 50%, 72% 0%, 75% 75%, 0% 100%)",
      borderRadius: "0 0 50% 10%",
    });

    gsap.from("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <div className="bg-black h-auto w-full">
      <div className="flex items-center justify-center px-4 md:px-10">
        <div className="mt-[75px] flex flex-col text-center max-w-4xl">
          <h1
            ref={headingRef}
            className="text-[40px] md:text-[75px] text-white"
          >
            Captivate & Convert
          </h1>
          <p
            ref={paragraphRef}
            className="text-gray-300 text-lg md:text-xl mx-auto w-full md:w-[55%]"
          >
            A Webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue
          </p>
          <div
            ref={buttonGroupRef}
            className="flex items-center justify-center mt-10 gap-3 md:gap-5"
          >
            <Button className="bg-[#8f34eb] rounded-full px-6 py-2 text-white">
              Demo
            </Button>
            <Button className="flex items-center gap-2 px-6 py-2">
              <IoIosArrowForward />
              How it works
            </Button>
          </div>
        </div>
      </div>
      <div
        id="image-frame"
        className="relative flex flex-col items-center justify-center py-10 px-4 md:px-10"
      >
        <img
          src={abchomebg}
          alt="bg"
          className="w-full max-w-[850px] h-auto md:h-[450px] rounded-xl object-cover border border-white"
        />
        <p className="text-yellow-400 text-4xl md:text-6xl hidden font-bold absolute left-1/8 -translate-x-1/2 bottom-20 md:bottom-[80px] text-center">
          Launch day
        </p>
        <Button className="bg-transparent border border-yellow-300 rounded-full px-6 py-2  text-white mt-5 md:absolute md:bottom-[50px] md:right-[25%]">
          Learn More
        </Button>
      </div>

      <HomeEnd />
    </div>
  );
};

export default Home;
