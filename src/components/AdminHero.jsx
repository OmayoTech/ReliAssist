import admin from "../../src/assets/admin.svg";

const AdminHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:w-full md:px-[140px] gap-10 justify-evenly px-4 mt-10 md:mt-10">
      <div className="flex flex-col  md:items-start items-center md:w-full py-10 md:py-20 mb-10 md:basis-1/2">
        <h1 className="text-center md:text-start  text-[30px] md:text-[64px] leading-[45px] md:leading-[59px]  font-semibold text-white">
          <span className="mr-4 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            Administrative
          </span>
          <br />
          That Keeps You
          <br />
          Organized
        </h1>

        <p className="text-center md:text-start w-full md:w-[95%] mt-4 text-white text-[16px] md:text-[20px] leading-[30px]">
          Managimg day-to-day Administrative tasks can be time- consuming.
          ReliAssist's Administrative support services are designed to handle
          these essential functions, allowing you to focus on growing your
          business without getting bogged down by routine tasks.
        </p>
        <a href="https://forms.zohopublic.com/reliassist1/form/LetsMergeYouWithThePerfectVAForYou/formperma/zl7SfYPqi2ajNM1jisikGepE6qym_zjwblIx_WvweM0">
          <button className="py-2 md:py-3 px-6 md:px-12 text-white text-[16px] bg-secondary hover:bg-black hover:outline-black font-bold font-san outline outline-1 outline-primary rounded-[50px] mt-8">
            Send a Request
          </button>
        </a>
      </div>
      <div className="flex justify-center md:w-full md:basis-1/2">
        <img
          src={admin}
          alt="hero"
          className="max-w-full h-auto w-[400px] md:w-[1000px] md:h-[500px]"
        />
      </div>
    </div>
  );
};

export default AdminHero;
