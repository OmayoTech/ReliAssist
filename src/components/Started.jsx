import grow from "../../src/assets/grow.png";
// import { HashLink as Link } from "react-router-hash-link";

const Started = () => {
  return (
    <div className="h-[600px] md:h-[450px]  py-20 md:px-[150px] px-4 bg-[#2A0B3B]">
      <div className="md:flex items-center bg-[#7B2AE5] md:px-[120px] p-6 rounded-t-lg md:h-[300px] h-[412px] m mt-8">
        <div className="flex-row md:flex items-center">
          <div className="md:w-[50%]  mb-10">
            <h1 className="font-san font-bold text-white text-[25px] md:text-[32px]">
              Ready to Grow?
            </h1>
            <p className="font-Regular font-san text-white text-[16px] md:text-[18px] mb-6">
              Get matched with a skilled VA in 12 hours, cut your workload by
              50% instantly and save 80%+ in staff hiring.
            </p>

            <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
              <button className="md:py-3 py-2 md:px-12 px-8 text-black bg-white hover:text-white hover:hover:bg-[#6A0DAD] hover:outline-black text-[16px] font-bold font-san  rounded-[50px]">
                Talk To Us
              </button>
            </a>
          </div>
          <div className="md:w-[50%] ">
            <img src={grow} alt="" className="md:h-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
