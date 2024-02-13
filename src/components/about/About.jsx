import React from "react";
import reactLogo from "./dev2.jpg";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
    
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          About Me
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="">
        <div className=" relative">
          {/* design */}
          <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
            <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
            <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
            <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
          </div>
          
            <img  className="h-[480px] w-[380px] sm:h-[350px] flex border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg" src={reactLogo} alt="reactLogo" />
          
        </div>

        <div className=" relative">
          {/* design */}
          <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
            <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
            <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
            <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
          </div>
          {/* design */}
          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
            <h1 className="text-[1.4rem] font-semibold sm:text-xl">Hi, I'm</h1>
            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
              Abhijit Shyamal_
            </span>
            <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base"></span>
            <p className=" text-[.9rem] text-justify break-words text-gray-500">
              a competitive programmer and a full-stack web developer, seeking a
              challenging role at a reputed organization to utilize my skills
              that can contribute to the company's growth as well as enhance my
              knowledge by exploring new things. I'm currently pursuing Master
              of Computer Applications from
              <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                {" "}
                National Institute of Technology, Jamshedpur{" "}
              </span>{" "}
              and pursued Bachelores degree from{" "}
              <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Vidyasagar University
              </span>{" "}
              Being from a Mathematics Honours background, my interests lies in
              Programming and I, am an enthusiastic Competitive Programming
              learner, maintained a decent profile on GFG platform. In
              development field, I have Backend skills in Node.Js and frontend
              skills in CSS and React.js. I've made some projects using these
              technologies. Apart from these technicals, I love public speaking
              and writing poetry. I love to learn new technologies and keep
              myself updated and flex my creativity to create amazing things.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
