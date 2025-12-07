import BlogHero from "../../BlogHero";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Started from "../../Started";

const Blog = () => {
  return (
    <div>
      <div className="w-full md:h-[924px] h-[820px] bg-cover bg-[url('/src/assets/new_background.png')] bg-no-repeat mb-[30%]">
        <Header />
        <BlogHero />
      </div>

      <Started />
      <Footer />
    </div>
  );
};

export default Blog;
