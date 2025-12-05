import {
  creative1,
  creative2,
  creative3,
  creative4,
  creative5,
  creative6,
} from "../assets";

const CreativeSupport = () => {
  return (
    <div className="md:mb-[12%] md:mt-0 mt-[-60%]">
      <h1 className="text-center font-bold text-[25px] md:text-[46px]   ">
        Creative{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Design
        </span>
      </h1>
      <div className="flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 grid-rows-3 md:gap-20 p-4  md:mt-20 mt-10 text-start">
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={creative1} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Graphics & Visuals Creation
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Eye-catching visuals tailored to reflect your brands
                  personality and engage your audience
                  <br />
                  across all platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={creative2} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Banner Design
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Custom designs for display ads, web headers, and promotional
                  content that grab attention.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={creative3} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Social Media Graphics
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Branded visuals optimized for Instagram, Facebook, LinkedIn,
                  and more.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={creative4} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Flyers & Brochures
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Professionally designed print and digital materials to support
                  your marketing campaigns
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={creative5} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Logo Creation
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Memorable logos that represent your identity and set you
                  apart.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={creative6} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Visual Branding
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Consistent design systems that strenghten your brand's
                  presence and recognition.
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
          With ReliAssist creative design support, your brand always looks its
          best-professional, cohesive, and ready to stand out in any crowd.
        </p>
      </div>
    </div>
  );
};

export default CreativeSupport;
