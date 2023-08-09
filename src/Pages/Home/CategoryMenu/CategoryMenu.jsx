import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";

const CategoryMenu = () => {
  const categories = [
    { id: 1, name: "Category 1", route: "/" },
    { id: 2, name: "Category 2", route: "/" },
    { id: 3, name: "Category 3", route: "/" },
    { id: 4, name: "Category 4", route: "/" },
    { id: 5, name: "Category 5", route: "/" },
  ];

  return (
    <Container>
      <ul className="hidden md:flex justify-start items-center gap-10 font-semibold">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={category.route}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CategoryMenu;
