import value1 from "../../src/assets/value1.svg";
import value2 from "../../src/assets/value2.svg";
import value3 from "../../src/assets/value3.svg";

const AboutValues = () => {
  return (
    <div className="h-[1000px] md:h-[650px] bg-[#2A0B3B] py-10 px-4 md:px-[100px] mt-10 md:mt-0">
      <div className="  mt-6 ">
        <div>
          <h1 className="  font-bold text-white text-[28px] md:text-[56px]  mb-[15px]">
            Our{""}
            <span className="ml-2 text-blue">Values</span>
          </h1>
          <p className="text-[14px] md:text-[20px] font-Regular text-white md:mb-10 mb-10">
            At ReliAssist, we understand that managing daily tasks can be
            overwhelming. Our dedicated virtual assistants are here to help you
            stay organized, boost productivity, and focus on what truly matters.
            Whether you're a busy professional, entrepreneur, or business owner,
            we provide tailored support to help you achieve your goals
            effortlessly.
          </p>
        </div>
        <div className="flex-row  md:flex justify-between w-full ">
          <div className="bg-[#330C49]  p-6 rounded-lg w-full md:w-[414px] md:h-[226px]   h-[214px] mb-4">
            <img src={value1} alt="" className="mb-6" />
            <p className="font-san font-bold text-white text-[16px] md:text-[18px] mb-4">
              Integrity
            </p>
            <p className="font-san font-Regular text-white text-[16px] md:text-[18px]">
              Our commitment to honesty and reliability underpins everything we
              do.
            </p>
          </div>
          <div className="bg-[#330C49]  p-6 rounded-lg  w-full md:w-[414px] md:h-[226px]  h-[218px] mb-4">
            <img src={value2} alt="" className="mb-6" />
            <p className="font-san font-bold text-white text-[16px] md:text-[18px] mb-4 ">
              Flexibility
            </p>
            <p className="font-san font-Regular text-white text-[16px] md:text-[18px]">
              We tailor our services to your unique needs and adjust as your
              business evolves.
            </p>
          </div>
          <div className="bg-[#330C49]  p-6 rounded-lg  w-full md:w-[414px] md:h-[226px]  h-[218px]">
            <img src={value3} alt="" className="mb-6" />
            <p className="font-san font-bold text-white text-[16px] md:text-[18px] mb-4">
              Excellence
            </p>
            <p className="font-san font-Regular text-white text-[16px] md:text-[18px]">
              We go above and beyond to provide high-quality, consistent
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
