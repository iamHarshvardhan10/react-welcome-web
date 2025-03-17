import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import workImage7 from "../assets/abc07.jpg";
import workImage8 from "../assets/abc08.png";
import workImage9 from "../assets/abc09.png";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const card = [
  {
    id: "1",
    progess: "Step 1",
    title: "Create",
    description:
      "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
    image: workImage7,
  },
  {
    id: "2",
    progess: "Step 2",
    title: "Engage",
    description:
      "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.",
    image: workImage8,
  },
  {
    id: "3",
    progess: "Step 3",
    title: "Analyze",
    description:
      "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
    image: workImage9,
  },
];

const WorkCard = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-10 md:py-20 space-y-16">
      {card.map((item) => (
        <div key={item.id} className="work-card mb-10">
          <div className="border-t border-gray-300"></div>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="w-full md:w-1/2 px-4">
              <span className="text-gray-500 text-sm">{item.progess}</span>
              <h1 className="flex items-center gap-2 text-3xl md:text-[60px] leading-tight">
                {item.title} <MdArrowOutward />
              </h1>
              <p className="text-sm md:text-[15px] mt-4 md:mt-5 w-full md:w-[80%]">
                {item.description}
              </p>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-[600px] lg:w-[800px] xl:w-[1140px] h-[200px] md:h-[220px] rounded-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
