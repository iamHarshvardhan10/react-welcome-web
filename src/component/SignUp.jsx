import React from "react";
import signUpImage from "../assets/abc15.jpg";

const SignUp = () => {
  return (
    <div className="relative">
      <img
        src={signUpImage}
        alt=""
        className="w-full lg:h-[80vh] h-[50vh] object-cover max-h-screen"
      />
      <div className="absolute top-0 py-10 px-5 md:py-10 md:px-20 w-full md:w-[60%]">
        <div>
          <h1 className="text-3xl  md:text-[40px] text-white leading-tight">
            Signup for the newsletter
          </h1>
        </div>
        <div className="flex flex-col  md:flex-row items-start md:items-center justify-between absolute -bottom-[100px] md:-bottom-[100px] w-full gap-5">
          <p className="text-white text-lg md:text-2xl w-full md:w-auto">
            Stay Connected
          </p>
          <div className="flex flex-col gap-5 w-full md:w-auto">
            <input
              type="text"
              placeholder="First Name"
              className="border-b-2 bg-transparent w-[250px] md:w-[350px] text-white placeholder-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 bg-transparent w-[250px] md:w-[350px] text-white placeholder-white focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
