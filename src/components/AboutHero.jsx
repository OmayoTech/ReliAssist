// import { HashLink as Link } from "react-router-hash-link";

import about1 from "../../src/assets/about1.png";

const AboutHero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:w-full md:px-[140px] px-4 mt-16 md:mt-20  ">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start text-[10px] md:py-3 py-2 md:px-4 px-5  bg-[#F9EDFE] rounded-[50px] md:text-[14px]  font-san font-Regular ">
          Increasing your productivity at your convenience!
        </p>
        <h1 className="text-center text-pretty font-bold  text-[23px] md:text-[74px] leading-[45px] md:leading-[69px] font-san  mt-8">
          Your Productivity
          <span className="ml-2  text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            Supercharged
          </span>
        </h1>
        <p className="text-center font-Regular  w-full md:w-[95%] md:mt-8 mt-2 font-san text-[16px] md:text-[20px] leading-[30px]">
          Drowning in tasks? We’ve got your back! Our expert virtual assistants
          handle the heavy lifting—so you can focus on growing your business
          while we take care of the rest.
        </p>
        <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
          <button className="py-2 md:py-3 px-6 md:px-12 text-white text-[16px] bg-secondary hover:bg-black hover:outline-black font-bold font-san outline outline-1 outline-primary rounded-[50px] mt-8">
            Send a Request
          </button>
        </a>
        <img
          src={about1}
          alt=""
          className="mt-10 rounded-[30px] h-[230px] md:h-full cursor-pointer"
        />

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

export default AboutHero;
