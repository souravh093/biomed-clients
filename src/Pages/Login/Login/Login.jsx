import React, { useState } from "react";
import loginImg from "../../../assets/login.jpg";
import Container from "../../../components/Shared/Container/Container";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { saveUser } from "../../../api/auth";

const Login = () => {
  const { loginUser, googleLoginUser, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const [toggle, setToggle] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully login");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogle = () => {
    googleLoginUser()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
        toast.success("Successfully login with Google");
      })
      .catch((error) => setError(error.message));
  };

  const resetPass = () => {
    const targetEmail = document.getElementById("email").value;
    resetPassword(targetEmail)
      .then((result) => {
        console.log(result.user);
        toast.success("Check your email");
      })
      .catch((error) => console.log(error.message));
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

              <div className="mb-4 relative">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border-b text-gray-600 border-gray-300 rounded outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <div
                  onClick={() => setToggle(!toggle)}
                  className="absolute cursor-pointer right-0 bottom-2"
                >
                  {toggle ? (
                    <AiFillEye className="text-xl text-gray-600" />
                  ) : (
                    <AiFillEyeInvisible className="text-xl text-gray-600" />
                  )}
                </div>

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

            <div className="mt-4 flex justify-between">
              <p className="text-red-500">{error}</p>
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
