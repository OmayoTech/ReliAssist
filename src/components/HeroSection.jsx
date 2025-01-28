import { Tags } from "../assets/";
import { HashLink as Link } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full md:px-[140px] gap-10 justify-evenly px-4 mt-10 md:mt-20">
      <div className="flex flex-col items-center md:items-start md:w-full py-10 md:py-20 mb-10 md:basis-1/2">
        <h1 className="text-center md:text-start text-[40px] md:text-[70px] leading-[45px] md:leading-[69px] font-Rale font-semibold text-secondary">
          Your Business,
        </h1>
        <h2 className=" text-center md:text-start text-[40px] md:text-[70px] leading-[45px] md:leading-[69px] font-Rale font-regular text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Simplified.
        </h2>
        <p className="text-center md:text-start w-full md:w-[95%] mt-4 font-Rale text-[16px] md:text-[20px] leading-[30px]">
          ReliAssist is your go-to partner for dependable, expert virtual
          assistant services, designed to streamline your daily operations so
          you can focus on growth.
        </p>

        <div className="mt-6">
          <button className="py-2 md:py-3 px-6 md:px-12 text-white bg-secondary hover:bg-black hover:outline-black font-bold font-Rale outline outline-1 outline-primary rounded-md">
            <Link to="/#Services">
              <span className="hidden md:block">Discover Our Services</span>
            </Link>
            <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
              <span className="md:hidden block">Request Talent</span>
            </a>
          </button>
        </div>
      </div>

      <div className="flex justify-center md:w-full md:basis-1/2">
        <img
          src={Tags}
          alt="hero"
          className="max-w-full h-auto w-[400px] md:w-[1000px] md:h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
