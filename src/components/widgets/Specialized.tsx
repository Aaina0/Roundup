"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import { FaGreaterThan } from "react-icons/fa";
import { useState } from "react";
export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization   ",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.      ",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "cloud",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "computing",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "genomics",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "network",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.      ",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "network",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.      ",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "network",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.      ",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
  {
    slug: "network",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.      ",
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform          ",
        number: 5,
      },
    ],
  },
];

const Specialized = () => {
  const [selected, setSelected] = useState("wmd");

  const selectedItem = programsData.find((item) => item.slug === selected);

  return (
    <section className="mt-36 mb-24">
      <Wrapper>
        <div className="mt-10">
          <h1 className="font-bold text-4xl max-w-lg">Specialized Tracks:</h1>
          <p className="text-[#4A5B5C] max-w-lg mt-3">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
          <div className="flex gap-20 flex-col-reverse lg:flex-row">
            <div className="border sticky top-10 basis-8/12 border-gray-300 mt-10 shadow-xl self-start rounded-xl py-5 px-8">
              <h5 className="text-[#00616C] text-xs mb-3 max-w-lg font-semibold">
                Specialized Program
              </h5>
              <h3 className="font-bold text-2xl max-w-lg mb-3">
                {selectedItem?.header}
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                {selectedItem?.description}
              </p>
              <button className="text-[#00616C] mt-3 underline flex gap-x-1 items-end">
                Learn More
                <FaGreaterThan size={12} className="mb-1" />
              </button>

              <div className="flex gap-10 my-10 flex-col md:flex-row">
                <div className="rounded-md py-20 w-4/12 px-2 flex flex-col justify-center flex-1 relative">
                  <h4 className="font-bold text-md">Quarter IV</h4>
                  <p className="text-gray-700 text-xs">
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13 and Cloud Development
                    Kit (CDK) for Terraform
                  </p>
                  <div className="absolute top-5 font-bold text-gray-200 -z-10 right-10 text-9xl">
                    4
                  </div>
                </div>
                <div className="rounded-md py-12 w-4/12 px-2 flex flex-col justify-center flex-1 relative">
                  <h4 className="font-bold text-md">Quarter V</h4>
                  <p className="text-gray-700 text-xs">
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13 and Cloud Development
                    Kit (CDK) for Terraform
                  </p>
                  <div className="absolute top-5 font-bold text-gray-200 -z-10 right-10 text-9xl hover:scale-125 duration-300">
                    5
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 space-y-4 flex-1 basis-4/12 max-w-lg shadow-xl cursor-pointer mt-6">
              {programsData.map((item, i) => {
                return (
                  <div
                    key={item.slug}
                    className="flex gap-5 items-center max-w-lg"
                  >
                    <div>
                      <h4 className="text-[#00616C] semi-bold text-xs">
                        Specialized Program
                      </h4>
                      <h3
                        onClick={() => setSelected(item.slug)}
                        className="font-bold text-lg gap-3"
                      >
                        {item.header}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Specialized;
