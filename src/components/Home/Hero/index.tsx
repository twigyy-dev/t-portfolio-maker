import Image from "next/image";
import React from "react";
import brandData from "./brandData";
import Link from "next/link";
import "../../../app/sass/herosection.scss";
//import mainbackgroundimage from "/images/hero/mainbackgroundimage.png"

const Hero = () => {
  return (
    <section>
      <div className=" main_image ">
        <div className="main_text text-center">
          <h1 className="text-[108px] text-[#B7B7B7] font-extrabold ">
            You{" "}
            <span className="text-[108px] text-[#09D1D5] font-extrabold">
              think{" "}
            </span>
            <span className="text-[108px] text-[#B7B7B7] font-extrabold">
              big{""}
            </span>
            <br/>
            We make it {""}
            <span className="text-[108px] text-[#09D1D5] font-extrabold">
              possible{" "}
            </span>
          </h1>
        </div>
        <div className="w-full flex justify-center mt-30">
          <button className="explore_btn">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
