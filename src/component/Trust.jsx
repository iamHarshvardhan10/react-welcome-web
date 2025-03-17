import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import abcBanner from "../assets/abcbanner.jpg";
import abcProfile from "../assets/abcProfile1.jpg";
import abcProfile2 from "../assets/abcPro.jpg";
import abcCompany from "../assets/abcCompany.png";
import abcCompany2 from "../assets/abclogo6.png";
import Oppernuties from "./Oppernuties";

export const TrustCard = [
  {
    id: 1,
    para: "We chose Welcome because it's intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.",
    name: "Ally Masi",
    role: "Director of Industries Events Marketing",
    company: "saleforce",
    profile: abcProfile,
    companyImage: abcCompany,
  },
  {
    id: 2,
    para: "“Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.”",
    name: "Talisha Brantley",
    role: "VP of Events",
    company: "Bitwise",
    profile: abcProfile2,
    companyImage: abcCompany2,
  },
];

const Trust = () => {
  return (
    <div className="relative w-full">
      <img src={abcBanner} alt="" className="w-full h-auto object-cover" />
      <div className="absolute top-0 px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20 flex flex-col md:flex-row items-start md:items-end justify-between w-full">
        <h1 className="text-4xl md:text-6xl lg:text-[105px] w-full md:w-[50%] leading-tight md:leading-[100px] text-black">
          Loved & trusted
        </h1>
        <div className="flex gap-4 md:gap-6 lg:gap-10 text-2xl md:text-4xl lg:text-[60px] mt-6 md:mt-0">
          <button aria-label="Previous">
            <FaArrowLeft />
          </button>
          <button aria-label="Next">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="absolute top-0 mt-[250px] md:mt-[300px] lg:mt-[350px] w-full px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {TrustCard.map((trust) => (
          <div
            key={trust.id}
            className="flex items-center justify-center w-full md:w-auto"
          >
            <div className="flex flex-col items-start justify-center px-4 md:px-6 py-6 border-white border-t-2 border-r-2 rounded-tr-3xl w-full md:w-auto">
              <p className="text-base md:text-lg lg:text-[23px] text-white w-full md:w-[70%]">
                {trust.para}
              </p>
              <div className="flex items-center mt-6 md:mt-10 gap-4">
                <img
                  src={trust.profile}
                  alt=""
                  className="rounded-full w-12 h-12 md:w-[64px] md:h-[64px]"
                />
                <div>
                  <h2 className="text-sm md:text-base lg:text-[18px] text-white">
                    {trust.name}
                  </h2>
                  <p className="text-xs md:text-sm lg:text-[15px] text-gray-600">
                    {trust.role}
                  </p>
                  <p className="text-xs md:text-sm lg:text-[15px] text-gray-600">
                    {trust.company}
                  </p>
                </div>
              </div>
              <img
                src={trust.companyImage}
                alt=""
                className="h-12 w-24 md:h-[80px] md:w-[120px] mt-6 md:mt-10"
              />
            </div>
          </div>
        ))}
      </div>

      <Oppernuties />
    </div>
  );
};

export default Trust;
