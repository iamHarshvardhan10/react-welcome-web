import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../components/ui/button";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation while scrolling
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // Description animation while scrolling
      gsap.fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // Button animation while scrolling
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // WorkCard animation with stagger while scrolling
      gsap.fromTo(
        ".work-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".work-card",
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="px-5 sm:px-10 md:px-20 py-10 md:py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-10">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-[128px] leading-tight md:leading-[110px]"
        >
          How it works
        </h1>
        <div className="w-full md:w-1/2">
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-[24px]"
          >
            Manage your experience from start to finish, from integrations to
            registration and from interactive stage elements to post-event data,
            it's all here.
          </p>
          <Button ref={buttonRef} className="bg-[#5B6CFF] mt-5 md:mt-10">
            Learn More
          </Button>
        </div>
      </div>
      <div className="work-card">
        <WorkCard />
      </div>
    </div>
  );
};

export default Works;
