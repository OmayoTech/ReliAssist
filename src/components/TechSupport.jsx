import basic from "../../src/assets/basic.png";
import setup from "../../src/assets/setup.png";
import system from "../../src/assets/system.png";
import user from "../../src/assets/user.png";
import data from "../../src/assets/data.png";
import ornament_sup from "../../src/assets/ornament_sup.png";

const TechSupport = () => {
  return (
    <div className="h-[1350px] md:h-[899px] bg-[#310252] py-14 md:mb-[8%] mb-[18%] md:mt-[8%] mt-[18%]">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[150px] " />
      </div>
      <h1 className="text-white font-Rale font-bold text-[16px] md:text-[32px] text-center md:mt-[2%] md:mb-[3px] mb-[15px]">
        Our Technical Support
      </h1>
      <p className="text-white font-bold font-Rale text-[16px] md:text-[32px] text-center">
        Services Include:
      </p>
      <div className="gap-4 p-4 px-4 md:px-[150px] md:mt-[4%] mt-[2%] ">
        <div className="flex-row  md:flex w-full gap-4 mb-4 ">
          <div className="bg-[#F0FFFC]   p-6 rounded-lg w-full md:w-[384px] md:h-[263px]  h-[214px] mb-4 md:mb-0 ">
            <img src={basic} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Basic IT Troubleshooting
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Assistance with everyday tech issues, from software bugs to
              connectivity problems.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px] h-[214px] md:mb-0 mb-4">
            <img src={setup} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Software Setup & Configuration
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Initial setup and configuration of essential software tools,
              helping you optimize your tech stack.
            </p>
          </div>
          <div className="bg-[#FFF0FC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px]   h-[214px]">
            <img src={system} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              System & Software Updates
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Managing updates to keep your tools running efficiently and
              securely.
            </p>
          </div>
        </div>
        <div className="flex-row md:flex w-full gap-4 mb-4">
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px] mb-4">
            <img src={user} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              User Support & Training
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Guiding users on best practices for your software tools and
              helping them resolve issues independently.
            </p>
          </div>
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px]">
            <img src={data} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Data Backup & Recovery Assistance
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Ensuring your data is secure and providing recovery options in
              case of loss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSupport;
