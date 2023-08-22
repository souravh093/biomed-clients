import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const categories = [
    { id: 1, name: "Software Engineer", route: "/" },
    { id: 2, name: "UI/UX Designer", route: "/" },
    { id: 3, name: "Project Manager", route: "/" },
    { id: 4, name: "Graphic Designer", route: "/" },
    { id: 5, name: "Data Analytic", route: "/" },
  ];

  return (
    <div>
      <ul className="hidden md:flex justify-start items-center gap-10 font-semibold relative z-20 bg-white pb-10 px-40">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={category.route}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
