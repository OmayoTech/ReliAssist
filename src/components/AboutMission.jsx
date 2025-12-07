import mission1 from "../../src/assets/mission1.png";

const AboutMission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-[1000px] md:h-[300px] md:px-[150px] px-4 gap-[20px] mb-[70%] md:mb-[20%] ">
      <div className="">
        <div className=" h-[279px] bg-[#08848A] rounded-[20px] mb-[20px] md:px-[30px] px-4 py-10  ">
          <h1 className="md:w-[24%] w-[45%] bg-[#2C8E91]  font-medium text-white text-[18px] md:text-[22px] rounded-[20px] px-6 py-2 mb-10 ">
            Our Mission
          </h1>
          <p className="text-[18px] md:text-[22px] text-white font-Regular ">
            To empower businesses of all sizes with seamless, dependable virtual
            assistance that simplifies day-to-day operations.
          </p>
        </div>
        <div className="  h-[279px] bg-[#370859] rounded-[20px] md:px-[30px] px-4 py-10 ">
          <h1 className="bg-[#693587] md:w-[22%] w-[43%] text-white  font-medium text-[18px] md:text-[22px] rounded-[20px] px-6 py-2 mb-10 ">
            Our Vision
          </h1>
          <p className="text-[18px] md:text-[22px] text-white font-regular ">
            To become a global leader in virtual assistant outsourcing by
            delivering high-quality, reliable, and cost-effective solutions
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between md:w-[668px] w-[360px] md:h-[580px]  h-[550px]  rounded-[20px] bg-[#2F234F] md:px-[30px] px-4 py-10  ">
        <div>
          <h1 className="w-full  font-medium text-white text-[20px] md:text-[22px]  mb-10">
            Lighten Your Workload
          </h1>
          <p className="text-[18px] md:text-[22px] text-white font-regular ">
            Take the first step toward reclaiming your time and simplifying your
            workflow. Connect with us and find a reliable virtual assistant
            tailored to meet your needs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <img src={mission1} alt="" className="w-[285px]" />
          <button className="absolute md:mt-[10%] mt-[30%] md:py-3  py-2 md:px-12 px-8  bg-white hover:text-white hover:bg-[#6A0DAD] hover:outline-black text-[16px] font-medium font-san   rounded-[50px] ">
            <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
              <li className="list-none font-san text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)] hover:text-white">
                Contact Us
              </li>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
