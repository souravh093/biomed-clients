import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../../../Provider/AuthProvider";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const JobForm = () => {
  const { user } = useContext(AuthContext);

  const [skillOptions, setSkillOptions] = useState(null);
  const [jobOptions, setJobOptions] = useState(null);
  const [experienceOptions, setExperienceOptions] = useState(null);
  const [offerOptions, setOfferOptions] = useState(null);
  const [industryOptions, setIndustryOptions] = useState(null);
  const [qualificationOptions, setQualificationOptions] = useState(null);
  const [genderOptions, setGenderOptions] = useState(null);
  const [carrierOptions, setCarrierOptions] = useState(null);
  const [startDateOptions, setStartDateOptions] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const skills = [
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
    { value: "remote", label: "Remote" },
    { value: "onsite", label: "Onsite" },
    { value: "internship", label: "Internship" },
    { value: "contract", label: "Contract" },
    { value: "partTime", label: "Part-Time" },
  ];

  const startDate = [
    { value: "immediately", label: "Immediately" },
    { value: "withinTwoWeeks", label: "Within Two Weeks" },
    { value: "withinOneMonth", label: "Within One Month" },
    { value: "flexible", label: "Flexible" },
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

  const onSubmit = (data) => {
    const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

    const formData1 = new FormData();
    formData1.append("image", data.image1[0]);

    const formData2 = new FormData();
    formData2.append("image", data.image2[0]);

    Promise.all([
      axios.post(imageUrl, formData1),
      axios.post(imageUrl, formData2),
    ]).then(([dataImage1, dataImage2]) => {
      const currentData = {
        title: data.name,
        companyName: data.company,
        email: user?.email,
        description: data.description,
        username: data.username,
        country: data.country,
        city: data.city,
        deadline: data.deadline,
        address: data.address,
        skills: skillOptions,
        jobType: jobOptions.label,
        carrier: carrierOptions.label,
        offer: offerOptions.label,
        experience: experienceOptions.label,
        qualification: qualificationOptions.label,
        gender: genderOptions.label,
        industry: industryOptions.label,
        startDate: startDateOptions.label,
        logo: dataImage1.data.data.display_url,
        thumbnail: dataImage2.data.data.display_url,
      };
console.log(currentData);
      axios.post("http://localhost:5000/jobs", currentData).then((data) => {
        if (data.data.insertedId) {
          reset();
          toast.success("Successfully Added Job");
        }
      });
    });
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
    <div className="mt-10 dark:bg-gray-800 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2  lg:gap-10">
          <div className="mb-4">
            <label htmlFor="image" className="block mb-1">
              Upload Company Logo
            </label>
            <input
              type="file"
              id="image"
              className="block w-full border text-gray-500
                file:mr-4 file:py-4 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                dark:file:bg-gray-400
                file:bg-gray-200 file:text-gray-700
                hover:file:bg-gray-100
              "
              {...register("image1", {
                required: "Image is required",
                validate: {
                  fileSize: (file) =>
                    file[0]?.size < 1048576 ||
                    "Image size must be less than 1MB",
                  fileType: (file) =>
                    /jpeg|png|gif/.test(file[0]?.type) ||
                    "Unsupported image format (jpeg/png/gif only)",
                },
              })}
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block mb-1">
              Upload Company Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              className="block w-full border text-gray-500
                file:mr-4 file:py-4 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                dark:file:bg-gray-400
                file:bg-gray-200 file:text-gray-700
                hover:file:bg-gray-100
              "
              {...register("image2", {
                required: "Thumbnail is required",
                validate: {
                  fileSize: (file) =>
                    file[0]?.size < 1048576 ||
                    "thumbnail size must be less than 1MB",
                  fileType: (file) =>
                    /jpeg|png|gif/.test(file[0]?.type) ||
                    "Unsupported image format (jpeg/png/gif only)",
                },
              })}
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name">Job Title</label>
          <input
            type="text"
            id="name"
            placeholder="Enter title"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            {...register("name", { required: "Title is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-5">
          <div className="mb-4">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Company Name"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
              {...register("company", { required: "Company is required" })}
            />
            {errors.company && (
              <p className="text-red-500">{errors.company.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Start Date</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={startDateOptions}
              onChange={setStartDateOptions}
              options={startDate}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Job Description</label>

          <textarea
            id="description"
            placeholder="Enter job description"
            className="w-full h-60 px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            {...register("description", {
              required: "Job Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Email Address</label>

            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              placeholder="email"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Username</label>

            <input
              type="text"
              id="username"
              placeholder="username"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">Specialisms</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={skillOptions}
              onChange={setSkillOptions}
              options={skills}
              styles={customStyles}
              isMulti
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Job Type</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={jobOptions}
              onChange={setJobOptions}
              options={jobsTypes}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Experience</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={experienceOptions}
              onChange={setExperienceOptions}
              options={experience}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Carrier Label</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={carrierOptions}
              onChange={setCarrierOptions}
              options={carrierLabel}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Offered Salary</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={offerOptions}
              onChange={setOfferOptions}
              options={offerSalary}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Gender</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={genderOptions}
              onChange={setGenderOptions}
              options={gender}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Industry</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={industryOptions}
              onChange={setIndustryOptions}
              options={industry}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qualification">Qualification</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={qualificationOptions}
              onChange={setQualificationOptions}
              options={qualification}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="deadline">Application Deadline Date</label>

          <input
            type="date"
            id="deadline"
            placeholder="Enter application deadline"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            {...register("deadline", { required: "Title is required" })}
          />
          {errors.deadline && (
            <p className="text-red-500">{errors.deadline.message}</p>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Country</label>

            <input
              type="text"
              id="country"
              placeholder="Enter country name"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
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
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
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
            className="w-full px-5 py-4  dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
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
