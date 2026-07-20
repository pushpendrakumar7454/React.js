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
import { MyStore } from "../constext/MyContext";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const navigate = useNavigate();

  const { setUsers, users } = useContext(MyStore);

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
    let oldUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = [...oldUsers, data];

    localStorage.setItem("users", JSON.stringify(newUser));
    setUsers(newUser);

    toast.success("Registration Successful!", {
      position: "top-center",
      autoClose: 2000,
    });
    navigate("/login");
    reset();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090909] flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-10">
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-64 w-64 md:h-80 md:w-80 rounded-full bg-lime-500/20 blur-[120px] md:blur-[140px]" />
      <div className="absolute -right-40 bottom-20 h-64 w-64 md:h-80 md:w-80 rounded-full bg-lime-400/10 blur-[120px] md:blur-[140px]" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:45px_45px]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="flex h-10 w-10 md:h-8 md:w-8 items-center justify-center rounded-xl bg-lime-400 shadow-[0_0_35px_rgba(163,230,53,0.5)]">
            <Zap size={20} className="text-black fill-black" />
          </div>

          <h1 className="text-2xl md:text-2xl font-semibold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-[0_0_80px_rgba(163,230,53,0.08)]">
          <h2 className="text-xl font-semibold text-white">Create Account</h2>

          <p className="mt-1 text-xs text-gray-400">
            Join SkyMart and start your shopping journey.
          </p>

          <form
            onSubmit={handleSubmit(submitForm)}
            className="space-y-4 md:space-y-5 mt-5"
          >
            {/* Name */}
            <div>
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 md:px-5 py-3 transition hover:border-lime-400">
                <User size={18} className="text-gray-400" />

                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent px-3 text-sm md:text-base text-white outline-none placeholder:text-gray-500"
                />
              </div>

              {errors.name && (
                <p className="mt-2 ml-2 text-sm md:text-base font-medium text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 md:px-5 py-3 transition hover:border-lime-400">
                <Mail size={18} className="text-gray-400" />

                <input
                  {...register("email", {
                    required: "Please Enter Email..",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid Email Address",
                    },
                  })}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent px-3 text-sm md:text-base text-white outline-none placeholder:text-gray-500"
                />
              </div>

              {errors.email && (
                <p className="mt-2 ml-2 text-sm md:text-base font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Number */}
            <div>
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 md:px-5 py-3 transition hover:border-lime-400">
                <Lock size={18} className="text-gray-400" />

                <input
                  {...register("number", {
                    required: "Number is required",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 digits required",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximum 10 digits required",
                    },
                  })}
                  type="number"
                  placeholder="Number"
                  className="w-full bg-transparent outline-none px-3 text-sm md:text-base text-white placeholder:text-gray-500"
                />
              </div>

              {errors.number && (
                <p className="mt-2 ml-2 text-sm md:text-base font-medium text-red-500">
                  {errors.number.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 md:px-5 py-3 transition hover:border-lime-400">
                <Lock size={18} className="text-gray-400" />

                <input
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must be at least 8 characters and include uppercase, lowercase, number and special character.",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent outline-none px-3 text-sm md:text-base text-white placeholder:text-gray-500"
                />

                <Eye
                  size={18}
                  className="cursor-pointer text-gray-500 transition hover:text-lime-400"
                />
              </div>

              {errors.password && (
                <p className="mt-2 ml-2 text-sm md:text-base font-medium text-red-500">
                  {errors.password.message}
                </p>
              )}

              {password.length > 0 && (
                <div className="mt-3 flex items-center gap-2">
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 1 ? "bg-red-500" : "bg-zinc-700"
                    }`}
                  />

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 2 ? "bg-yellow-500" : "bg-zinc-700"
                    }`}
                  />

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 3 ? "bg-blue-500" : "bg-zinc-700"
                    }`}
                  />

                  <div
                    className={`h-1 flex-1 rounded-full ${
                      strength >= 4 ? "bg-lime-400" : "bg-zinc-700"
                    }`}
                  />

                  <span
                    className={`text-[11px] md:text-xs font-medium whitespace-nowrap ${
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
            {/* Confirm Password */}
            <div>
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 md:px-5 py-3 transition hover:border-lime-400">
                <Lock size={18} className="text-gray-400" />

                <input
                  {...register("confirm", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-transparent outline-none px-3 text-sm md:text-base text-white placeholder:text-gray-500"
                />
              </div>

              {errors.confirm && (
                <p className="mt-2 ml-2 text-sm md:text-base font-medium text-red-500">
                  {errors.confirm.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="group mt-2 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-lime-400 py-3 text-base md:text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] active:scale-95"
            >
              Create Account
              <ArrowRight className="transition group-hover:translate-x-1" />
            </button>

            {/* Login */}
            <p className="text-center text-sm md:text-base text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="cursor-pointer font-semibold text-lime-400 hover:underline"
              >
                Sign In
              </span>
            </p>
          </form>
        </div>

        {/* Bottom Features */}
        <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4 text-center">
            <ShieldCheck className="mx-auto mb-2 text-lime-400" size={20} />
            <h3 className="text-xs md:text-sm font-semibold text-white">
              Secure
            </h3>
            <p className="mt-1 text-[10px] md:text-xs text-gray-500">
              100% Safe
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4 text-center">
            <BadgePercent className="mx-auto mb-2 text-lime-400" size={20} />
            <h3 className="text-xs md:text-sm font-semibold text-white">
              Best Deals
            </h3>
            <p className="mt-1 text-[10px] md:text-xs text-gray-500">
              Daily Offers
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4 text-center">
            <Headphones className="mx-auto mb-2 text-lime-400" size={20} />
            <h3 className="text-xs md:text-sm font-semibold text-white">
              Support
            </h3>
            <p className="mt-1 text-[10px] md:text-xs text-gray-500">
              24/7 Help
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
