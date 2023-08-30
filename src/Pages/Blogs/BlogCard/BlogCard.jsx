import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogItems }) => {
  const {_id, title, image, writer, writing_date, blog } = blogItems;
  
  const dateObject = new Date(writing_date);
  const formattedDate = dateObject.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
 
  return (
    <Link to={`/blogDetails/${_id}`}>
      <div className="dark:bg-slate-700 bg-white shadow-xl rounded-lg overflow-hidden w-full h-full mx-auto cursor-pointer">
        <div className="group relative overflow-hidden">
          <div className="group-hover:bg-purple-500/30 w-full h-full absolute z-40 transition-all duration-300"></div>
          <div className="group-hover:scale-105 transition-all duration-500">
            <img src={image} alt={title} className="w-full" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              {blog?.map((item) => (
                <div key={item.id}>
                  <p>{`${item.intro.slice(0, 100)}...`}</p>
                  <hr className="my-2 h-[3px] bg-gray-400" />
                  <div className="flex justify-between items-center pt-2">
                    <p className=" font-semibold">{writer}</p>
                    <p className="text-gray-600 font-semibold ">
                      {formattedDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

