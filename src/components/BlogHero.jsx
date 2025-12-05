import Post from "../components/Post";

const BlogHero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:w-full md:px-[140px] px-4 mt-16 md:mt-20  ">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start text-[10px] md:py-3 py-2 md:px-10 px-5  bg-[#F9EDFE] rounded-[50px] md:text-[16px]  font-san font-Regular ">
          Affordable plans just for you!
        </p>
        <h1 className="text-center text-pretty font-bold  text-[23px] md:text-[74px] leading-[45px] md:leading-[69px] font-san  mt-8">
          Learn from
          <span className="ml-4">our articles</span> curated
          <br /> just for you
        </h1>
        {/* <div className="grid md:grid-cols-3 grid-rows-2 md:gap-4 p-4  md:mt-20 mt-10 text-start">
          <div>Good</div>
          <div>good</div>
          <div>good</div>
          <div>good</div>
          <div>good</div>
          <div>good</div>
        </div> */}
        <Post />
      </div>
    </div>
  );
};

export default BlogHero;
