import React from "react";

const SectionTitle = ({ heading, text }) => {
  return (
    <div className="text-start my-6">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600">
        {heading}
      </h2>
      <p className="text-sm md:text-base lg:text-lg font-medium text-slate-500">{text}</p>
    </div>
  );
};

export default SectionTitle;
