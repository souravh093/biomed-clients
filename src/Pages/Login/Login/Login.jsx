import React from "react";
import loginImg from "../../../assets/login.svg";
import Container from "../../../components/Shared/Container/Container";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="grid grid-cols-2 my-10 items-center">
        <div>
          <div className="mb-10">
            <h1 className="text-4xl font-semibold mb-5">Sign in</h1>
            <p>
              If you don’t have an account register <br /> You can{" "}
              <Link to={"/register"} className="text-primary">
                Register here !
              </Link>
            </p>
          </div>

          <div className="pr-40">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 border-b border-gray-300 rounded"
                  {...register("email", {
                    required: "Email is required",
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
                  className="w-full p-2 border-b border-gray-300 rounded"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-4 text-right">
                <a href="#" className="text-primary hover:underline">
                  Reset Password
                </a>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-primary w-full text-white py-2 px-4 hover:bg-hover rounded-3xl"
                >
                  Login
                </button>
              </div>
            </form>

            <h2 className="text-center my-10 text-gray-600">
              or continue with
            </h2>

            <div className="flex items-center justify-center ">
              <button className="flex items-center gap-3 border px-10 text-2 py-3 rounded-md hover:bg-primary hover:text-gray-50 transition">
                <FcGoogle />
                Login with google
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#23ccc4]">
          <img className="shadow-md bg-cover" src={loginImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
