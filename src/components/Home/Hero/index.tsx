import Image from "next/image";
import React from "react";
import brandData from "./brandData";
import Link from "next/link";
import SectionHeader from "@/components/Common/SectionHeader";
import "../../../app/sass/herosection.scss";
import Section from "@/components/Common/Section";
//import mainbackgroundimage from "/images/hero/mainbackgroundimage.png"

const Hero = () => {
  return (
    <Section>
      <div className=" main_image ">
        <div className="main_text">
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
                  <br />
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
        </div>
      </div>
    </Section>
  );
};

export default Hero;
