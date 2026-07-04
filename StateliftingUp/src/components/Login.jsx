import React from "react";

const Login = ({settoggle}) => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-96 bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-600">
           Login
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-5">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={()=>settoggle(pre=>!pre)}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;