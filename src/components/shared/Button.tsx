import { FC } from "react";
// import { text } from "stream/consumers";

const Button: FC<{ text: string }> = ({text}) => {
  return (
    <button className="rounded-full bg-[#00616C] text-white w-28 h-10 text-sm py-2 font-medium px-4 hover:bg-slate-400 duration-300 hover:scale-125 hover:shadow-lg">{text}
    </button>
  );
};

export default Button;
