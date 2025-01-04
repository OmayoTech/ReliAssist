import trusted from "../../src/assets/trusted.png";
import support from "../../src/assets/support.png";
import effortless from "../../src/assets/effortless.png";
import assistance from "../../src/assets/assistance.png";
import Ornament from "../../src/assets/Ornament.png";

const Support = () => {
  return (
    <div className="h-[1100px] md:h-[700px] bg-[#310252] py-14 mb-[8%]">
      <div className="absolute md:mt-[-5%] mt-[-13%]">
        <img src={Ornament} alt="" className="w-[70px] md:w-[150px] " />
      </div>
      <h1 className="text-white font-Rale font-bold text-[20px] md:text-[32px] text-center mb-[15px]">
        Why ReliAssist?
      </h1>
      <p className="text-white font-Regular font-Rale text-[14px] md:text-[18px] text-center">
        Your Partner in Productivity
      </p>
      <div className="gap-4 p-4 px-4 md:px-[150px] mt-[2%] ">
        <div className="flex-row  md:flex w-full gap-4 mb-4 ">
          <div className="bg-[#F9F0FF]   p-6 rounded-lg w-[350px] md:w-[390px]  h-[214px] mb-4 md:mb-0 ">
            <img src={trusted} alt="" className="mb-2" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Trusted and Vetted Talent
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              All of our virtual assistants are carefully screened to ensure
              they bring value and professionalism to your business.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-[350px] md:w-[786px]   h-[214px]">
            <img src={support} alt="" className="mb-2" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Customized Support
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Every business is unique. We tailor our services to fit your
              needs, so you get the precise help you’re looking for.
            </p>
          </div>
        </div>
        <div className="flex-row md:flex w-full gap-4 mb-4">
          <div className="bg-[#F9F0FF]  p-6 rounded-lg  w-[350px] md:w-[588px] h-[218px] mb-4">
            <img src={effortless} alt="" className="mb-2" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Effortless Management
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Our intuitive client dashboard keeps you in control of tasks,
              deadlines, and communications with your assistant—all in one
              place.
            </p>
          </div>
          <div className="bg-[#F9F0FF]  p-6 rounded-lg  w-[350px] md:w-[588px] h-[218px]">
            <img src={assistance} alt="" className="mb-2" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Comprehensive Assistance
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              From administration to specialized skills, ReliAssist covers a
              wide range of services designed to meet the demands of modern
              businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
