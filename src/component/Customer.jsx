import React, { useEffect, useRef } from "react";
import customerImage from "../assets/abc01.jpg";
import { Button } from "../components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Customer = () => {
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subTextRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subTextRef.current,
          start: "top 95%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-black h-screen border border-gray-900">
      <img
        src={customerImage}
        alt="Customer testimonial"
        className="h-full w-full object-cover border border-gray-900"
      />
      <div className="absolute top-1/3 left-5 right-5 md:left-20 md:right-auto md:px-10 lg:px-40">
        <h1
          ref={textRef}
          className="text-white text-2xl md:text-3xl lg:text-4xl font-medium md:w-3/4 lg:w-2/3"
        >
          "Makes other platforms look like the 1990's"
        </h1>
        <p
          ref={subTextRef}
          className="text-gray-300 mt-4 md:mt-6 lg:mt-10 text-sm md:text-base"
        >
          - Nate Skinner, CMO at Onfido
        </p>
        <Button className="bg-transparent mt-6 md:mt-8 lg:mt-10 border border-gray-300 rounded-full px-4 py-2 text-sm md:text-base">
          Read customer stories
        </Button>
      </div>
    </div>
  );
};

export default Customer;
