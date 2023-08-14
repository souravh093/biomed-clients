import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Cover from "../../components/Shared/Cover/Cover";

import blogImg from "../../assets/cover_images/blog_cover.jpg";
import Container from "../../components/Shared/Container/Container";

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
      {blogs.map((blog) => (
        <div key={blog._id}>
          {blog.blog.map((item) => (
            <div key={item.id}>
              <p>{item.intro}</p>
              <p>{item.description}</p>
              <ul>
                {item.list.map((listItem, index) => (
                  <li key={index}>{listItem.list_item}</li>
                ))}
              </ul>
              <p>{item.conclusion}</p>
            </div>
          ))}
          <br />
        </div>
      ))}
    </Container>
  );
};

export default Blogs;
