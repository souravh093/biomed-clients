import React, { useEffect, useState } from "react";
import SingleCategory from "./singleCategory/SingleCategory";

const Categorys = () => {
  const [categorysData, setCategorysData] = useState({});
  useEffect(() => {
    fetch("categorysData/categorys.json")
      .then((res) => res.json())
      .then((data) => setCategorysData(data));
  }, []);

  console.log(categorysData);

  return (
    <section>
      <h1>This is section title </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          categorysData.map((items, index) =>  <SingleCategory  items = {items} key={index}></SingleCategory>)
        }
      </div>
    </section>
  );
};

export default Categorys;
