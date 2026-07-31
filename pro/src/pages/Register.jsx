import React from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

    const {navigate,handleSubmit,register,errors,watch,registerForm}=useAuth()


     const password=watch("password")
  return (
    <div className="min-h-screen p-7 bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-12 text-white bg-gradient-to-br from-indigo-600/30 to-purple-600/20">

          <h1 className="text-2xl font-semibold leading-tight">
            Join <br />
            Our Community 🚀
          </h1>

          <p className="mt-6 text-gray-300 leading-7">
            Create your account and start exploring amazing features. It only
            takes a minute to get started.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
              🚀
            </div>

            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
              🌍
            </div>

            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
              🔒
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-8 md:p-12">

          <h2 className="text-4xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Fill in the details below to create your account.
          </p>

          <form className="mt-8 space-y-5"onSubmit={handleSubmit(registerForm)}>

            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
              {...register("name",{
                required:"name is required"
              })}
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
              {...register("email",{
                 required:"email is required"
              })}
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
              {...register("password",{
                required:"password is required"
              })}
                type="password"
                placeholder="Create password"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <input
              {...register("confirm",{
                required:"confirm password is required",
                validate:(value)=>{
                  return value===password || "password do not match"
                }
              })}
                type="password"
                placeholder="Confirm password"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              I agree to the Terms & Conditions
            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full active:scale-95 cursor-pointer py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300 shadow-lg"
            >
              Create Account
            </button>

          </form>

         
         

          <p className="text-center mt-8 text-gray-600">
            Already have an account?
            <span className="ml-2 text-indigo-600 font-semibold cursor-pointer">
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;