import Integrity from "../../src/assets/Integrity.png";
import Flexibility from "../../src/assets/Flexibility.png";
import Excellence from "../../src/assets/Excellence.png";

const AboutValues = () => {
  return (
    <div className="mb-[4%] px-4">
      <h1 className=" font-Rale font-bold text-[20px] md:text-[32px] text-center mb-[3%]">
        Our Values
      </h1>

      <div className="flex-row  md:flex justify-evenly w-full ">
        <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[336px] md:h-[263px]   h-[214px] mb-4">
          <img src={Integrity} alt="" className="mb-6" />
          <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-4">
            Integrity
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
            Our commitment to honesty and reliability underpins everything we
            do.
          </p>
        </div>
        <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[336px] md:h-[263px]  h-[218px] mb-4">
          <img src={Flexibility} alt="" className="mb-6" />
          <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-4 ">
            Flexibility
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
            We tailor our services to your unique needs and adjust as your
            business evolves.
          </p>
        </div>
        <div className="bg-[#F9F0FF]  p-6 rounded-lg  w-full md:w-[336px] md:h-[263px]  h-[218px]">
          <img src={Excellence} alt="" className="mb-6" />
          <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-4">
            Excellence
          </p>
          <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
            We go above and beyond to provide high-quality, consistent support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
