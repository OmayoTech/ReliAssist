import about2 from "../../src/assets/about2.png";

const AboutReli = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center h-[500px] md:h-[300px] md:px-[150px] md:gap-20 gap-10 px-4  md:mb-[20%] mb-[20%] ">
      <div className=" ">
        <h1 className="  font-bold text-[28px] md:text-[56px]  md:mb-[15px] mb-2 md:mt-10">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            ReliAssist
          </span>
        </h1>
        <p className="text-[14px] md:text-[20px] font-Regular ">
          ReliAssist was founded with a clear mission: To provide reliable,
          high-quality virtual assistance to businesses that want to optimize
          their time and grow without the stress of extra overhead. We’re
          dedicated to creating value by connecting you with skilled
          professionals who are invested in your success.
        </p>
      </div>
      <div >
        <img src={about2} alt="" className="w-[2000px]" />
      </div>
    </div>
  );
};

export default AboutReli;
