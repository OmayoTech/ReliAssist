import Rectangle from "../../src/assets/Rectangle.png";
import spiral from "../../src/assets/spiral.png";

const About = () => {
  return (
    <div className="h-[1100px] md:h-[800px] xl:h-[900px] mb-[12%]">
      <h1 className=" font-Rale font-bold text-[20px] md:text-[32px] text-center mb-[15px]">
        How ReliAssist works
      </h1>
      <p className=" font-Regular font-Rale text-[14px] md:text-[18px] text-center">
        A Simple Process, Extraordinary Results.
      </p>
      <div className="mt-[-20%] md:mt-[-10%] ">
        <div>
          <img src={Rectangle} alt="" className="w-[50px] md:w-[100px]" />
        </div>
      </div>
      <div className="flex-row md:flex md:justify-evenly   md:px-[110px] w-full ">
        <div className="md:w-[360px] mb-6 px-10">
          <h1 className="font-Rale font-bold text-[25px] md:text-[40px]  mb-2">
            01
          </h1>
          <p className="font-Rale font-bold  md:text-[18px] mb-4">
            Consultation
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
            We start with a consultation to understand your unique needs and
            goals.
          </p>
        </div>
        <div className="flex items-center  hidden md:block">
          <img src={spiral} alt="" className="w-[99px] h-[89px] " />
        </div>
        <div className="md:w-[360px] mb-6 px-10">
          <h1 className="font-Rale font-bold text-[25px] md:text-[40px]  mb-2">
            02
          </h1>
          <p className="font-Rale font-bold md:text-[18px]  mb-4">
            VA Matching
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px] ">
            We’ll match you with a virtual assistant whose skills align with
            your requirements..
          </p>
        </div>
        <div className="flex items-center hidden md:block">
          <img src={spiral} alt="" className="w-[89px] h-[89px]" />
        </div>
        <div className="md:w-[360px] mb-6 px-10">
          <h1 className="font-Rale font-bold text-[25px] md:text-[40px]  mb-2">
            03
          </h1>
          <p className="font-Rale font-bold md:text-[18px]  mb-4">
            Onboarding & Meet your Team
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
            Meet your ReliAssist Pro during our onboarding call. Our team will
            help with tech setup, workflow management tools, and more.
          </p>
        </div>
      </div>
      <div className="flex-row md:flex justify-evenly  md:px-[100px] w-full mt-[4%] ">
        <div className="md:w-[360px] mb-6 px-10">
          <h1 className="font-Rale font-bold text-[25px] md:text-[40px]  mb-2">
            04
          </h1>
          <p className="font-Rale font-bold md:text-[18px]  mb-2">
            Task Management
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
            Easily assign and monitor tasks via your personal dashboard, where
            you can communicate directly with your VA.
          </p>
        </div>
        <div className="flex items-center hidden md:block">
          <img src={spiral} alt="" className="w-[89px] h-[89px] " />
        </div>
        <div className="md:w-[360px] mb-6 px-10">
          <h1 className="font-Rale font-bold text-[25px] md:text-[40px]  mb-2">
            05
          </h1>
          <p className="font-Rale font-bold md:text-[18px]  mb-2">
            Ongoing Support
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
            Our support doesn’t stop once you’re set up. We’re here to ensure
            your experience is smooth and successful.
          </p>
        </div>
        <div className="flex items-center hidden md:block">
          <img src={spiral} alt="" className="w-[89px] h-[89px] " />
        </div>
        <div className="md:w-[360px] px-6"></div>
      </div>
      <div className="flex justify-center">
        <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
          <button className="md:py-3 py-2 md:px-12 px-6 text-white mt-16 bg-secondary hover:bg-black hover:outline-black text-[16px] font-bold font-Rale outline outline-1 outline-primary rounded-md">
            Get Started Today
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
