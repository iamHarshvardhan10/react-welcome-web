import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import revenueImage from "../assets/abc06.jpg";

gsap.registerPlugin(ScrollTrigger);

const Revenue = () => {
  const containerRef = useRef();
  const leftTextRef = useRef();
  const rightContentRef = useRef();
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side slide-in with fade
      gsap.from(leftTextRef.current, {
        x: -150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftTextRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Right content slide-in with stagger effect
      gsap.from(rightContentRef.current.children, {
        x: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: rightContentRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Image zoom-in effect
      gsap.fromTo(
        ".revenue-image",
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".revenue-image",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Number counter animation with symbol handling
      numberRefs.current.forEach((el) => {
        const finalValue = parseFloat(el.getAttribute("data-number"));
        const symbol = el.getAttribute("data-symbol") || "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: finalValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            const formattedValue =
              symbol === "$"
                ? `$${counter.val.toFixed(1)}M`
                : `${Math.floor(counter.val)}${symbol}`;
            el.innerText = formattedValue;
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-5 md:px-10 lg:px-20 py-10 md:py-20 w-full h-auto bg-[#f5f5f5]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-around gap-10">
        <div
          ref={leftTextRef}
          className="mt-10 md:mt-20 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[120px] font-semibold">
            Drive
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 leading-10">
            <img
              src={revenueImage}
              alt="Revenue"
              className="revenue-image w-[150px] h-[90px] md:w-[200px] md:h-[115px] rounded-full"
            />
            <p className="text-5xl md:text-7xl lg:text-[126px] font-semibold">
              Revenue
            </p>
          </div>
        </div>

        <div
          ref={rightContentRef}
          className="mt-10 md:mt-20 space-y-6 w-full max-w-md"
        >
          <div>
            <h1
              ref={(el) => (numberRefs.current[0] = el)}
              data-number="87"
              data-symbol="%"
              className="text-4xl md:text-5xl lg:text-[60px] font-medium"
            >
              0%
            </h1>
            <p className="text-base md:text-lg text-gray-500">
              increased attendee engagement at Bitwise
            </p>
            <div className="border-b-2 border-gray-300 mt-4"></div>
          </div>
          <div>
            <h1
              ref={(el) => (numberRefs.current[1] = el)}
              data-number="1.7"
              data-symbol="$"
              className="text-4xl md:text-5xl lg:text-[60px] font-medium"
            >
              $0M
            </h1>
            <p className="text-base md:text-lg text-gray-500">
              Pipeline generated at Everbridge
            </p>
            <div className="border-b-2 border-gray-300 mt-4"></div>
          </div>
          <div>
            <h1
              ref={(el) => (numberRefs.current[2] = el)}
              data-number="58"
              data-symbol="%"
              className="text-4xl md:text-5xl lg:text-[60px] font-medium"
            >
              0%
            </h1>
            <p className="text-base md:text-lg text-gray-500">
              attendee conversion rate at Interfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
