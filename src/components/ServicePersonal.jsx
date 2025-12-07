import Mask from "../../src/assets/Mask.png";
import right_fit from "../../src/assets/right_fit.png";

const ServicePersonal = () => {
  return (
    <div className="h-[670px] md:h-[700px] bg-[#FDF9FF] py-14 md:mb-10  mb-[12%] md:mt-[4%] mt-[14%]">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img src={Mask} alt="" className="w-[40px] md:w-[150px] " />
      </div>
      <h1 className=" font-Rale font-bold text-[20px] md:text-[32px] text-center md:mb-[15px] mb-[30px]">
        Personalized Service for
        <br /> Every Business
      </h1>
      <div className="w-full flex-col-reverse flex px-4 md:flex-row md:items-center md:px-[200px] md:basis-1/2 md:mt-[8%] mt-[3%]">
        <div className="basis-1/2">
          <img
            src={right_fit}
            alt=""
            className="w-full md:w-[400px] md:h-[400px] "
          />
        </div>
        <div className="basis-1/2">
          <h1 className="font-Rale font-bold text-[20px] md:text-start md:text-[32px] text-center md:mb-2 mb-4 mt-4 ">
            Finding the Right Fit for You
          </h1>
          <p className="md:text-start text-center font-Rale text-[16px] md:text-[20px] mb-6">
            We match you with the perfect VA for your needs, offering flexible
            hours, skills, and tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePersonal;
