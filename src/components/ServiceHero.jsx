import { serviceNew } from "../assets";

const ServiceHero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:w-full md:px-[140px] px-4 mt-16 md:mt-20 ">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start text-[10px] md:py-3 py-2 md:px-4 px-5  bg-[#F9EDFE] rounded-[50px] md:text-[14px]  font-san font-Regular ">
          Increasing your productivity at your convenience!
        </p>
        <h1 className=" text-center font-bold  text-[40px] md:text-[60px] leading-[45px] md:leading-[69px] font-san  mt-8">
          <span className="mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            Virtual Assistance
          </span>
          to Meet Every
          <br />
          Business Need
        </h1>
        <p className="text-center font-Regular  w-full md:w-[95%] mt-8 font-san text-[16px] md:text-[20px] leading-[30px]">
          No two businesses are the same, and we believe your support should
          reflect that. Our virtual assistants are skilled in a variety of
          areas, making it easy for you to get the help you need
        </p>
        <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
          <button className="py-2 md:py-3 px-6 md:px-12 text-white text-[16px] bg-secondary hover:bg-black hover:outline-black font-bold font-san outline outline-1 outline-primary rounded-[50px] mt-8">
            Send a Request
          </button>
        </a>
        <img
          src={serviceNew}
          alt=""
          className="mt-10 w-[1096px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ServiceHero;
