import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import studio1 from "../assets/abc02.jpg";
import StudioCard from "./StudioCard";

gsap.registerPlugin(ScrollTrigger);

const splitText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="inline-block opacity-0 translate-y-5">
      {char}
    </span>
  ));
};

const Studio = () => {
  const poweredByRef = useRef(null);
  const welcomeRef = useRef(null);
  const studioRef = useRef(null);

  useLayoutEffect(() => {
    const animateText = (ref) => {
      gsap.fromTo(
        ref.current.children,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
        }
      );
    };

    animateText(poweredByRef);
    animateText(welcomeRef);
    animateText(studioRef);

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-black h-auto px-5 md:px-10 lg:px-20 py-10">
      <div className="mt-10 flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <p
          ref={poweredByRef}
          className="text-white text-3xl md:text-5xl"
        >
          Powered by
        </p>
        <h1
          ref={welcomeRef}
          className="text-white text-[100px] md:text-[180px] lg:text-[236px] leading-none md:leading-[150px] lg:leading-[180px]"
        >
          {splitText("Welcome")}
        </h1>
        <p
          ref={studioRef}
          className="text-white text-[90px] md:text-[150px] lg:text-[225px] leading-none md:leading-[140px] lg:leading-[180px] self-end"
        >
          {splitText("Studio")}
        </p>
      </div>

      <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-between relative h-auto md:h-[550px] w-full bg-gradient-to-r from-[#96B7CD] to-[#E68D83] rounded-lg p-5 md:p-10">
        <div className="md:px-10 md:-mt-[200px] w-full md:w-1/2">
          <h1 className="text-lg md:text-xl font-bold">
            Drag-n-drop Agenda Builder
          </h1>
          <p className="text-sm w-[90%] md:w-[70%] md:text-base text-gray-600 mt-2">
            Quickly rearrange your webinar's sequence of actions and instantly
            generate an agenda that auto-updates as you move actions around.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={studio1}
            alt="Studio Visual"
            className="w-full md:w-[600px] lg:w-[830px] h-auto md:h-[490px] mt-5 md:mt-[60px] rounded-tl-xl"
          />
        </div>
      </div>
      <StudioCard />
    </div>
  );
};

export default Studio;
