import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dataImage from "../assets/abc10.jpg";

gsap.registerPlugin(ScrollTrigger);

const splitText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="inline-block opacity-0 translate-y-5">
      {char}
    </span>
  ));
};

const Data = () => {
  const integrateRef = useRef(null);
  const yourDataRef = useRef(null);

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

    animateText(integrateRef);
    animateText(yourDataRef);

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-[#f5f5f5] px-5 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-around h-auto lg:h-[80vh] overflow-hidden gap-10">
      {/* Custom Inputs Section */}
      <div className="flex flex-row-reverse md:flex-row items-center gap-5 flex-wrap justify-center">
        {[1, 2].map((_, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-row md:flex-col items-center gap-5"
          >
            {[1, 2, 3].map((num) => (
              <h1
                key={num}
                className="h-[80px] md:h-[180px] lg:h-[220px] w-[180px] md:w-[120px] lg:w-[140px] border border-gray-300 rounded-full bg-white flex items-center justify-center text-sm md:text-base mt-10"
              >
                Custom Integration{num}
              </h1>
            ))}
          </div>
        ))}
      </div>

      {/* Data Integration Section */}
      <div className="flex flex-col items-start justify-center text-center lg:text-start gap-5">
        <h1
          ref={integrateRef}
          className="text-6xl md:text-6xl lg:text-[120px] font-semibold"
        >
          {splitText("Integrate")}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={dataImage}
            alt="data"
            className="h-[100px] w-[180px] md:h-[116px] md:w-[208px] rounded-full object-cover"
          />
          <h1
            ref={yourDataRef}
            className="text-4xl md:text-6xl lg:text-[123px]"
          >
            {splitText("your data")}
          </h1>
        </div>
        <p className="text-lg text-start md:text-base lg:text-[16px] w-full md:w-[80%] lg:w-[55%]">
          Leverage your existing marketing platforms and sync the data
          seamlessly.
        </p>
      </div>
    </div>
  );
};

export default Data;
