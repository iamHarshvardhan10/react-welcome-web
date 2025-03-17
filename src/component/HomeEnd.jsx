import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import abclogo1 from "../assets/abclogo1.png";
import abclogo2 from "../assets/abclogo2.png";
import abclogo3 from "../assets/abclogo3.png";
import abclogo4 from "../assets/abclogo4.png";
import abclogo5 from "../assets/abclogo5.png";
import abclogo6 from "../assets/abclogo6.png";
import abclogo7 from "../assets/abclogo7.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const logos = [
  abclogo1,
  abclogo2,
  abclogo3,
  abclogo4,
  abclogo5,
  abclogo6,
  abclogo7,
];

const logos2 = [
  abclogo7,
  abclogo6,
  abclogo5,
  abclogo4,
  abclogo3,
  abclogo2,
  abclogo1,
];

const HomeEnd = () => {
  const main = useRef();
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);

  useEffect(() => {
    const duration = 10;

    gsap.to(col1Ref.current, {
      yPercent: -50,
      ease: "none",
      repeat: -1,
      duration,
    });
    gsap.to(col2Ref.current, {
      yPercent: 100,
      ease: "none",
      repeat: -1,
      duration,
    });
  }, []);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".animation");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: main }
  );

  const renderLogos = (ref) => (
    <div ref={ref} className="flex flex-col items-center gap-10">
      {[...logos, ...logos2].map((logo, index) => (
        <img
          key={index}
          src={logo}
          className="h-[60px] w-[120px]"
          alt={`logo-${index}`}
        />
      ))}
    </div>
  );

  return (
    <div className="px-0 md:px-40 py-10">
      <div className="flex flex-col md:flex-row items-center justify-around flex-wrap">
        <div className="flex-1 text-center md:text-left" ref={main}>
          <div className="animation">
            <h1 className="text-white text-3xl md:text-[48px] md:w-[50%] font-semibold">
              World-class teams are upgrading to welcome
            </h1>
            <p className="md:w-[45%] text-lg text-gray-300 mt-4">
              Companies are ditching legacy platforms for the ability to deliver
              an engaging experience at every level.
            </p>
          </div>
          <div className="mt-10 animation">
            <h1 className="text-white text-2xl md:text-3xl flex items-center justify-center md:justify-start gap-2">
              <FiArrowUpRight className="text-3xl md:text-4xl text-green-300" />{" "}
              66%
              <span className="text-gray-300">attendance rate</span>
            </h1>
            <p className="text-gray-300 mt-2 text-center md:text-left">
              Avg attendance for Welcome customers
            </p>
          </div>
        </div>

        <div className="h-[80vh] overflow-hidden relative">
          <div className="absolute inset-0 z-10 pointer-events-none mask-gradient"></div>
          <div className="mt-2 md:mt-0 flex items-center gap-10">
            <div className="relative h-full overflow-hidden">
              {renderLogos(col1Ref)}
            </div>
            <div className="relative h-full overflow-hidden">
              {renderLogos(col2Ref)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEnd;
