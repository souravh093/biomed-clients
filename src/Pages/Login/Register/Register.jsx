import React from "react";
import loginImg from "../../../assets/login.svg";
import Container from "../../../components/Shared/Container/Container";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      console.log(result.user);
    });
    console.log(data);
  };
  return (
    <Container>
      <div className="grid grid-cols-2 my-10 items-center">
        <div>
          <div className="mb-10">
            <h1 className="text-4xl font-semibold mb-5">Sign up</h1>
            <p>
              If you already have an account register <br /> You can{" "}
              <Link to={"/login"} className="text-primary">
                Login here !
              </Link>
            </p>
          </div>

          <div className="pr-40">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border-b border-gray-300 rounded outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border-b border-gray-300 rounded outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border-b border-gray-300 rounded outline-none"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        "Password must contain at least 8 characters, one letter, one number, and one special character",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full p-2 border-b border-gray-300 rounded outline-none"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

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

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-primary w-full rounded-3xl text-white py-3 px-4  hover:bg-[#65ca73]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[#23ccc4]">
          <img className="shadow-md bg-cover" src={loginImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Register;
