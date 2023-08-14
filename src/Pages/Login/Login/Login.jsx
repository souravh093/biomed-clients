import React from "react";
import loginImg from "../../../assets/login.svg";
import Container from "../../../components/Shared/Container/Container";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, googleLoginUser, resetPassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((result) => {
      console.log(result.user);
    });
  };

  const handleGoogle = () => {
    googleLoginUser().then((result) => {
      console.log(result.user);
    });
  };

  const resetPass = () => {
    const targetEmail = document.getElementById("email").value;
    resetPassword(targetEmail);
    alert("Check you email");
  };

  return (
    <Container>
      <div className="grid lg:grid-cols-2 my-10 items-center ">
        <div>
          <div className="mb-10 px-10 lg:px-0">
            <h1 className="text-4xl font-semibold mb-5">Sign in</h1>
            <p>
              If you don’t have an account register <br /> You can{" "}
              <Link to={"/register"} className="text-primary">
                Register here !
              </Link>
            </p>
          </div>

          <div className="px-10 lg:px-0 lg:pr-40">
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
                  className="w-full p-2 border-b border-gray-300 rounded outline-none"
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
                  className="w-full p-2 border-b border-gray-300 rounded outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
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

            <div className="mb-4 text-right">
              <div onClick={resetPass} className="text-primary hover:underline">
                Reset Password
              </div>
            </div>

            <h2 className="text-center my-10 text-gray-600">
              or continue with
            </h2>

            <div className="flex items-center justify-center ">
              <button
                onClick={handleGoogle}
                className="flex items-center gap-3 border px-10 text-2 py-3 rounded-md hover:bg-gray-100 hover:text-gray-700 transition"
              >
                <FcGoogle />
                Login with google
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#23ccc4] hidden lg:block">
          <img className="shadow-md bg-cover" src={loginImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
