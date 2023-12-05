import Image from "next/image";
import redlogo from "../../assets/redlogo.png";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <Wrapper>
        <div className="flex justify-between items-centers py-6 px-3 max-w-screen-xl mx-auto bg-white">
          <Image src={redlogo} alt="img" />
          <ul className="flex gap-5 font-medium">
            <li>
              <Link href={"/"}>Courses</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>{" "}
            </li>
            <li>
              <Link href={"/videos"}>Videos</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
