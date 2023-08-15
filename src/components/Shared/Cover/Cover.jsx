import React from "react";

const Cover = ({ title, text }) => {
  return (
    <div className="bg-gradient-to-tr from-green-300 via-green-400 to-green-500 py-12 px-4 text-white text-center">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default Cover;

{
  /* <div className="relative lg:mt-1 mx-auto bg-no-repeat bg-cover h-[600px]">
<div
  className="absolute inset-y-52 inset-x-10 md:inset-y-40 md:inset-x-28 lg:inset-y-40 lg:inset-x-56 xl:inset-x-72 2xl:lg:inset-x-[800px] flex items-center justify-center text-center text-neutral-content px-10 py-8 bg-black bg-opacity-40"
  style={{ fontFamily: "Cinzel, serif" }}
>
  <div>
    <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold text-white">
      {title}
    </h1>
    <p className="mb-5 text-xs md:text-sm lg:text-lg uppercase text-white">
      {text}
    </p>
  </div>
</div>
<div
  className="bg-cover bg-center h-full w-full"
  style={{
    backgroundImage: `url("${bgImg}")`,
  }}
></div>
</div> */
}
