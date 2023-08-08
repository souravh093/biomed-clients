import React, { useEffect, useState } from "react";
import SingleCategory from "./singleCategory/SingleCategory";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

const Categorys = () => {
  const [categorysData, setCategorysData] = useState([]);
  useEffect(() => {
    fetch("categorysData/categorys.json")
      .then((res) => res.json())
      .then((data) => setCategorysData(data));
  }, []);

  console.log(categorysData);

  return (
    <section className="container mx-auto">
      <SectionTitle heading="Browse talent by category" text="Get some Inspirations from 1800+ skills"></SectionTitle>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categorysData?.map((items, index) => (
          <SingleCategory items={items} key={index}>
          </SingleCategory>
        ))}
      </div>
    </section>
  );
};

export default Categorys;
