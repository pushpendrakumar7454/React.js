import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  ShieldCheck,
  BadgePercent,
  Headphones,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { MyStore } from "../constext/MyContext";

const Register = () => {
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const navigate = useNavigate();
  const{setUsers,users}=useContext(MyStore)

  const getPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;

    return score;
  };

  const strength = getPasswordStrength(password);

  const submitForm = (data) => {
   let oldUsers= JSON.parse(localStorage.getItem(users))||[]
     const newUser=[...oldUsers,data]
    localStorage.setItem('users',JSON.stringify(newUser))
    setUsers(newUser) 
     alert("User Registered Successfully");
    navigate("/login");
    reset();
  };

  return (
    <div className="min-h-screen bg-[#090909] relative overflow-hidden flex items-center justify-center px-5 py-10">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-lime-500/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-lime-400/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-xl bg-lime-400 flex items-center justify-center shadow-[0_0_35px_rgba(163,230,53,0.5)]">
            <Zap size={22} className="text-black fill-black" />
          </div>

          <h1 className="text-2xl font-semibold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Card */}
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_80px_rgba(163,230,53,0.08)]">
          <h2 className="text-xl font-semibold text-white">Create Account</h2>

          <p className="text-gray-400 text-[12px] mt-1">
            Join SkyMart and start your shopping journey.
          </p>

          <form onSubmit={handleSubmit(submitForm)} className="space-y-5 mt-5">
            {/* Name */}
            <div className="flex p-3 items-center rounded-2xl border border-white/10 bg-white/5 px-5 transition hover:border-lime-400">
              <User size={18} className="text-gray-400" />
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none px-3 text-white placeholder:text-gray-500"
              />
            </div>
            {errors.name && (
              <p className="text-red-600 relative bottom-5 left-2 text-xl font-semibold">
                {errors.name.message}
              </p>
            )}

            {/* Email */}
            <div className="flex p-3 items-center rounded-2xl border border-white/10 bg-white/5 px-5 transition hover:border-lime-400">
              <Mail size={18} className="text-gray-400" />
              <input
                {...register("email", {
                  required: "Please Enter Email..",
                  pattern: {
                    value: "/^[^\s@]+@[^\s@]+\.[^\s@]+$/",
                    message: "Enter Enter a valid email Address",
                  },
                })}
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent outline-none px-3 text-white placeholder:text-gray-500"
              />
            </div>
            {errors.email && (
              <p className="text-red-600  relative bottom-5 left-2 text-xl font-semibold">
                {errors.email.message}
              </p>
            )}
            <div className="flex items-center rounded-2xl border  bg-white/5 px-5 p-3 shadow-[0_0_20px_rgba(163,230,53,0.08)] hover:border-lime-400">
              <Lock size={18} className="text-gray-400" />
              <input
                {...register("number", {
                  required: "Number is required",
                  minLength: {
                    value: 10,
                    message: "minimum 10 digits required",
                  },
                  maxLength: {
                    value: 10,
                    message: "maximum 10 digits required",
                  },
                })}
                type="number"
                placeholder="Number"
                className="w-full bg-transparent outline-none px-3 hover: text-white placeholder:text-gray-500"
              />
            </div>
            {errors.number && (
              <p className="text-red-600 relative bottom-5 left-2 text-xl font-semibold">
                {errors.number.message}
              </p>
            )}

            {/* Password */}
            <div>
              <div className="flex items-center rounded-2xl border bg-white/5 px-5 p-3 shadow-[0_0_20px_rgba(163,230,53,0.08)] hover:border-lime-400">
                <Lock size={18} className="text-gray-400" />

                <input
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/",
                      message:
                        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent outline-none px-3 text-white placeholder:text-gray-500"
                />

                <Eye
                  size={18}
                  className="text-gray-500 cursor-pointer hover:text-lime-400"
                />
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              {password.length > 0 && (
                <div className="flex items-center gap-2 mt-2">
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 1 ? "bg-red-500" : "bg-zinc-700"
                    }`}
                  ></div>

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 2 ? "bg-yellow-500" : "bg-zinc-700"
                    }`}
                  ></div>

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 3 ? "bg-blue-500" : "bg-zinc-700"
                    }`}
                  ></div>

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 4 ? "bg-lime-400" : "bg-zinc-700"
                    }`}
                  ></div>

                  <span
                    className={`text-xs font-medium ${
                      strength <= 1
                        ? "text-red-500"
                        : strength === 2
                          ? "text-yellow-500"
                          : strength === 3
                            ? "text-blue-400"
                            : "text-lime-400"
                    }`}
                  >
                    {strength <= 1
                      ? "Weak"
                      : strength === 2
                        ? "Medium"
                        : strength === 3
                          ? "Good"
                          : "Strong"}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm */}
            <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 p-3 transition hover:border-lime-400">
              <Lock size={18} className="text-gray-400" />
              <input
                {...register("confirm", {
                  required: "Please Enter correct",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent outline-none px-3 text-white placeholder:text-gray-500"
              />
            </div>
            {errors.confirm && (
              <p className="text-red-600 relative bottom-5 left-2 text-xl font-semibold">
                {errors.confirm.message}
              </p>
            )}

            {/* Button */}
            <button className="group cursor-pointer active:scale-95 mt-3 flex p-2 w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(163,230,53,0.5)]">
              Create Account
              <ArrowRight className="transition group-hover:translate-x-1" />
            </button>

            {/* Login */}
            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <span className="cursor-pointer font-semibold text-lime-400 hover:underline">
                Sign In
              </span>
            </p>
          </form>
        </div>

        {/* Bottom Features */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <ShieldCheck className="mx-auto mb-2 text-lime-400" size={24} />
            <h3 className="text-white font-semibold text-sm">Secure</h3>
            <p className="text-xs text-gray-500 mt-1">100% Safe</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <BadgePercent className="mx-auto mb-2 text-lime-400" size={24} />
            <h3 className="text-white font-semibold text-sm">Best Deals</h3>
            <p className="text-xs text-gray-500 mt-1">Daily Offers</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <Headphones className="mx-auto mb-2 text-lime-400" size={24} />
            <h3 className="text-white font-semibold text-sm">Support</h3>
            <p className="text-xs text-gray-500 mt-1">24/7 Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
