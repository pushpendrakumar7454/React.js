import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RegisterUser } from "../featurs/auth/userAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
const navigate=  useNavigate()

  const registerForm = (data) => {
    const exist = users.find((u) => u.email === data.email);
    if (exist) {
      alert("email is allredy exit");
      return;
    }
    const user = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(RegisterUser(user));
   navigate("/login");
    alert("User registration succefull");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Sign up to continue
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(registerForm)}>
          <input
            {...register("name", {
              required: "name is required",
            })}
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("email", {
              required: "email is required",
            })}
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("password", {
              required: "password is required",
            })}
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            {...register("confirm", {
              required: "password is confirm",
              validate: (value) => {
                value === password || "passoword do not match";
              },
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full cursor-pointer active:scale-95 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
