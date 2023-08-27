import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ name, path }) => {
  return (
    <div>
      <Link
        className="text-gray-700 dark:text-gray-100 dark:hover:text-gray-50 font-normal xl:font-medium hover:text-gray-900"
        to={path}
      >
        <li>{name}</li>
      </Link>
    </div>
  );
};

export default MenuItem;
