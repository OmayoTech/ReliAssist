import { manage1, manage2, manage3, manage4 } from "../assets";

const SocialSupport = () => {
  return (
    <div className="md:mb-[12%] md:mt-0 mt-[-60%]">
      <h1 className="text-center font-bold text-[25px] md:text-[46px]   ">
        Social Media & Content{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Management
        </span>
      </h1>
      <div className="flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 grid-rows-2 md:gap-20 md:p-4 p-0 px-10 md:mt-20 mt-10 text-start">
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={manage1} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Content Creation
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Professional blog posts, articles, and other written content
                  tailored to your brand and audience.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={manage2} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Social Media Scheduling & Posting
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Consistent scheduling and posting across platforms to keep
                  your brand active and engaging.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={manage3} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Audience Engagement
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Engaging with comments, messages, and mentions to build
                  relationships with your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black">
            <div className="flex items-center  gap-4 mb-4">
              <img src={manage4} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Analytics Tracking
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Regular performance reports that help you understand what
                  content resonates best and where to focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-[5%] mt-[15%]">
        <h1 className="text-center font-bold text-[25px] md:text-[46px]  mb-[15px]">
          Benefits to Your{""}
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            Business
          </span>
        </h1>
        <p className="text-[15px] md:text-[24px] font-Regular text-center md:px-[350px] px-4">
          We help you connect with your audience, boost your brand’s visibility,
          and make data-driven decisions to refine your content strategy, saving
          you time and maximizing your online impact.
        </p>
      </div>
    </div>
  );
};

export default SocialSupport;
