import help from "../../src/assets/help.png";
import complaint from "../../src/assets/complaint.png";
import order from "../../src/assets/order.png";
import feedback from "../../src/assets/feedback.png";
import live from "../../src/assets/live.png";
import ornament_sup from "../../src/assets/ornament_sup.png";

const CustomerSupport = () => {
  return (
    <div className="h-[1350px] md:h-[899px] bg-[#310252] py-14 md:mb-[8%] mb-[18%] md:mt-[8%] mt-[18%]">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[150px] " />
      </div>
      <h1 className="text-white font-Rale font-bold text-[16px] md:text-[32px] text-center md:mt-[2%] md:mb-[3px] mb-[15px]">
        Our Customer Service Support
      </h1>
      <p className="text-white font-bold font-Rale text-[16px] md:text-[32px] text-center">
        Services Include:
      </p>
      <div className="gap-4 p-4 px-4 md:px-[150px] md:mt-[4%] mt-[2%] ">
        <div className="flex-row  md:flex w-full gap-4 mb-4 ">
          <div className="bg-[#F0FFFC]   p-6 rounded-lg w-full md:w-[384px] md:h-[263px]  h-[214px] mb-4 md:mb-0 ">
            <img src={help} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Customer Inquiries & Help Desk Management
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Prompt, courteous responses to customer questions, ensuring they
              feel valued and informed.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px] h-[214px] md:mb-0 mb-4">
            <img src={complaint} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Complaint Resolution
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Handling issues professionally and efficiently to maintain trust
              and satisfaction.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px]   h-[214px]">
            <img src={order} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Order Processing & Tracking Assistance
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Managing orders, tracking updates, and handling order-related
              questions to enhance customer convenience.
            </p>
          </div>
        </div>
        <div className="flex-row md:flex w-full gap-4 mb-4">
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px] mb-4">
            <img src={feedback} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Customer Feedback Collection
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Gathering feedback to help you continuously improve products and
              services.
            </p>
          </div>
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px]">
            <img src={live} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Live Chat Support
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Real-time support for customers needing quick assistance, reducing
              wait times and enhancing satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
