import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Cover from "../../components/Shared/Cover/Cover";

import blogImg from "../../assets/cover_images/blog_cover.jpg";
import Container from "../../components/Shared/Container/Container";
import BlogCard from "./BlogCard/BlogCard";

const Blogs = () => {
  const { isLoading, data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios("blogsData/blogs.json");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(blogs);
  return (
    <Container>
      <Cover
        bgImg={blogImg}
        title={"Blogs"}
        text={"We Hope This Will Help You!"}
      ></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 py-10">
        {blogs.map((blogItems) => (
          <BlogCard key={blogItems._id} blogItems={blogItems} />
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
