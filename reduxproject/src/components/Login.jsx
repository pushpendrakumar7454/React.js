import React, { useState } from "react";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  Sparkles,
  Star,
  ArrowRight,
  LockKeyhole,
  PackageCheck,
  Zap,
  Globe,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/AuthSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {register,handleSubmit,reset,formState:{errors}}=useForm()
  const users=useSelector((state)=>state.auth.users)
  const dispatch=useDispatch()
 const navigate= useNavigate()


        const loginFormSubmit = (data) => {
        const user = users.find(
            (u) =>
            u.email === data.email &&
            u.password === data.password
        );

        if (user) {
          toast.success("User login Successfully",{
            position:"top-right",
            autoClose:1000
          })
            
            navigate('/')
            dispatch(loginUser(user));
            reset();

        } else {
            alert("Invalid Email or Password");
        }
        };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Animated Background */}

      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse"></div>

      <div className="absolute top-1/2 -right-40 h-[380px] w-[380px] rounded-full bg-blue-500/20 blur-[140px] animate-pulse"></div>

      <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-indigo-500/20 blur-[130px] animate-bounce"></div>

      {/* Floating Icons */}

      <ShoppingBag className="hidden lg:block absolute top-24 left-24 w-20 h-20 text-cyan-400/10 animate-bounce" />

      <Star className="hidden lg:block absolute right-32 top-40 w-16 h-16 text-blue-400/10 animate-pulse" />

      <Sparkles className="hidden lg:block absolute bottom-28 left-44 w-14 h-14 text-cyan-400/20 animate-spin [animation-duration:10s]" />

      {/* Main Wrapper */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-8">
        <div className="grid w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_70px_rgba(6,182,212,.15)] lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}

          <div className="relative hidden lg:flex overflow-hidden">
            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

            {/* Content */}

            <div className="relative z-10 flex flex-col justify-center p-14">
              {/* Logo */}

              <div className="flex items-center gap-4 mb-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 shadow-xl shadow-cyan-500/30">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h1 className="text-2xl font-semibold text-white">
                    Sky<span className="text-cyan-400">Cart</span>
                  </h1>

                  <p className="text-gray-400 text-sm">
                    Premium Shopping Experience
                  </p>
                </div>
              </div>

              {/* Heading */}

              <h2 className="text-3xl font-semibold leading-tight text-white">
                Welcome
                <br />
                Back To Your
                <span className="text-cyan-400"> Store.</span>
              </h2>

              <p className="mt-3 max-w-lg text-gray-400 leading-6">
                Continue your shopping journey with lightning fast checkout,
                secure payments and exclusive deals crafted just for you.
              </p>

              {/* Feature Cards */}

              <div className="mt-5 space-y-5">
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10">
                  <div className="rounded-xl bg-cyan-500/20 p-2">
                    <ShieldCheck className="text-cyan-400 w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Secure Login</h3>

                    <p className="text-sm text-gray-400">
                      Encrypted authentication.
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10">
                  <div className="rounded-xl bg-cyan-500/20 p-2">
                    <Truck className="text-cyan-400 w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Fast Delivery</h3>

                    <p className="text-sm text-gray-400">
                      Quick shipping worldwide.
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10">
                  <div className="rounded-xl bg-cyan-500/20 p-2">
                    <PackageCheck className="text-cyan-400 w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Trusted Products
                    </h3>

                    <p className="text-sm text-gray-400">
                      Quality checked items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE START ================= */}

          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="w-full max-w-md">
              {/* Mobile Logo */}

              <div className="flex justify-center lg:hidden mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 shadow-xl shadow-cyan-500/30">
                  <ShoppingBag className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>

              {/* Heading */}

              <h2 className="text-center text-2xl font-semibold text-white">
                Welcome Back 👋
              </h2>

              <p className="mt-2 pr-7 text-center text-sm text-gray-400">
                Login to continue shopping
              </p>

              <form className="mt-3 space-y-5" onSubmit={handleSubmit(loginFormSubmit)}>
                {/* Email */}

                <div>
                  <label className="mb-2 block text-lg font-medium text-gray-300">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                    <input
                    {...register('email',{
                        required:"Email is required"
                    })}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4  focus:ring-cyan-500/20"
                    />
                  </div>
                    {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

                </div>

                {/* Password */}

                <div>
                  <label className="mb-2 block text-lg font-medium text-gray-300">
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                    <input
                    {...register('password',{
                        required:"Password is required"
                    })}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 pl-12 pr-14 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                    {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

                </div>

                {/* Remember + Forgot */}

                <button
                  type="submit"
                  className="group cursor-pointer relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 p-3 font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/50"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

                  <span className="relative flex items-center gap-2">
                    Login
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                <div className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 py-3">
                  <Zap className="h-5 w-5 text-cyan-400" />

                  <p className="text-sm text-cyan-300">
                    Fast • Secure • Trusted
                  </p>
                </div>
              </form>

              {/* Bottom Link */}

              <p className="mt-8 text-center text-gray-400">
                Don't have an account?{" "}
                <span onClick={()=>navigate('/register')} className="cursor-pointer font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline">
                  Create Account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
