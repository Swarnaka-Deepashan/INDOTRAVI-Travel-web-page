import BlogCard from "../components/BlogCard";
import { blogs } from "../constants";
import Button from "../components/Button";

const Blogs = () => {
  return (
    <section id="Blogs" className="max-container">
      <div className="flex flex-col items-center mb-6 max-md:mb-2">
        <p className="lg:max-w-lg font-normal text-lg text-slate-gray">
          Our Blog
        </p>
        <h2 className="text-4xl max-md:text-3xl font-semibold">
          Our travel memories
        </h2>
      </div>
      <div className="flex max-md:flex-col max-md:gap-5 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="flex-1">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
      <div className="mt-10 max-sm:mt-6 flex justify-center">
        <Button label="View More" />
      </div>
    </section>
  );
};

export default Blogs;
