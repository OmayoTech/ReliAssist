import hero_about from "../../src/assets/hero_about.png";

const AdminBenefit = () => {
  return (
    <div className="md:px-[140px] rounded-lg md:mb-0 mb-[18%]">
      <div className="bg-[#EDE9F1] rounded-lg flex flex-col md:flex-row md:items-center md:w-full md:px-[90px] py-20 gap-10 justify-evenly px-4 mt-10 md:mt-20">
        <div className="md:basis-3/5">
          <img
            src={hero_about}
            alt=""
            className="max-w-full h-auto w-[400px] md:w-[400px] md:h-[400px]"
          />
        </div>
        <div className=" md:w-full md:basis-1/2">
          <h1 className="text-center md:text-start text-[20px] md:text-[32px] leading-[45px] md:leading-[69px] font-Rale font-semibold">
            Benefit to Your Business
          </h1>
          <p className="text-center md:text-start w-full  mt-4 font-Rale text-[16px] md:text-[18px]">
            With ReliAssist’s administrative support, you’ll have more time to
            focus on high-priority tasks while we handle the essential
            administrative responsibilities that keep your business running
            smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminBenefit;
