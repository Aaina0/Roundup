import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const coreTrackData = [
  {
    header: "Quarter 1",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: " Quarter 2",
    description:
      " W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: " Quarter 3",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const Core = () => {
  const paragraph = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="relative mt-16 lg:mt-28">
      <Wrapper>
        <div className="absolute top-0 -left-1 bg-[#00616C] w-72 h-72 rounded-full filter blur-3xl opacity-40"></div>
        <div className="flex-1">
          <h3 className="text-[#00616C] mb-3 font-semibold">
            Program of Studies
          </h3>
          <h1
            className={`text-4xl font-bold mb-5 sm:text-4xl max-w-3xl whitespace-pre-line`}
          >
            {paragraph}
          </h1>
          <p className="text-[#4A5B5C] mb-5 max-w-lg text-sm">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
        </div>
        <div>
          <Button text="Learn More" />
        </div>
        <div className="flex gap-36 mb-10 my-20 flex-col md:flex-row">
          {coreTrackData.map((item) => {
            return (
              <>
                <div className="border rounded-md py-12 w-4/12 px-8 flex flex-col justify-center flex-1 relative">
                  <h4 className="font-bold text-lg">{item.header}</h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                  <div className="absolute top-5 font-bold text-gray-200 -z-10 right-10 text-9xl">
                    {item.number}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Core;
