import React from "react";
import EditForm from "../EditForm/EditForm";

const EditProfile = () => {
  return (
    <div className="p-6"> 
        <div>
          <h2 className="text-3xl font-semibold">My Profile!</h2>
          <p className="text-gray-600 text-base py-3">Ready to jump?</p>
        </div>
        <EditForm/>
    </div>
  );
};

export default EditProfile;
