import React from "react";
import {
  Music2,
  Disc3,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Radio,
} from "lucide-react";
import { useForm } from "react-hook-form";



const Register = () => {


    const {register,reset,formState:{errors},handleSubmit,watch}= useForm()
    const password = watch("password");



    const submitForm=(data)=>{
        console.log(data);
        

    }




  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">
      {/* Animated Background */}

      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[130px] animate-pulse"></div>

      <div className="absolute top-1/2 -right-40 h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[130px] animate-pulse"></div>

      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-sky-500/20 blur-[120px] animate-bounce"></div>

      {/* Floating Icons */}

      <Disc3 className="hidden lg:block absolute top-24 left-24 text-cyan-400/20 w-20 h-20 animate-spin [animation-duration:12s]" />

      <Music2 className="hidden lg:block absolute bottom-24 left-40 text-indigo-400/20 w-16 h-16 animate-bounce" />

      <Radio className="hidden lg:block absolute top-40 right-24 text-sky-400/20 w-16 h-16 animate-pulse" />

      {/* Main Container */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(6,182,212,.15)] lg:grid-cols-2">
          {/* Left Side */}

          <div className="relative hidden lg:flex flex-col justify-center overflow-hidden p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10"></div>

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/30">
                  <Music2 className="h-4 w-4 text-white" />
                </div>

                <div>
                  <h1 className="text-2xl font-semibold text-white">
                    Sky<span className="text-cyan-400">Cart</span>
                  </h1>

                  <p className="mt-1 text-gray-400 text-sm">
                    Create your premium account
                  </p>
                </div>
              </div>

              <h2 className="max-w-md text-3xl font-semibold leading-tight text-white">
                Shop Faster,
                <br />
                Smarter &<span className="text-cyan-400"> Better.</span>
              </h2>

              <p className="mt-3 max-w-lg text-gray-400 text-sm leading-5">
                Discover premium products with secure checkout, lightning-fast
                delivery and an elegant shopping experience designed for
                everyone.
              </p>

              <div className="mt-4 space-y-5">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-500/40 transition">
                  <ShieldCheck className="h-7 w-7 text-cyan-400" />

                  <div>
                    <h3 className="font-semibold text-white">Secure Account</h3>

                    <p className="text-sm text-gray-400">
                      Your data stays protected.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-500/40 transition">
                  <Headphones className="h-7 w-7 text-cyan-400" />

                  <div>
                    <h3 className="font-semibold text-white">24/7 Support</h3>

                    <p className="text-sm text-gray-400">
                      Always here to help you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Starts Here */}
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="w-full max-w-md">
              {/* Mobile Logo */}

              <div className="flex justify-center lg:hidden mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/30">
                  <Music2 className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white text-center">
                Create Account
              </h2>

              <p className="mt-1 text-center text-gray-400">
                Join SkyCart in seconds
              </p>

              <form className="mt-4 space-y-4">
                {/* Full Name */}

                <div>
                  <label className="mb-1 block text-sm text-gray-300">
                    Full Name
                  </label>

                  <input
                  {...register('name',{
                    required:"Name is required"
                  })}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                  />
                </div>
                {errors.name && (<p className="text-red-500">{errors.name.message}</p>)}

                {/* Email */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Email Address
                  </label>

                  <input
                   {...register('email',{
                    required:"Email is required"
                   })}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                  />
                </div>
                {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

                {/* Password */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Password
                  </label>

                  <input
                  {...register('passord'),{
                    required:"passord is required"
                  }}
                    type="password"
                    placeholder="Create password"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                  />
                </div>
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

                {/* Confirm Password */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Confirm Password
                  </label>

                  <input
                  {...register('confirm',{
                    required:"confirm is required",
                    validate:(value)=>{
                        value===password || "password do not match"
                    }
                  }
                )}
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                  />
                </div>
                {errors.confirm && (<p className="text-red-500">{errors.confirm.message}</p>)}
               

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 p-3 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
                >
                  Create Account
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* Login */}

              <p className="mt-3 text-center text-gray-400">
                Already have an account?{" "}
                <span className="cursor-pointer font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline">
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
