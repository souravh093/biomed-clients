import axios from "axios";
import { useForm } from "react-hook-form";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const EditForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios.post(imageUrl, formData).then((dataImage) => {
      const profileData = {
        name2: data.name,
        city: data.city,
        country: data.country,
        education: data.education,
        email: data.email,
        currentSalary: data.currentSalary,
        expectedSalary: data.expectedSalary,
        experience: data.experience,
        age: data.age,
        facebook: data.facebook,
        jobTitle: data.jobTitle,
        language: data.language,
        linkedin: data.linkedin,
        phone: data.phone,
        website: data.website,
        description: data.description,
        image: dataImage.data.data.display_url,
      };
      handleUpdateProfileData(profileData);
    });
  };

  return (
    <div className="bg-white p-6 rounded-md my-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="block w-full border text-gray-500
                  file:mr-4 file:py-4 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gray-200 file:text-gray-700
                  hover:file:bg-gray-100
                "
            {...register("image", {
              required: "Image is required",
              validate: {
                fileSize: (file) =>
                  file[0]?.size < 1048576 || "Image size must be less than 1MB",
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
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          {/*Job Title Field */}
          <div className="mb-4">
            <label htmlFor="jobTitle">Job Title</label>

            <input
              type="text"
              id="jobTitle"
              placeholder="Job Title"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("jobTitle", { required: "Title is required" })}
            />
            {errors.jobTitle && (
              <p className="text-red-500">{errors.jobTitle.message}</p>
            )}
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              placeholder="Your Phone"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("phone", { required: "Phone Number is required" })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          {/*Email Field */}
          <div className="mb-4">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Education Field */}
          <div className="mb-4">
            <label htmlFor="education">Education Levels</label>
            <input
              type="text"
              id="education"
              placeholder="Your Last Education"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("education", { required: "Education is required" })}
            />
            {errors.education && (
              <p className="text-red-500">{errors.education.message}</p>
            )}
          </div>
          {/*Language Field */}
          <div className="mb-4">
            <label htmlFor="language">Language</label>

            <input
              type="text"
              id="language"
              placeholder="Language"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("language", { required: "Language is required" })}
            />
            {errors.language && (
              <p className="text-red-500">{errors.language.message}</p>
            )}
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Current Salary Field */}
          <div className="mb-4 cursor-pointer">
            <label htmlFor="currentSalary">Current Salary($)</label>
            <select
              className="w-full px-4 py-5 bg-slate-100 border rounded-md focus:border-blue-600 mt-2 cursor-pointer"
              {...register("currentSalary")}
            >
              <option className="cursor-pointer py-2" value="30-60K">
                30-60K
              </option>
              <option className="cursor-pointer py-2" value="40-70K">
                40-70K
              </option>
              <option className="cursor-pointer py-2" value="50-80K">
                50-80K
              </option>
              <option className="cursor-pointer py-2" value="60-90K">
                60-90K
              </option>
              <option className="cursor-pointer py-2" value="70-100K+">
                70-100K+
              </option>
            </select>
            {errors.currentSalary && (
              <p className="text-red-500">{errors.currentSalary.message}</p>
            )}
          </div>
          {/*Expected Salary Field */}
          <div className="mb-4 cursor-pointer">
            <label htmlFor="expectedSalary">Expected Salary($)</label>
            <select
              className="w-full px-4 py-5 bg-slate-100 border rounded-md focus:border-blue-600 mt-2 cursor-pointer"
              {...register("expectedSalary")}
            >
              <option className="cursor-pointer py-2" value="30-60K">
                30-60K
              </option>
              <option className="cursor-pointer py-2" value="40-70K">
                40-70K
              </option>
              <option className="cursor-pointer py-2" value="50-80K">
                50-80K
              </option>
              <option className="cursor-pointer py-2" value="60-90K">
                60-90K
              </option>
              <option className="cursor-pointer py-2" value="70-100K+">
                70-100K+
              </option>
            </select>
            {errors.expectedSalary && (
              <p className="text-red-500">{errors.expectedSalary.message}</p>
            )}
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Experience Field */}
          <div className="mb-4 cursor-pointer">
            <label htmlFor="experience">Experience</label>
            <select
              className="w-full px-4 py-5 bg-slate-100 border rounded-md focus:border-blue-600 mt-2 cursor-pointer"
              {...register("experience")}
            >
              <option className="cursor-pointer py-2" value="0-2years">
                0-2 Years
              </option>
              <option className="cursor-pointer py-2" value="2-5years">
                2-5 Years
              </option>
              <option className="cursor-pointer py-2" value="5-10years">
                5-10 Years
              </option>
              <option className="cursor-pointer py-2" value="10-15years">
                10-15 Years
              </option>
              <option className="cursor-pointer py-2" value="15+years">
                15+ Years
              </option>
            </select>
            {errors.experience && (
              <p className="text-red-500">{errors.experience.message}</p>
            )}
          </div>
          {/*Age Field */}
          <div className="mb-4 cursor-pointer">
            <label htmlFor="age">Age</label>
            <select
              className="w-full px-4 py-5 bg-slate-100 border rounded-md focus:border-blue-600 mt-2 cursor-pointer"
              {...register("age")}
            >
              <option className="cursor-pointer py-2" value="18-22years">
                18-22 Years
              </option>
              <option className="cursor-pointer py-2" value="23-27years">
                23-27 Years
              </option>
              <option className="cursor-pointer py-2" value="28-32years">
                28-32 Years
              </option>
              <option className="cursor-pointer py-2" value="33-37years">
                33-37 Years
              </option>
              <option className="cursor-pointer py-2" value="38-42years">
                38-42 Years
              </option>
            </select>
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-4">
          {/*Country Field */}
          <div className="mb-4">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Enter Country Name"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("country", { required: "Title is required" })}
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
          {/*City Field */}
          <div className="mb-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter City Name"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>
        </div>
        {/*Website Field */}
        <div className="mb-4">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            placeholder="Enter Website Link"
            className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
            {...register("website", { required: "Website is required" })}
          />
          {errors.website && (
            <p className="text-red-500">{errors.website.message}</p>
          )}
        </div>
        <div className="lg:grid grid-cols-2 gap-4">
          {/*Facebook Field */}
          <div className="mb-4">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              id="facebook"
              placeholder="Enter Facebook Link"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("facebook", { required: "Facebook is required" })}
            />
            {errors.facebook && (
              <p className="text-red-500">{errors.facebook.message}</p>
            )}
          </div>
          {/*LinkedIn Field */}
          <div className="mb-4">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              placeholder="Enter LinkedIn Link"
              className="w-full px-5 py-4 bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("linkedin", { required: "LinkedIn is required" })}
            />
            {errors.linkedin && (
              <p className="text-red-500">{errors.linkedin.message}</p>
            )}
          </div>
        </div>
        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description p-10">Description</label>
          <textarea
            id="description"
            placeholder="Enter job description"
            class="w-full h-60 px-5 py-4 rounded-md outline-none bg-slate-100 border focus:border-blue-700 transition"
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm;
