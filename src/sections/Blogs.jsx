import BlogCard from "../components/BlogCard"
import { blogs } from "../constants"

const Blogs = () => {
  return (
    <section id="Blogs" className="max-container">
      <div>
        <div>
          <p>Text</p>
          <p>Sub text</p>
        </div>
        <div className="flex flex-col gap-3">
        {blogs.map((blog, index)=>(
                <div key={index}>
                    <BlogCard {...blog}/>
                </div>
            ))
            }
        </div>
      </div>
    </section>
  )
}

export default Blogs