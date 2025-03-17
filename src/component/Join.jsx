import { Badge } from "../components/ui/badge";
import React from "react";
import JoinImage from "../assets/abc14.jpg";
import { Button } from "../components/ui/button";

const Join = () => {
  return (
    <div className="bg-black h-auto px-4 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
        <h1 className="text-4xl md:text-6xl lg:text-[114px] text-white text-center md:text-left">
          Join Us
        </h1>
        <Badge className="border-gray-300 bg-transparent rounded-full px-4 py-2 text-sm md:text-base">
          All Events
        </Badge>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between border-white border-t-2 border-r-2 rounded-tr-3xl px-4 md:px-8 py-6 gap-6">
        <div className="w-full lg:w-1/2">
          <Badge className="border-gray-400 text-xs md:text-sm">
            December 21, 2022
          </Badge>
          <h1 className="text-2xl md:text-3xl lg:text-[48px] text-white leading-tight mt-4">
            Attention-Grabbing Marketing in a Noisy Market
          </h1>
          <Button className="bg-[#5B6CFF] rounded-full mt-6 px-4 py-2 text-sm md:text-base">
            Register
          </Button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={JoinImage}
            alt="Event"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
