import { special1, special2, special3, special4, special5 } from "../assets";

const TechnicalSupport = () => {
  return (
    <div className="md:mb-[12%] md:mt-0 mt-[-60%]">
      <h1 className="text-center font-bold text-[25px] md:text-[46px]   ">
        Specialized Project{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Assistance
        </span>
      </h1>
      <div className="flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 grid-rows-3 md:gap-20 p-4  md:mt-20 mt-10 text-start">
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={special1} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Research & Analysis
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Thorough research on industry trends, competitors, and market
                  insights to support informed decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={special2} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Marketing Campaign Support
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Assistance in executing and managing marketing campaigns,
                  ensuring they run smoothly and reach the intended audience.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={special3} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Event Planning & Coordination
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Help with organizing and coordinating events, from logistics
                  to post-event follow-up.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={special4} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Project Management
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Dedicated project management to keep tasks on track, resources
                  allocated, and timelines met.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={special5} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Customized Solutions
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Unique projects require unique solutions. We work with you to
                  define the support needed and execute it precisely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[5%]">
        <h1 className="text-center font-bold text-[25px] md:text-[46px]  mb-[15px]">
          Benefits to Your{""}
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            Business
          </span>
        </h1>
        <p className="text-[15px] md:text-[24px] font-Regular text-center md:px-[350px] px-4">
          Our project-based support allows you to get expert help precisely when
          and where you need it, keeping your projects organized, efficient, and
          successful.
        </p>
      </div>
    </div>
  );
};

export default TechnicalSupport;
