import { Intro_Image, Line1 } from "../assets/";
const Intro = () => {
  return (
    <div className="flex-col-reverse flex md:flex-row gap-10 justify-evenly px-4 md:px-[200px] mt-[8%] mb-[14%]">
      <div className="w-full md:w-[40%] flex justify-center">
        <img src={Intro_Image} alt="hero" className="w-[300px] md:w-[500px]" />
      </div>
      <div className="w-full md:w-[60%] py-10 md:py-20 mb-10 ">
        <h1 className="mt-4 font-Rale font-semibold text-[20px] md:text-[35px]">
          A Reliable Partner for Your Business
        </h1>
        <div className="flex items-center gap-[50px]">
          <h2 className=" font-Rale font-semibold text-[20px] md:text-[35px]">
            Success
          </h2>
          <span>
            <img src={Line1} alt="" className="w-[200px] md:w-auto" />
          </span>
        </div>

        <p className="font-Rale font-Regular text-[14px] leading-[25px] md:text-[16.9px] text-justify mt-4">
          We understand that running a business comes with countless
          responsibilities, many of which pull you away from your core goals.
          That’s where ReliAssist comes in. We specialise in providing skilled
          virtual assistants ready to take on the tasks that keep your business
          moving, freeing you to focus on what you do best. Whether you need
          ongoing support or help with a specific project, we’ve got you
          covered.
        </p>
      </div>
    </div>
  );
};

export default Intro;
