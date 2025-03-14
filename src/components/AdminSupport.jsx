import calendar from "../../src/assets/calendar.png";
import email from "../../src/assets/email.png";
import entry from "../../src/assets/entry.png";
import travel from "../../src/assets/travel.png";
import expense from "../../src/assets/expense.png";
import ornament_sup from "../../src/assets/ornament_sup.png";

const AdminSupport = () => {
  return (
    <div className="h-[1350px] md:h-[899px] bg-[#310252] py-14 md:mb-[8%] mb-[18%] md:mt-[8%] mt-[18%]">
      <div className="absolute md:mt-[-3%] mt-[-13%]">
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[150px] " />
      </div>
      <h1 className="text-white font-Rale font-bold text-[16px] md:text-[32px] text-center md:mt-[2%] md:mb-[3px] mb-[15px]">
        Our Administrative Support
      </h1>
      <p className="text-white font-bold font-Rale text-[16px] md:text-[32px] text-center">
        Services Include:
      </p>
      <div className="gap-4 p-4 px-4 md:px-[150px] md:mt-[4%] mt-[2%] ">
        <div className="flex-row  md:flex w-full gap-4 mb-4 ">
          <div className="bg-[#F0FFFC]   p-6 rounded-lg w-full md:w-[384px] md:h-[263px]  h-[214px] mb-4 md:mb-0 ">
            <img src={calendar} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Scheduling & Calendar Management
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Keep your appointments, meetings, and deadlines organized so
              nothing falls through the cracks.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px] h-[214px] md:mb-0 mb-4">
            <img src={email} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Email Management
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Organize, prioritize, and respond to emails promptly, ensuring
              efficient communication.
            </p>
          </div>
          <div className="bg-[#F0FFFC]  p-6 rounded-lg w-full md:w-[384px] md:h-[263px]   h-[214px]">
            <img src={entry} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Data Entry & Document Preparation
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Accurate and efficient handling of data entry, file organization,
              and document formatting.
            </p>
          </div>
        </div>
        <div className="flex-row md:flex w-full gap-4 mb-4">
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px] mb-4">
            <img src={travel} alt="" className="mb-6 w-[36px] h-[36px]" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Travel Arrangements
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Booking flights, accommodations, and transportation, making travel
              planning hassle-free.
            </p>
          </div>
          <div className="bg-[#FFF0FC]  p-6 rounded-lg  w-full md:w-[588px] md:h-[263px] h-[218px]">
            <img src={expense} alt="" className="mb-6" />
            <p className="font-Rale font-bold text-[16px] md:text-[18px] mb-2">
              Expense Tracking
            </p>
            <p className="font-Rale font-Regular text-[16px] md:text-[18px]">
              Track expenses and receipts, making your financial records more
              manageable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
