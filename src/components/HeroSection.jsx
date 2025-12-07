// import { HashLink as Link } from "react-router-hash-link";
import { new_hero, Ichota, Micro, BeyondTheory } from "../assets";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center md:w-full md:px-[140px] px-4 mt-16 md:mt-20 ">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start text-[10px] md:py-3 py-2 md:px-4 px-5  bg-[#F9EDFE] rounded-[50px] md:text-[14px]  font-san font-Regular ">
          Increasing your productivity at your convenience!
        </p>
        <h1 className=" text-center font-bold  text-[40px] md:text-[60px] leading-[45px] md:leading-[69px] font-san  mt-8">
          Matched with
          <span className="ml-4  text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            VA and Onboarding
          </span>
          <br />
          Delivered in 12 Hours
        </h1>
        <p className="text-center font-Regular  w-full md:w-[95%] mt-8 font-san text-[16px] md:text-[20px] leading-[30px]">
          Increase productivity, lower stress, and focus on what truly matters.
          Let us handle the rest.
        </p>
        <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
          <button className="py-2 md:py-3 px-6 md:px-12 text-white text-[16px] bg-secondary hover:bg-black hover:outline-black font-bold font-san outline outline-1 outline-primary rounded-[50px] mt-8">
            Hire A Virtual Assistant
          </button>
        </a>
        <img
          src={new_hero}
          alt=""
          className="mt-10 w-[1096px] cursor-pointer"
        />
        <p className="text-center font-Regular  w-full md:w-[95%] md:mt-8 mt-[30%] font-san text-[16px] md:text-[20px] leading-[30px]">
          Trusted By
        </p>
        <div className="flex px-4 md:gap-10 gap-2 mt-4 md:mt-0">
          <img src={Ichota} alt="" className="w-[80px] md:w-full" />
          <img src={Micro} alt="" className="w-[80px] md:w-full" />
          <img src={BeyondTheory} alt="" className="w-[80px] md:w-full" />
        </div>

        {/* <div className="mt-6">
          <button className="py-2 md:py-3 px-6 md:px-12 text-white bg-secondary hover:bg-black hover:outline-black font-bold font-san outline outline-1 outline-primary rounded-md">
            <Link to="/#Services">
              <span className="hidden md:block">Discover Our Services</span>
            </Link>
            <a href="https://zfrmz.com/aNdobNeWQRV0uvBlwAqU">
              <span className="md:hidden block">Request Talent</span>
            </a>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
