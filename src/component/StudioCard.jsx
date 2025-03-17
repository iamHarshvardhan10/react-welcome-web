import React from "react";
import Tilt from "react-parallax-tilt";
import studioImage1 from "../assets/abc03.png";
import studioImage2 from "../assets/abc04.png";
import studioImage3 from "../assets/abc05.jpg";
import { Button } from "../components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const card = [
  {
    id: 1,
    name: "Brand customization",
    description:
      "Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.",
    image: studioImage1,
  },
  {
    id: 2,
    name: "Stage Kit",
    description:
      "Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.",
    image: studioImage2,
  },
  {
    id: 3,
    name: "Green room",
    description:
      "Invite speakers to a private waiting room to meet and prep to go on stage.",
    image: studioImage3,
  },
];

const StudioCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-5 mt-5">
        {card.map((item) => {
          return (
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              key={item.id}
            >
              <div className="bg-[#141414] w-full sm:w-[320px] md:w-[430px] h-[460px] px-10 py-5 overflow-hidden">
                <h1 className="text-xl text-white">{item.name}</h1>
                <p className="text-sm text-gray-400">{item.description}</p>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[340px] object-cover rounded-tl-xl mt-10"
                />
              </div>
            </Tilt>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-10 mb-10">
        <Button className="bg-transparent border border-gray-400 rounded-full">
          See all features <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default StudioCard;
