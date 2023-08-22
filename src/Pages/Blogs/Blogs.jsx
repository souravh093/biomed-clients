import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Cover from "../../components/Shared/Cover/Cover";

import Container from "../../components/Shared/Container/Container";
import BlogCard from "./BlogCard/BlogCard";

const Blogs = () => {
  const { isLoading, data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/blogs");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(blogs);
  return (
    <>
      <Cover title={"Blogs"} text={"We Hope This Will Help You!"}></Cover>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 py-10">
          {blogs.map((blogItems) => (
            <BlogCard key={blogItems._id} blogItems={blogItems} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Blogs;
