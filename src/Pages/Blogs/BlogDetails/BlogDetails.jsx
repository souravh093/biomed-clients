import React from 'react';
import { useParams } from 'react-router-dom';

import blogsData from '../../../../public/blogsData/blogs.json';
import Container from '../../../components/Shared/Container/Container';

const BlogDetails = () => {
  const { id } = useParams();
  const selectedBlog = blogsData.find(blog => blog._id === id);

  if (!selectedBlog) {
    return <div>Blog not found.</div>;
  }

  return (
    <Container>
        <img className='lg:w-9/12 md:h-[400px] lg:h-[500px] mx-auto' src={selectedBlog.image} alt="" />
      <h1 className='text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold py-2'>{selectedBlog.title}</h1>
    </Container>
  );
};

export default BlogDetails;
