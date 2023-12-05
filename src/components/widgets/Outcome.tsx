import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import outcome from "/public/outcome.webp";
import { SiVbulletin } from "react-icons/si";

const outcomePoint = [
  "Product OwnerShip",
  "Freelancing",
  "Global Marketing by Panaverse Dao",
  "Boosting Economy",
];

const Outcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex gap-x- items-center flex-col-reverse md:flex-row">
          <div className="flex-1">
            <Image src={outcome} alt="image" />
          </div>
          <div className="gap-7 mt-9 flex-1">
            <h1 className="font-bold text-4xl">
              The Outcome for Participants of the Program
            </h1>
            <p className=" mt-4 text-lg text-slate-600">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7">
              {outcomePoint.map((item, i) => (
                <div className="flex items-center gap-x-2" key={i}>
                  <SiVbulletin className="text-[#00616C]" />
                  <h3 className="font-medium text-lg text-slate-600">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Outcome;
