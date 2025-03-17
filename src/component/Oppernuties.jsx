import React, { useEffect, useRef } from "react";
import Categories from "./Categories";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Oppernuties = () => {
  const oneRef = useRef(null);
  const platformRef = useRef(null);
  const endlessRef = useRef(null);
  const opportunitiesRef = useRef(null);

  useEffect(() => {
    const splitOne = new SplitType(oneRef.current, { types: "chars" });
    const splitPlatform = new SplitType(platformRef.current, {
      types: "chars",
    });
    const splitEndless = new SplitType(endlessRef.current, { types: "chars" });
    const splitOpportunities = new SplitType(opportunitiesRef.current, {
      types: "chars",
    });

    const animateText = (chars, triggerElement) => {
      gsap.from(chars, {
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 100,
        stagger: 0.05,
        ease: "power4.out",
        duration: 1,
      });
    };

    animateText(splitOne.chars, oneRef.current);
    animateText(splitPlatform.chars, platformRef.current);
    animateText(splitEndless.chars, endlessRef.current);
    animateText(splitOpportunities.chars, opportunitiesRef.current);

    return () => {
      splitOne.revert();
      splitPlatform.revert();
      splitEndless.revert();
      splitOpportunities.revert();
    };
  }, []);

  return (
    <>
      <div className="bg-black w-full">
        <div className="mx-auto  px-6  sm:px-4  md:px-8  md:pt-[520px] lg:px-12 lg:pt-0 xl:px-16 pt-[620px]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
            <div className="flex flex-col items-center md:items-start">
              <span
                ref={oneRef}
                className="text-[30px] sm:text-[40px] md:text-[50px] leading-[40px] md:leading-[50px] text-white"
              >
                One
              </span>
              <span
                ref={platformRef}
                className="text-[30px] sm:text-[40px] md:text-[50px]  leading-[40px] md:leading-[50px] text-white"
              >
                platform
              </span>
            </div>
            <h1
              ref={endlessRef}
              className="text-[60px] sm:text-[100px] md:text-[120px] text-white"
            >
              Endless
            </h1>
          </div>
          <h1
            ref={opportunitiesRef}
            className="text-[60px] sm:text-[80px] md:text-[120px] text-white flex justify-end items-end"
          >
            Opportunities
          </h1>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Oppernuties;
