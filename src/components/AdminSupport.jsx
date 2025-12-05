import { admin1, admin2, admin3, admin4, admin5 } from "../assets";

const AdminSupport = () => {
  return (
    <div className="md:mb-[12%] md:mt-0 mt-[-60%]">
      <h1 className="text-center font-bold text-[25px] md:text-[46px]   ">
        Administrative{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Support
        </span>
      </h1>
      <div className="flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 grid-rows-3 md:gap-20 p-4  md:mt-20 mt-10 text-start">
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={admin1} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Scheduling & Calendar Management
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Keep your appointments, meetings, and deadlines Organized so
                  nothing falls through
                  <br /> the cracks.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={admin2} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Data Entry & Document Preparation
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Accurate and efficient handling of data entry, file
                  organization, and document formatting
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={admin3} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Email Management
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Organize, prioritize and respond to emails promptly, ensuring
                  efficient communication.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={admin4} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Travel Arrangements
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Booking flights, accommodations, and transportation, making
                  travel planning hassle-free
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[360px] h-[] md:h-[180px] border-2 border-white border-b-black md:mb-0 mb-10">
            <div className="flex items-center  gap-4 mb-4">
              <img src={admin5} className="w-[60px]" alt="" />
              <div>
                <h1 className="w-full  font-bold text-[14px] md:text-[24px]  mb-[4px]">
                  Research
                </h1>
                <p className="text-[12px] md:text-[18px] font-Regular">
                  Market Analysis, Data Collection, Trend Insights, Case Studies
                  and Strategic Reports
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
          With ReliAssist's Administrative support, you'll have more time to
          focus on high-priority tasks while we handle the essential
          administrative responsibilities that keep your business running
          smoothly.
        </p>
      </div>
    </div>
  );
};

export default AdminSupport;
