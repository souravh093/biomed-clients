import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-screen
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <BounceLoader size={100} color="#5BBB7B" />
    </div>
  );
};

export default Loader;
