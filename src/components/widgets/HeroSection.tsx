import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import hero from "@/assets/hero.jpg";
import Button from "../shared/Button";
const HeroSection = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center ">
          <div className="flex-1">
            <h4 className="text-[#00616C] mb-3 font-semibold">
              {/* Left side */}
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className={`text-4xl font-bold mb-10 sm:text-5xl`}>
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="text-[#4A5B5C] mb-5 max-w-lg text-sm">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="text-[#4A5B5C] mb-5 max-w-lg text-sm">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            {/* <button className="rounded-full bg-[#00616C] mt-8 text-white w-24 h-10 text-sm py-2">Learn More</button> */}
            <div>
              <Button text="Learn More" />
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <Image src={hero} alt="hero" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
