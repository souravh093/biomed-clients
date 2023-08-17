import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../../../Provider/AuthProvider";

const CompanyForm = () => {
  const { user } = useContext(AuthContext);
  const [teamOptions, setTeamOptions] = useState(null);
  const [allowOptions, setAllowOptions] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const teamSize = [
    { value: "smallTeam", label: "Small Team (1-10 members)" },
    { value: "mediumTeam", label: "Medium Team (11-50 members)" },
    { value: "largeTeam", label: "Large Team (51-100 members)" },
    { value: "enterpriseTeam", label: "Enterprise Team (100+ members)" },
    { value: "crossFunctionalTeam", label: "Cross-Functional Team" },
  ];

  const allowToSearch = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const onSubmit = (data) => {
    const clientProfile = {
      companyName: data.companyName,
      companyEmail: data.email,
      companyPhone: data.number,
      website: data.website,
      teamSize: teamOptions.label,
      allow: allowOptions.label,
      aboutCompany: data.aboutCompany,
      facebook: data.facebook,
      twitter: data.twitter,
      linkedin: data.linkedin,
      github: data.github,
      country: data.country,
      address: data.address,
    };
    console.log(clientProfile);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Company name (optional)</label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter title"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("companyName", {
                required: "Company name is required",
              })}
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              disabled
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none cursor-not-allowed"
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Phone Number</label>
            <input
              type="text"
              id="number"
              placeholder="+88011888822"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("number", { required: "Phone Number is required" })}
            />
            {errors.number && (
              <p className="text-red-500">{errors.number.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name">Website</label>
            <input
              type="text"
              id="website"
              placeholder="Enter Website link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("website", { required: "Website link is required" })}
            />
            {errors.website && (
              <p className="text-red-500">{errors.website.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name">Team Size</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={teamOptions}
              onChange={setTeamOptions}
              options={teamSize}
              styles={customStyles}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Allow In Search & Listing</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={allowOptions}
              onChange={setAllowOptions}
              options={allowToSearch}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description">About Company</label>

          <textarea
            id="aboutCompany"
            placeholder="Enter About Company"
            className="w-full h-60 px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("aboutCompany", {
              required: "About Company is required",
            })}
          ></textarea>
          {errors.aboutCompany && (
            <p className="text-red-500">{errors.aboutCompany.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Facebook</label>
            <input
              type="text"
              id="facebook"
              placeholder="Enter Facebook Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("facebook", { required: "Facebook is required" })}
            />
            {errors.facebook && (
              <p className="text-red-500">{errors.facebook.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Twitter</label>
            <input
              type="text"
              id="twitter"
              placeholder="Enter Twitter Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("twitter", { required: "Title is required" })}
            />
            {errors.twitter && (
              <p className="text-red-500">{errors.twitter.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Linkedin</label>
            <input
              type="text"
              id="linkedin"
              placeholder="Enter Linkedin Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("linkedin", {
                required: "Linkedin Link is required",
              })}
            />
            {errors.linkedin && (
              <p className="text-red-500">{errors.linkedin.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Github</label>
            <input
              type="text"
              id="github"
              placeholder="Enter Github account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("github", { required: "GitHub Link is required" })}
            />
            {errors.github && (
              <p className="text-red-500">{errors.github.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Country</label>

            <input
              type="text"
              id="country"
              placeholder="Enter country name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("country", { required: "Title is required" })}
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">City</label>

            <input
              type="text"
              id="city"
              placeholder="Enter city name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name">Complete Address</label>

          <input
            type="text"
            id="address"
            placeholder="Enter address"
            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
