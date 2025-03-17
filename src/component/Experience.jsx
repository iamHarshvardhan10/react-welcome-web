import React, { useRef, useEffect } from "react";
import expe1 from "../assets/exbanner1.jpg";
import expe2 from "../assets/exbanner2.jpg";
import expe3 from "../assets/exbanner3.jpg";
import expe4 from "../assets/exbanner4.jpg";
import expe5 from "../assets/exbanner5.jpg";
import expe6 from "../assets/exbanner6.png";
import expe7 from "../assets/exbanner7.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const main = useRef();

  useEffect(() => {
    const splitText = new SplitType(".split-text", { types: "words" });

    gsap.from(splitText.words, {
      y: (i) => (i % 2 === 0 ? -100 : 100),
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".split-text",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 overflow-x-hidden" ref={main}>
      <div className="split-text">
        <h1 className="text-[24px] sm:text-[28px] md:text-[52px]">
          An unmatched attendee
        </h1>
        <h1 className="text-[64px] sm:text-[82px] md:text-[185px] leading-tight font-semibold">
          Experience
        </h1>
      </div>

      <div className="px-2 sm:px-4 lg:px-10 grid gap-4 mt-4">
        <div className="relative">
          <img
            src={expe1}
            alt="experience 01"
            className="w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-xl object-cover"
          />
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-black p-2 sm:p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold">
              Interactive overlays
            </h2>
            <p className="text-xs sm:text-sm w-[80%] sm:w-[60%] mt-2 sm:mt-5">
              Add custom branded graphics that lay over your live video to intro
              speakers, emphasize key points, and display clickable CTAs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div className="relative lg:col-span-2">
            <img
              src={expe2}
              alt="experience 02"
              className="w-full h-[400px] sm:h-[500px] md:h-[612px] rounded-xl object-cover"
            />
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-black p-2 sm:p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold">
                Interactive Polls
              </h2>
              <p className="text-xs sm:text-sm w-[80%] sm:w-[60%] mt-2 sm:mt-5">
                Embed polls directly on stage and watch the results populate in
                real-time. Moderate audience questions, allow upvoting, and
                bring attendees on-stage.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-2">
            <div className="h-[400px] sm:h-[500px] md:h-[612px] w-full rounded-xl exCardBg" />
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-black p-2 sm:p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold">HD Video Quality</h2>
              <p className="text-xs sm:text-sm w-[80%] sm:w-[60%]">
                Provide a better experience for your viewers with crystal clear
                HD video streaming.
              </p>
              <h1 className="text-[48px]  sm:text-[48px] md:text-[72px] text-black text-center mt-10 sm:mt-20">
                Starting Soon
              </h1>
            </div>
            <img
              src={expe3}
              alt=""
              className="w-[320px] sm:w-[320px] md:w-[420px] h-auto absolute bottom-0 left-[10%]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div className="relative lg:col-span-2">
            <img
              src={expe4}
              alt="experience 04"
              className="w-full h-[300px] sm:h-[400px] md:h-[363px] rounded-xl object-cover"
            />
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 p-2 sm:p-4 rounded-lg ">
              <h2 className="text-lg sm:text-xl font-bold">Q&A</h2>
              <p className="text-xs sm:text-sm w-[80%] sm:w-[60%] mt-1 sm:mt-2">
                Moderate audience questions, allow upvoting, and bring attendees
                on-stage.
              </p>
              <img src={expe6} alt="" className="mt-10 sm:mt-20" />
            </div>
          </div>

          <div className="relative lg:col-span-2">
            <img
              src={expe5}
              alt="experience 05"
              className="w-full h-[300px] sm:h-[400px] md:h-[363px] rounded-xl object-cover"
            />
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 p-2 sm:p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold">Chat</h2>
              <p className="text-xs sm:text-sm w-[80%] sm:w-[60%] mt-1 sm:mt-2">
                Chat is where engagement happens. With a slack-like experience,
                attendees can use emojis, reactions, and gifs to express
                themselves.
              </p>
            </div>
            <img
              src={expe7}
              alt=""
              className="absolute top-0 right-0 w-[180px] sm:w-[220px] md:w-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
