import content from "../../src/assets/content.png";
import media from "../../src/assets/media.png";
import audience from "../../src/assets/audience.png";
import tracking from "../../src/assets/tracking.png";
import visual from "../../src/assets/visual.png";
import ornament_sup from "../../src/assets/ornament_sup.png";

const SocialSupport = () => {
  return (
    <div className="h-[1350px] md:h-[899px] bg-[#310252] py-14 md:mb-[8%] mb-[18%] md:mt-[8%] mt-[18%]">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[150px] " />
      </div>
      <h1 className="text-white font-Rale font-bold text-[16px] md:text-[32px] text-center md:mt-[2%] md:mb-[3px] mb-[15px]">
        Our Content & Social Media
      </h1>
      <p className="text-white font-bold font-Rale text-[16px] md:text-[32px] text-center">
        Services Include:
      </p>
      <div className="gap-4 p-4 px-4 md:px-[150px] md:mt-[4%] mt-[2%] ">
        <div className="flex-row  md:flex w-full gap-4 mb-4 ">
          <div className="bg-[#F0FFFC]   p-6 rounded-lg w-full md:w-[384px] md:h-[263px]  h-[214px] mb-4 md:mb-0 ">
            <img src={content} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Content Creation
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Professional blog posts, articles, and other written content
              tailored to your brand and audience.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px] h-[214px] md:mb-0 mb-4">
            <img src={media} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Social Media Scheduling & Posting
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Consistent scheduling and posting across platforms to keep your
              brand active and engaging.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px]   h-[214px]">
            <img src={audience} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Audience Engagement
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Engaging with comments, messages, and mentions to build
              relationships with your audience.
            </p>
          </div>
        </div>
        <div className="flex-row md:flex w-full gap-4 mb-4">
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px] mb-4">
            <img src={tracking} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Analytics Tracking
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Regular performance reports that help you understand what content
              resonates best and where to focus.
            </p>
          </div>
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px]">
            <img src={visual} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Graphics & Visuals Creation
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Creating eye-catching visuals to enhance posts and capture your
              brand’s voice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSupport;
