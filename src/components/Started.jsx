import started from "../../src/assets/started.png";
import { HashLink as Link } from "react-router-hash-link";

const Started = () => {
  return (
    <div className="h-[800px] md:h-[700px]  py-20 md:px-[150px]">
      <h1 className=" font-Rale font-bold text-[20px] md:text-[32px] text-center mb-[15px]">
        Ready to Lighten Your Workload?
      </h1>
      <p className=" font-Regular font-Rale text-[14px] md:text-[18px] text-center">
        Trusted by Businesses Just Like Yours
      </p>
      <div className="md:flex items-center bg-[#FDF9FF] md:px-[120px] p-6 rounded-lg md:h-[386px] h[450px] mt-8">
        <div className="flex-row md:flex items-center">
          <div className="md:w-[50%]  mb-10">
            <h1 className="font-Rale font-bold text-[25px] md:text-[32px]">
              Get Started with
            </h1>
            <h2 className="font-Rale font-bold text-[25px] md:text-[32px] mb-6">
              ReliAssist Today
            </h2>
            <p className="font-Regular font-Rale text-[16px] md:text-[18px] mb-6">
              Take the first step toward reclaiming your time and simplifying
              your workflow. Connect with us and find a reliable virtual
              assistant tailored to meet your needs.
            </p>
            <Link to="/#Services">
              <button className="md:py-3 py-2 md:px-12 px-6 text-white bg-secondary hover:bg-black hover:outline-black text-[16px] font-bold font-Rale outline outline-1 outline-primary rounded-md">
                Discover our services
              </button>
            </Link>
          </div>
          <div className="md:w-[50%]">
            <img src={started} alt="" className="h-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
