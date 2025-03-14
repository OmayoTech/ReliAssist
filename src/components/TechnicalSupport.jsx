import research from "../../src/assets/research.png";
import planning from "../../src/assets/planning.png";
import marketing from "../../src/assets/marketing.png";
import project from "../../src/assets/project.png";
import solution from "../../src/assets/solution.png";
import ornament_sup from "../../src/assets/ornament_sup.png";

const TechnicalSupport = () => {
  return (
    <div className="h-[1350px] md:h-[899px] bg-[#310252] py-14 md:mb-[8%] mb-[18%] md:mt-[8%] mt-[18%]">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[150px] " />
      </div>
      <h1 className="text-white font-Rale font-bold text-[16px] md:text-[32px] text-center md:mt-[2%] md:mb-[3px] mb-[15px]">
        Our Project Assistance
      </h1>
      <p className="text-white font-bold font-Rale text-[16px] md:text-[32px] text-center">
        Services Include:
      </p>
      <div className="gap-4 p-4 px-4 md:px-[150px] md:mt-[4%] mt-[2%] ">
        <div className="flex-row  md:flex w-full gap-4 mb-4 ">
          <div className="bg-[#F0FFFC]   p-6 rounded-lg w-full md:w-[384px] md:h-[263px]  h-[214px] mb-4 md:mb-0 ">
            <img src={research} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Research & Analysis
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Thorough research on industry trends, competitors, and market
              insights to support informed decision-making.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px] h-[214px] md:mb-0 mb-4">
            <img src={planning} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Event Planning & Coordination
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Help with organizing and coordinating events, from logistics to
              post-event follow-up.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px]   h-[214px]">
            <img src={marketing} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Marketing Campaign Support
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Assistance in executing and managing marketing campaigns, ensuring
              they run smoothly and reach the intended audience.
            </p>
          </div>
        </div>
        <div className="flex-row md:flex w-full gap-4 mb-4">
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px] mb-4">
            <img src={project} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Project Management
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Dedicated project management to keep tasks on track, resources
              allocated, and timelines met.
            </p>
          </div>
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px]">
            <img src={solution} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Customized Solutions
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Unique projects require unique solutions. We work with you to
              define the support needed and execute it precisely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;
