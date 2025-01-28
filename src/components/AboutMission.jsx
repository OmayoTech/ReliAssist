import Mask from "../../src/assets/Mask.png";
import Mission from "../../src/assets/Mission.png";
import vision from "../../src/assets/vision.png";

const AboutMission = () => {
  return (
    <div className="h-[1150px] md:h-[1080px] bg-[#FDF9FF] py-14 md:mb-[8%] mb-[12%] md:mt-[8%] mt-[14%]">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img src={Mask} alt="" className="w-[40px] md:w-[150px] " />
      </div>
      <h1 className=" font-Rale font-bold text-[20px] md:text-[32px] text-center md:mb-[15px] mb-[30px]">
        Our Mission & Vision
      </h1>
      <div className="w-full flex-col-reverse flex px-4 md:flex-row md:items-center md:px-[250px] md:basis-1/2 mt-[3%]">
        <div className="basis-1/2">
          <img
            src={Mission}
            alt=""
            className="w-full md:w-[400px] md:h-[400px] "
          />
        </div>
        <div className="basis-1/2">
          <h1 className="font-Rale font-bold text-[20px] md:text-start md:text-[32px] text-center text-secondary mb-2 ">
            Our <underline className="underline">Mission</underline>
          </h1>
          <p className="md:text-start text-center font-Rale text-[16px] md:text-[20px] mb-6">
            To empower businesses of all sizes with seamless, dependable virtual
            assistance that simplifies day-to-day operations.
          </p>
        </div>
      </div>
      <div className="w-full flex-col flex px-4 md:flex-row md:items-center md:px-[250px] basis-3/5 md:mt-[3%] mt-[10%]">
        <div className="basis-3/5">
          <h1 className="font-Rale font-bold text-[20px] md:text-start md:text-[32px] text-center text-secondary mb-2">
            Our <underline className="underline">Vision</underline>
          </h1>
          <p className="md:w-[80%] w-full md:text-start text-center font-Rale text-[16px] md:text-[20px] mb-6">
            To redefine business support by providing a trusted, flexible
            solution that adapts to our clients’ needs as they grow.
          </p>
        </div>
        <div className="">
          <img
            src={vision}
            alt=""
            className="w-full md:w-[400px] md:h-[400px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
