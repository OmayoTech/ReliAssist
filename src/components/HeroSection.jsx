import { Tags } from "../assets/";
import { HashLink as Link } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full md:flex-row gap-10 justify-evenly px-4 md:px-[140px] mt-10 md:mt-20">
      <div className="w-full md:w-[50%] py-10 md:py-20 mb-10">
        <h1 className="md:text-start text-center text-[40px] md:text-[80px] leading-[45px] md:leading-[69px] font-Rale font-semibold text-secondary">
          Your Business,
        </h1>
        <h2 className="md:text-start text-center text-[40px] md:text-[80px] leading-[45px] md:leading-[69px] font-Rale font-regular text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] from-10% to-[rgba(245,91,195,1)] to-100%">
          Simplified.
        </h2>
        <p className="w-full mt-4 font-Rale text-[16px] md:text-[20px] leading-[30px]">
          ReliAssist is your go-to partner for dependable, expert virtual
        </p>
        <p className="w-full md:w-[90%] font-Rale  text-[16px] md:text-[20px] leading-[30px]">
          assistant services, designed to streamline your daily operations so
          you can focus on growth.
        </p>
        <Link
          to="/#Services"
          className="md:flex md:justify-start flex justify-center mt-4"
        >
          <button className="py-2 md:py-3 px-6 md:px-12 text-white bg-secondary mt-6 hover:bg-black hover:outline-black font-bold font-Rale outline outline-1 outline-primary rounded-md">
            Discover Our Services
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img src={Tags} alt="hero" className="w-[400px] md:w-[700px]" />
      </div>
    </div>
  );
};

export default HeroSection;
