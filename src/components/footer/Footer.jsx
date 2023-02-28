import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            href="https://telegram.me/SarkarSandip"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a
            href="https://wa.me/9366914025"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a
            href="https://instagram.com/the_sandip___?igshid=ZDdkNTZiNTM="
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2018 Portfolio. </span> All rights resreved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
