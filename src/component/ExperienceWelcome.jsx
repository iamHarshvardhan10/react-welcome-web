import { Button } from "../components/ui/button";
import React from "react";
import exWelcomeImage from "../assets/abc07.jpg";
import exWelcomeImage2 from "../assets/abc08.png";
import exWelcomeImage3 from "../assets/abc09.png";
import exWelcomeImage4 from "../assets/abc10.jpg";

export const ExperienceWelcomeCard = () => {
  return (
    <div className="mt-20 overflow-hidden relative">
      <div className="flex flex-col items-center gap-20">
        <div className="flex items-center gap-6">
          <img
            src={exWelcomeImage}
            className="h-[160px] w-[1200px] border rounded-full bg-white flex items-center justify-center -translate-x-20"
          />
          <img
            src={exWelcomeImage2}
            className="h-[160px] w-[1100px] border rounded-full bg-white flex items-center justify-center"
          />
          <img
            src={exWelcomeImage3}
            className="h-[160px] w-[900px] border rounded-full bg-white flex items-center justify-center translate-x-10"
          />
          <img
            src={exWelcomeImage4}
            className="h-[160px] w-[1000px] border rounded-full bg-white flex items-center justify-center translate-x-20"
          />
        </div>
        <div className="flex items-center gap-2 mt-[-50px]">
          <img
            src={exWelcomeImage4}
            className="h-[160px] w-[800px] border rounded-full bg-white flex items-center justify-center -translate-x-20"
          />
          <img
            src={exWelcomeImage3}
            className="h-[160px] w-[800px] border rounded-full bg-white flex items-center justify-center -translate-x-10"
          />
          <img
            src={exWelcomeImage2}
            className="h-[160px] w-[800px] border rounded-full bg-white flex items-center justify-center -translate-x-10"
          />
          <img
            src={exWelcomeImage}
            className="h-[160px] w-[800px] border rounded-full bg-white flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceWelcome = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-[128px] w-full md:w-3/4 lg:w-1/2 leading-tight md:leading-[115px] text-center">
          Experience Welcome
        </h1>
        <p className="text-base md:text-xl lg:text-2xl text-gray-600 w-full md:w-3/4 lg:w-2/5 text-center mt-6 md:mt-10">
          A webinar platform designed for marketers to host jaw-dropping
          experiences that drive revenue.
        </p>
        <Button className="bg-[#5B6CFF] rounded-full mt-6 md:mt-10">
          Request Demo
        </Button>
      </div>
      <ExperienceWelcomeCard />
    </div>
  );
};

export default ExperienceWelcome;
