import started from "../../src/assets/started.png";
import { Link } from "react-router-dom";

const ServiceStarted = () => {
  return (
    <div className="h-[700px] md:h-[600px]  py-10 md:px-[150px]">
      <div className="md:flex items-center bg-[#310252] md:px-[60px] p-6 rounded-lg md:h-[386px] h[450px] mt-8">
        <div className="flex-row md:flex items-center">
          <div className="md:w-[50%]  mb-10">
            <h1 className="font-Rale font-bold text-white text-[25px] md:text-[32px] md:mb-4">
              Ready to Get Started?
            </h1>

            <p className="font-Regular text-white font-Rale text-[16px] md:text-[18px] mb-6">
              ReliAssist connects you with top-tier VAs for daily support or
              specialized tasks.
            </p>
            <Link to="/service">
              <button className="md:py-3 py-2 md:px-12 px-6 text-black bg-white hover:bg-black hover:text-white hover:outline-black text-[16px] font-bold font-Rale outline outline-1 outline-primary rounded-md">
                Discover our services
              </button>
            </Link>
          </div>
          <div className="md:w-[50%]">
            <img src={started} alt="" className="h-[250px] w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStarted;
