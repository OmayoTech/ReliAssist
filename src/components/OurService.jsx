import Arrow_up from "../../src/assets/Arrow_up.png";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <div id="Services" className=" py-14 mb-[8%] h-[1550]">
      <h1 className=" font-Rale font-semibold text-[20px] md:text-[32px] text-center mb-[15px]">
        Our Services
      </h1>

      <div className=" gap-4 p-4 px-4 md:px-[150px] mt-[2%]">
        <div className="flex-row md:flex  w-full gap-4 mb-4 md:mb-0">
          <div className=" rounded-lg mb-4 md:w-[680px] w-full h-[300px]  md:h-[460px]">
            <div className="flex items-end w-full bg-cover    bg-[url('/src/assets/service_1.png')] bg-no-repeat text-white  text-start p-6 rounded-lg md:w-[680px] w-[350px] h-[300px]  md:h-[460px]">
              <div className="text-start ">
                <Link to="/customer" className="flex items-center">
                  <h1 className="font-Rale font-semibold text-[16px] md:text-[36px]  mb-2 cursor-pointer">
                    Customer Service support
                  </h1>
                  <span className="ml-[10px]">
                    <img src={Arrow_up} alt="" className="w-[30px] md:[50px]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-lg md:w-[505px] w-full h-[300px]   md:h-[460px]">
            <div className="flex items-end w-full   bg-cover  bg-[url('/src/assets/service_2.png')] bg-no-repeat text-white   text-start p-6 rounded-lg md:w-[505px] w-[350px] h-[300px]   md:h-[460px]">
              <div className="text-start">
                <Link to="/tech" className="flex items-center">
                  <h1 className="font-Rale font-semibold text-[16px] md:text-[36px]  mb-2 cursor-pointer">
                    Technical support
                  </h1>
                  <span className="ml-[10px]">
                    <img src={Arrow_up} alt="" className="w-[30px] md:[50px]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full gap-4">
          <div className=" rounded-lg md:w-[1200px] w-full cursor-pointer">
            <div className="flex items-end  bg-cover w-full   bg-[url('/src/assets/service_3.png')] bg-no-repeat text-white  p-6 rounded-lg w-[350px] md:w-[1200px] h-[300px] md:h-[460px] mb-4 cursor-pointer">
              <div className="text-start ">
                <Link to="/social" className="flex items-center">
                  <h1 className="font-Rale font-semibold text-[16px] md:text-[36px]  mb-2 cursor-pointer">
                    Social Media & Content Management
                  </h1>
                  <span className="ml-[5px] md:ml-[10px]">
                    <img src={Arrow_up} alt="" className="w-[30px] md:[50px]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row md:flex w-full gap-4">
          <div className=" rounded-lg mb-4 md:w-[505px] w-full h-[300px]   md:h-[460px]">
            <div className="flex items-end bg-cover   bg-[url('/src/assets/service_4.png')] bg-no-repeat text-white  p-6 rounded-lg w-full md:w-[505px] w-[350px] h-[300px]   md:h-[460px]">
              <div className="text-start ">
                <Link to="/admin" className="flex items-center">
                  <h1 className="font-Rale font-semibold text-[16px] md:text-[36px]  mb-2 cursor-pointer">
                    Administrative Support
                  </h1>
                  <span className="ml-[10px]">
                    <img src={Arrow_up} alt="" className="w-[30px] md:[50px]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-lg md:w-[680px] w-full h-[300px] md:h-[460px]">
            <div className="flex items-end bg-cover   bg-[url('/src/assets/service_5.png')] bg-no-repeat text-white  p-6 rounded-lg w-full  md:w-[680px] w-[350px] h-[300px] md:h-[460px]">
              <div className="text-start ">
                <Link to="/technical" className="flex items-center">
                  <h1 className="font-Rale font-semibold text-[16px] md:text-[36px]  mb-2 cursor-pointer">
                    Specialized Project Assistance
                  </h1>
                  <span className="ml-[10px]">
                    <img src={Arrow_up} alt="" className="w-[30px] md:[50px]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
