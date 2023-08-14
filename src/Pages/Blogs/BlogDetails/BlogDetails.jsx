import React from "react";
import { useParams } from "react-router-dom";

import blogsData from "../../../../public/blogsData/blogs.json";
import Container from "../../../components/Shared/Container/Container";

const BlogDetails = () => {
  const { id } = useParams();
  const selectedBlog = blogsData.find((blog) => blog._id === id);

  if (!selectedBlog) {
    return <div>Blog not found.</div>;
  }
  console.log(selectedBlog);

 // Get the current date
 const currentDate = new Date();

 const formattedCurrentDate = currentDate.toLocaleDateString('en-US', {
   month: 'short',
   day: 'numeric',
   year: 'numeric'
 });


  return (
    <Container>
      <img
        className="lg:w-9/12 md:h-[400px] lg:h-[500px] mx-auto"
        src={selectedBlog.image}
        alt=""
      />
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6">
        {selectedBlog.title}
      </h1>
       <div className="py-10">
       <h2 className="text-lg md:text-xl font-semibold">{selectedBlog.writer}</h2>
        <p className="text-gray-700 text-sm">{formattedCurrentDate}; {selectedBlog.reading_time}</p>
       </div>
      <div>
      {selectedBlog.blog.map((item) => (
              <div key={item.id} className="space-y-6 pb-10 text-lg">
                <p>{item.intro}</p>
                <p>{item.description}</p>
                <ul>
                  {item.list.map((listItem, index) => (
                    <li key={index}># {listItem.list_item}</li>
                  ))}
                </ul>
                <p>{item.conclusion}</p>
              </div>
            ))}
      </div>
    </Container>
  );
};

export default BlogDetails;
