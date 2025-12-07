import { support1, support2, support3, support4, support5 } from "../assets";

const CustomerSupport = () => {
  return (
    <div className="md:mb-[12%] md:mt-0 mt-[-60%]">
      <h1 className="text-center font-bold text-[25px] md:text-[46px]   ">
        Customer Service{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Support
        </span>
      </h1>
      <div className="flex items-center justify-center px-8">
        <div className="grid md:grid-cols-2 grid-rows-3 md:gap-20 p-4  md:mt-20 mt-10 text-start ">
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10 ">
            <div className="flex items-center  gap-4 mb-4">
              <img src={support1} className="md:w-[60px] w-[50px] " alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Customer Inquiries & Help Desk Management
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Prompt, courteous responses to customer questions, ensuring
                  they feel valued and
                  <br /> informed.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={support2} className="w-[60px] w-[50px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Order Processing & Tracking Assistance
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Managing orders, tracking updates, and handling order-related
                  questions to enhance customer convenience.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={support3} className="w-[60px] w-[50px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Complaint Resolution
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Handling issues professionally and efficiently to maintain
                  trust and satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={support4} className="w-[60px] w-[50px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Customer Feedback Collection
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Gathering feedback to help you continuously improve products
                  and services.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={support5} className="w-[60px] w-[50px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Live Chat Support
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Real-time support for customers needing quick assistance,
                  reducing wait times and enhancing satisfaction.
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
          With a dedicated ReliAssist customer service representative, you
          ensure your customers feel heard, valued, and supported, which fosters
          loyalty and drives repeat business.
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
