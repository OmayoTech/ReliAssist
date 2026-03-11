import React from "react";

interface BlogHeroProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = [
    "All",
    "Lifestyle",
    "Design",
    "General",
    "Administration",
  ];
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full px-4 pt-20 pb-10 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent -z-10" />

        <div className="flex flex-col items-center max-w-4xl w-full">
          {/* Top Badge */}
          <p className="text-center text-[12px] md:text-[14px] font-medium py-1 px-4 bg-[#F9EDFE] text-purple-800 rounded-full mb-6">
            Affordable plans just for you
          </p>

          {/* Main Heading */}
          <h1 className="text-center font-bold text-[40px] leading-tight md:text-[64px] tracking-tight text-[#111827]">
            Learn from{" "}
            <span className="italic font-serif text-purple-600 text-grad">
              our articles
            </span>{" "}
            curated <br className="hidden md:block" />
            just for you
          </h1>

     
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-12 border-b border-gray-100 pb-4 w-full">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm md:text-base transition-colors duration-200 ${
              activeCategory === category
                ? "text-purple-600 font-semibold border-b-2 border-purple-600 pb-4 -mb-[18px]"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default BlogHero;
