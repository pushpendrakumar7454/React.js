import React from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { navigate, loginForm, register, handleSubmit } = useAuth();

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-12 text-white bg-gradient-to-br from-indigo-600/30 to-purple-600/20">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome <br />
            Back 👋
          </h1>

          <p className="mt-6 text-gray-300 leading-7">
            Sign in to continue accessing your dashboard and manage your account
            with a beautiful experience.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-lg">
              🚀
            </div>

            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-lg">
              🔒
            </div>

            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-lg">
              💻
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800">Login</h2>

          <p className="text-gray-500 mt-2">
            Welcome back! Please login to your account.
          </p>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit(loginForm)}>
            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "email is required",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
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
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
              >
                Forgot Password?
              </button>
            </div>

            {/* Button */}
            <button className="w-full active:scale-95 cursor-pointer py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 duration-300 text-white font-semibold shadow-lg">
              Login
            </button>
          </form>

          {/* Divider */}

          {/* Social */}

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?
            <span
              onClick={() => navigate("/register")}
              className="text-indigo-600 font-semibold cursor-pointer ml-2"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
