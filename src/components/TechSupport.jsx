import {
  technical1,
  technical2,
  technical3,
  technical4,
  technical5,
} from "../assets";

const TechSupport = () => {
  return (
    <div className="md:mb-[12%] md:mt-0 mt-[-60%]">
      <h1 className="text-center font-bold text-[25px] md:text-[46px]   ">
        Technical{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Support
        </span>
      </h1>
      <div className="flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 grid-rows-3 md:gap-20 p-4  md:mt-20 mt-10 text-start">
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={technical1} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  UI/UX Design
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Designing intuitive and visually appealing user experiences
                  that drive engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={technical2} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Web design
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Building responsive and modern websites tailored to your
                  business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={technical3} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  E-commerce Sites
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Setup and customization of online stores for seamless customer
                  shopping experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={technical4} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Site Optimization
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Improving site performance, speed, and SEO for better
                  visibility and usability
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={technical5} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  CMS Solutions
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Setup, management, and support for content management systems
                  like WordPress, Shopify, and more
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
          With ReliAssist technical support, your digital infrastructure remains
          efficient, secure, and scalable helping you focus on growth while we
          handle the tech.
        </p>
      </div>
    </div>
  );
};

export default TechSupport;
