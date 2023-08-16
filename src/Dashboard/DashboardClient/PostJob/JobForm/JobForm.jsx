import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const JobForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: "react", label: "React" },
    { value: "javascript", label: "JavaScript" },
    { value: "vu.js", label: "Vu.js" },
    { value: "angular", label: "Angular" },
    { value: "reactnative", label: "React Native" },
    { value: "wordpress", label: "WordPress" },
    { value: "laravel", label: "Laravel" },
    { value: "devops", label: "Devops" },
    { value: "python", label: "Python" },
  ];

  const jobsTypes = [
    { value: "workFromHome", label: "Work From Home" },
    { value: "onsite", label: "Onsite" },
    { value: "internship", label: "Internship" },
    { value: "contract", label: "Contract" },
    { value: "partTime", label: "Part-Time" },
  ];

  const experience = [
    { value: "0-2years", label: "0-2 years" },
    { value: "2-5years", label: "2-5 years" },
    { value: "5-10years", label: "5-10 years" },
    { value: "10-15years", label: "10-15 years" },
    { value: "15+years", label: "15+ years" },
  ];

  const offerSalary = [
    { value: "lessThan$50000", label: "Less than $50,000" },
    { value: "$50000-$75000", label: "$50,000 - $75,000" },
    { value: "$75000-$100000", label: "$75,000 - $100,000" },
    { value: "$100000-$150000", label: "$100,000 - $150,000" },
    { value: "moreThan$150000", label: "More than $150,000" },
  ];

  const industry = [
    { value: "technology", label: "Technology" },
    { value: "finance", label: "Finance" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "retail", label: "Retail" },
  ];

  const qualification = [
    { value: "highSchool", label: "High School Diploma" },
    { value: "bachelorsDegree", label: "Bachelor's Degree" },
    { value: "mastersDegree", label: "Master's Degree" },
    { value: "phd", label: "Ph.D." },
    { value: "certification", label: "Professional Certification" },
  ];

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const carrierLabel = [
    { value: "entryLevel", label: "Entry Level" },
    { value: "junior", label: "Junior" },
    { value: "midLevel", label: "Mid Level" },
    { value: "senior", label: "Senior" },
    { value: "executive", label: "Executive" },
  ];

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
        <div className="mb-4">
          <label htmlFor="name">Job Title</label>

          <input
            type="text"
            id="name"
            placeholder="Enter title"
            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("name", { required: "Title is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description">Job Description</label>

          <textarea
            id="description"
            placeholder="Enter job description"
            className="w-full h-60 px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("description", {
              required: "Job Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Email Address</label>

            <input
              type="email"
              id="email"
              placeholder="email"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("email", { required: "Title is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name">Username</label>

            <input
              type="text"
              id="username"
              placeholder="username"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("name", { required: "Title is required" })}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Specialisms</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={customStyles}
              isMulti
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Job Type</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={jobsTypes}
              styles={customStyles}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Experience</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={experience}
              styles={customStyles}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Carrier Label</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={carrierLabel}
              styles={customStyles}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Offered Salary</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={offerSalary}
              styles={customStyles}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Gender</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={gender}
              styles={customStyles}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Industry</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={industry}
              styles={customStyles}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Qualification</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={qualification}
              styles={customStyles}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name">Application Deadline Date</label>

          <input
            type="text"
            id="name"
            placeholder="Enter application deadline"
            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("deadline", { required: "Title is required" })}
          />
          {errors.deadline && (
            <p className="text-red-500">{errors.deadline.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-10">
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
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
