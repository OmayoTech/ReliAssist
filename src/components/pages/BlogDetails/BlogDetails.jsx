import BlogContent from "../../BlogContent";
import BlogDetailHero from "../../BlogDetailHero";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Started from "../../Started";

const BlogDetails = () => {
  return (
    <div>
      <div className="w-full md:h-[924px] h-[820px] bg-cover bg-[url('/src/assets/new_background.png')] bg-no-repeat mb-[20%]">
        <Header />
        <BlogDetailHero />
      </div>
      <BlogContent />
      <Started />
      <Footer />
    </div>
  );
};

export default BlogDetails;
