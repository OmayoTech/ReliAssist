import { check, check1 } from "../assets";

const PricingHero = () => {
  return (
    <div className="md:h-[1100px] h-[2600px]">
      <div className="md:h-[693px]  py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-center md:text-start text-[10px] md:py-3 py-2 md:px-6 px-5  bg-[#F9EDFE] rounded-[50px] md:text-[18px]  font-san font-Regular ">
            Affordable plans just for you
          </p>
          <h1 className=" text-center font-bold  text-[40px] md:text-[60px] leading-[45px] md:leading-[69px] font-san  mt-8">
            Find the
            <span className="ml-4 mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
              Perfect Plan
            </span>
            For Your Business
          </h1>
        </div>
        <div className="flex-row md:flex md:justify-evenly mt-10 px-4 ">
          <div className="h-[500px] md:h-[675px] md:w-[325px] w-full bg-white rounded-xl px-[20px] py-6 border border-gray-200 mb-4">
            <h1 className="md:text-start text-[18px] md:text-[25px] font-Rale font-medium">
              Essential Plan
            </h1>
            <p className="md:text-start text-[30px] md:text-[40px]  font-bold  mb-2">
              £200 /month
            </p>

            <div className="md:text-start text-[#666666] text-[14px] md:text-16px] font-Rale font-regular">
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-8%] mr-2" />
                <p className="mb-4">
                  Dedicated{" "}
                  <b className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
                    part-time assistant for 20 hours per month
                  </b>
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-8%] mr-2" />
                <p className="mb-4">
                  Change your assistant with zero extra cost
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Dedicated Account Manager</p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-8%] mr-2" />
                <p className="mb-4">
                  Adaptable solutions that flexibly adjust to your changing
                  requirements
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Convenient Timezone</p>
              </div>
              <a href="https://buy.stripe.com/00g9AA7gvdot4YocMQ">
                <button className="w-full md:mt-[150px] mt-10 md:py-3 py-2 md:px-8 px-6 font-regular bg-[#6A0DAD] text-white hover:text-white hover:bg-black hover:outline-black text-[16px] font-medium outline outline-1 outline-primary rounded-[50px] mb-8">
                  Subscribe Now
                </button>
              </a>
            </div>
          </div>
          <div className="h-[500px] md:h-[675px] md:w-[325px] w-full bg-white rounded-xl px-[20px] py-6 border border-gray-200 mb-4">
            <h1 className="md:text-start text-[18px] md:text-[25px] font-medium">
              Boost Plan
            </h1>
            <p className="md:text-start text-[30px] md:text-[40px]  font-bold mb-2">
              £360 /month
            </p>

            <div className="md:text-start text-[#666666] text-[14px] md:text-16px] font-Rale font-regular ">
              <div className="flex items-center">
                <img src={check} alt="" className=" mr-2" />
                <p className="mb-4">
                  Dedicated{" "}
                  <b className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
                    part-time assistant for 40 hours per month
                  </b>
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className=" mr-2" />
                <p className="mb-4">
                  Change your assistant with zero extra cost
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Dedicated Account Manager</p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Adaptable solutions that flexibly adjust to your changing
                  requirements
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Convenient Timezone</p>
              </div>
              <a href="https://buy.stripe.com/8wM8ww0S71FL0I8aEJ">
                <button className="w-full md:mt-[150px] mt-10 md:py-3 py-2 md:px-8 px-6 font-regular bg-[#6A0DAD] hover:text-white hover:bg-black hover:outline-black text-[16px] text-white font-medium outline outline-1 outline-primary rounded-[50px] mb-8">
                  Subscribe Now
                </button>
              </a>
            </div>
          </div>
          <div className="h-[500px] md:h-[675px] md:w-[325px] w-full bg-[#7B2AE5] text-white rounded-xl px-[20px] py-6 border border-gray-200 mb-4">
            <h1 className="md:text-start text-[18px] md:text-[25px]  font-medium">
              Power Plan
            </h1>
            <p className="md:text-start text-[30px] md:text-[40px]  font-bold text-white mb-2">
              £640 /month
            </p>

            <div className="md:text-start text-[#666666] text-[14px] md:text-16px] font-Rale font-regular text-white ">
              <div className="flex items-center">
                <img src={check1} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Dedicated{" "}
                  <b className="  text-white">
                    part-time assistant for 60 hours per month
                  </b>
                </p>
              </div>
              <div className="flex items-center">
                <img src={check1} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Change your assistant with zero extra cost
                </p>
              </div>
              <div className="flex items-center">
                <img src={check1} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Dedicated Account Manager</p>
              </div>
              <div className="flex items-center">
                <img src={check1} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Adaptable solutions that flexibly adjust to your changing
                  requirements
                </p>
              </div>
              <div className="flex items-center">
                <img src={check1} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Unused hours rollover</p>
              </div>
              <div className="flex items-center">
                <img src={check1} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Convenient Timezone</p>
              </div>
              <a href="https://buy.stripe.com/eVa6oo8kzckp1Mc3ci">
                <button className="w-full md:mt-[115px] mt-10 md:py-3 py-2 md:px-8 px-6 font-regular bg-white text-[#6A0DAD] hover:text-white hover:bg-black hover:outline-black text-[16px] font-medium outline outline-1 outline-primary rounded-[50px] mb-8">
                  Subscribe Now
                </button>
              </a>
            </div>
          </div>
          <div className="h-[540px] md:h-[675px] md:w-[325px] w-full bg-white rounded-xl px-[20px] py-6 border border-gray-200">
            <h1 className="md:text-start text-[18px] md:text-[25px]  font-medium">
              Flex Plan
            </h1>
            <p className="md:text-start text-[30px] md:text-[40px]  font-bold  mb-2">
              £1800 /month
            </p>

            <div className="md:text-start text-[#666666] text-[14px] md:text-16px]  font-regular  ">
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Dedicated{" "}
                  <b className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
                    full-time assistant for 120 hours per month
                  </b>
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Multiple VAs handling your business needs
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Change your assistant with zero extra cost
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Change your assistant with zero extra cost
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Dedicated Account Manager</p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">
                  Adaptable solutions that flexibly adjust to your changing
                  requirements
                </p>
              </div>
              <div className="flex items-center">
                <img src={check} alt="" className="mt-[-6%] mr-2" />
                <p className="mb-4">Convenient Timezone</p>
              </div>
              <a href="https://buy.stripe.com/3cs3ccasHdotfD25kr">
                <button className="w-full md:py-3 py-2 md:px-8 px-6 font-regular bg-[#6A0DAD] text-white hover:text-white hover:bg-black hover:outline-black text-[16px] font-medium outline outline-1 outline-primary rounded-[50px] mb-8 mt-10">
                  Subscribe Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
