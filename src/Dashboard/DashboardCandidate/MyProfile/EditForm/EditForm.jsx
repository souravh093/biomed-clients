import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { saveUser } from "../../../../api/auth";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const EditForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });
  const { updateData } = myProfileData;
  console.log("updateData", updateData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("image", data?.image[0]);

      const dataImage = await axios.post(imageUrl, formData);
      const profileData = {
        name2: data?.name,
        city: data?.city,
        country: data?.country,
        education: data?.education,
        email: data?.email,
        age: data?.age,
        facebook: data?.facebook,
        language: data?.language,
        linkedin: data?.linkedin,
        phone: data?.phone,
        website: data?.website,
        description: data?.description,
        image: dataImage?.data?.data?.display_url,
      };

      const response = saveUser(user, profileData);

      if (
        response?.data?.acknowledged === true &&
        response?.data?.modifiedCount === 1
      ) {
        console.log("Profile updated successfully");
        toast.success("Profile updated successfully");
        navigate("/dashboard/my-profile");
      } else {
        console.log("Failed to update Profile");
        toast.success("Profile updated successfully");
        navigate("/dashboard/my-profile");
      }
    } catch (error) {
      console.log("Entering catch block");
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      console.log("Finally block executed");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dark:bg-slate-900 dark:text-white bg-white p-6 rounded-md my-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="block w-full border
            dark:bg-slate-800  text-gray-500
            file:mr-4 file:py-4 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            dark:file:bg-slate-500
            dark:hover:file:bg-gray-700
            dark:file:text-white
            file:bg-gray-200 file:text-gray-700
            hover:file:bg-gray-100
          "
            {...register("image", {
              required: "Please upload an image",
            })}
          />
          {errors?.image && (
            <span className="text-red-500">{errors?.image.message}</span>
          )}
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              defaultValue={updateData?.name2 || ""}
              placeholder="Your Full Name"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("name")}
            />
          </div>
          {/*Email Field */}
          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue={updateData?.email || ""}
              placeholder="Your Email"
              readOnly
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("email")}
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              defaultValue={updateData?.phone || ""}
              placeholder="Your Phone"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("phone")}
            />
          </div>
          {/*Age Field */}
          <div className="mb-4 cursor-pointer">
            <label htmlFor="age">Age</label>
            <select
              className="w-full px-4 py-5 dark:bg-slate-800  bg-slate-100 border rounded-md focus:border-blue-600 mt-2 cursor-pointer"
              {...register("age")}
            >
              <option className="cursor-pointer py-2" value="18-22">
                18-22 Years
              </option>
              <option className="cursor-pointer py-2" value="23-27">
                23-27 Years
              </option>
              <option className="cursor-pointer py-2" value="28-32">
                28-32 Years
              </option>
              <option className="cursor-pointer py-2" value="33-37">
                33-37 Years
              </option>
              <option className="cursor-pointer py-2" value="38-42">
                38-42 Years
              </option>
            </select>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Education Field */}
          <div className="mb-4">
            <label htmlFor="education">Education Levels</label>
            <input
              type="text"
              id="education"
              defaultValue={updateData?.education || ""}
              placeholder="Your Last Education"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("education")}
            />
          </div>
          {/*Language Field */}
          <div className="mb-4">
            <label htmlFor="language">Language</label>

            <input
              type="text"
              id="language"
              defaultValue={updateData?.language || ""}
              placeholder="Language"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("language")}
            />
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-4">
          {/*Country Field */}
          <div className="mb-4">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              defaultValue={updateData?.country || ""}
              placeholder="Enter Country Name"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("country")}
            />
          </div>
          {/*City Field */}
          <div className="mb-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              defaultValue={updateData?.city || ""}
              placeholder="Enter City Name"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("city")}
            />
          </div>
        </div>
        {/*Website Field */}
        <div className="mb-4">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            defaultValue={updateData?.website || ""}
            placeholder="Enter Website Link"
            className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
            {...register("website")}
          />
        </div>
        <div className="lg:grid grid-cols-2 gap-4">
          {/*Facebook Field */}
          <div className="mb-4">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              id="facebook"
              defaultValue={updateData?.facebook || ""}
              placeholder="Enter Facebook Link"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("facebook")}
            />
          </div>
          {/*LinkedIn Field */}
          <div className="mb-4">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              defaultValue={updateData?.linkedin || ""}
              placeholder="Enter LinkedIn Link"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("linkedin")}
            />
          </div>
        </div>
        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description p-10">Description</label>
          <textarea
            id="description"
            defaultValue={updateData?.description || ""}
            placeholder="Enter job description"
            className="w-full h-60 px-5 py-4 rounded-md outline-none dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition"
            {...register("description")}
          ></textarea>
        </div>

        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EditForm;
