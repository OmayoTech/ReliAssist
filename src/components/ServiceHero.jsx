import Stars from "../../src/assets/Stars.png";
import Rect from "../../src/assets/Rect.png";
import Service from "../../src/assets/Service.png";

const ServiceHero = () => {
  return (
    <div className="h-[800px] md:h-[1080px]  py-14 md:mb-[18%] mb-[2%] md:mt-[2%] mt-[4%]  ">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img
          src={Stars}
          alt=""
          className="w-[40px] md:w-[150px] md:h-[230px] "
        />
      </div>
      <div className="flex flex-col md:flex-row md:w-full md:items-center md:px-[160px] md:gap-10 md:justify-center  px-4 mt-10 md:mt-[7%]">
        <div className="flex flex-col items-center md:items-start  md:w-full py-10 md:py-20  md:basis-3/5">
          <h1 className="text-center md:text-start text-[40px] md:text-[72px] leading-[45px] md:leading-[79px] font-Rale font-semibold text-secondary">
            Virtual Assistance to Meet Every Business Need
          </h1>
        </div>
        <div className="flex justify-center md:w-full md:basis-1/2 ">
          <p className="md:text-start text-center text-[14px] md:text-[20px] font-Rale">
            No two businesses are the same, and we believe your support should
            reflect that. Our virtual assistants are skilled in a variety of
            areas, making it easy for you to get the help you need
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-end">
          <img src={Rect} alt="" className="w-[70px] md:w-[150px] mt-[4%]" />
        </div>
        <img src={Service} alt="" className="w-full h-[200px] md:h-full" />
      </div>
    </div>
  );
};

export default ServiceHero;
