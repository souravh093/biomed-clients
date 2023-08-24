import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";

const BlogDetails = () => {
  const { _id, title, image, writer, blog, reading_time, } = useLoaderData();

  // Get the current date
  const currentDate = new Date();

  const formattedCurrentDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
   
    <Container>
      <img
        className="w-full md:h-[400px] lg:h-[600px] mx-auto"
        src={image}
        alt=""
      />
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6">
        {title}
      </h1>
      <div className="py-10">
        <h2 className="text-lg md:text-xl font-semibold">
          {writer}
        </h2>
        <p className="text-gray-700 text-sm">
          {formattedCurrentDate}; {reading_time}
        </p>
      </div>
      <div>
        {blog.map((item) => (
          <div key={item.id} className="space-y-6 pb-10 text-base Lg:text-lg">
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
