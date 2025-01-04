import app from "../../src/assets/app.png";
import Ellipse from "../../src/assets/Ellipse.png";
import left_arrow from "../../src/assets/left_arrow.png";
import right_arrow from "../../src/assets/right_arrow.png";
import spiral from "../../src/assets/spiral.png";

const Testimony = () => {
  return (
    <div className="h-[600px] md:h-[700px] bg-[#FDF9FF] py-20 px-[30px]  md:px-[150px]">
      <div className="absolute left-0">
        <img src={spiral} alt="" className="w-[40px] md:w-[100px]" />
      </div>
      <h1 className=" font-Rale font-bold text-[20px] md:text-[32px] text-center mb-[15px]">
        What our clients are saying
      </h1>
      <p className=" font-Regular font-Rale text-[14px] md:text-[18px] text-center">
        Trusted by Businesses Just Like Yours
      </p>
      <div className=" bg-[#EDE9F1]  md:px-[120px] p-6 rounded-lg h-[300px] md:h-[274px] mt-8">
        <div className="flex">
          <div>
            <img src={app} alt="" />
          </div>
          <div>
            <h1 className="font-Rale font-Medium text-[20px] md:text-[32px] ">
              ReliAssist made it incredibly easy to find a virtual assistant who
              has been a game-changer for my business. Highly recommend!
            </h1>
          </div>
        </div>
        <div className="flex gap-4 mt-6 md:px-[20px] items-center">
          <div>
            <img src={Ellipse} alt="" />
          </div>
          <div>
            <p className="font-Rale font-Regular text-[14px] md:text-[16px] ">
              Obiajulu Anayo
            </p>
            <p className="font-Rale font-Light text-[12px] md:text-[14px] ">
              CEO Micrographia Solutions
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-6 gap-4 justify-center">
        <img src={left_arrow} alt="" className="w-[40px] md:w-[60px]" />
        <img src={right_arrow} alt="" className="w-[40px] md:w-[60px]" />
      </div>
    </div>
  );
};

export default Testimony;
