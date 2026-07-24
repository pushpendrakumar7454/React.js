import React from "react";
import {
  Music2,
  Disc3,
  Headphones,
  PlayCircle,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-[#050505] text-white">

      {/* Animated Background */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-green-500/20 blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[160px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[150px]"></div>

      {/* Floating Icons */}

      <Music2 className="hidden lg:block absolute top-20 left-24 w-8 h-8 text-green-500/50 animate-bounce" />

      <Disc3 className="hidden lg:block absolute bottom-32 left-40 w-10 h-10 text-white/20 animate-spin [animation-duration:10s]" />

      <Headphones className="hidden lg:block absolute top-40 right-[48%] w-9 h-9 text-green-400/40 animate-pulse" />

      <PlayCircle className="hidden lg:block absolute bottom-24 right-[45%] w-10 h-10 text-white/20 animate-bounce" />

      <div className="grid h-full lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <div className="relative hidden lg:flex items-center justify-center px-14">

          <div className="max-w-lg">

            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[11px]">

              <Music2 className="w-4 h-4 text-green-400" />

              Unlimited Music Experience

            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight">

              Feel Every

              <br />

              <span className="text-green-400">
                Beat.
              </span>

            </h1>

            <p className="mt-6 text-sm leading-7 text-gray-400">

              Discover millions of songs, albums and playlists.

              Stream without limits, create your own collection,

              and enjoy premium quality music anywhere.

            </p>

            <div className="mt-10 grid grid-cols-3 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-2xl font-bold text-green-400">
                  50M+
                </p>

                <p className="mt-1 text-[11px] text-gray-400">
                  Songs
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-2xl font-bold text-green-400">
                  8M+
                </p>

                <p className="mt-1 text-[11px] text-gray-400">
                  Artists
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-2xl font-bold text-green-400">
                  HD
                </p>

                <p className="mt-1 text-[11px] text-gray-400">
                  Audio
                </p>

              </div>

            </div>

            <div className="mt-12 flex items-center gap-4">

              <button className="rounded-full bg-green-500 px-7 py-3 text-xs font-semibold transition hover:scale-105 hover:bg-green-400">

                Explore Music

              </button>

              <button className="rounded-full border border-white/10 px-7 py-3 text-xs transition hover:border-green-500">

                Premium

              </button>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center justify-center px-5">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-3xl">

            <div className="mb-8 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500">

                <Music2 className="w-7 h-7" />

              </div>

              <h2 className="mt-5 text-2xl font-bold">

                Welcome Back

              </h2>

              <p className="mt-2 text-xs text-gray-400">

                Login to continue listening.

              </p>

            </div>

            {/* Email */}

            <div className="mb-4">

              <label className="mb-2 block text-[11px] text-gray-300">

                Email

              </label>

              <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                <Mail className="h-4 w-4 text-gray-500" />

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent px-3 py-3 text-xs outline-none placeholder:text-gray-500"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-[11px] text-gray-300">

                Password

              </label>

              <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                <Lock className="h-4 w-4 text-gray-500" />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-transparent px-3 py-3 text-xs outline-none placeholder:text-gray-500"
                />

              </div>

            </div>

            <div className="mt-3 flex items-center justify-between">

              <label className="flex items-center gap-2 text-[11px] text-gray-400">

                <input
                  type="checkbox"
                  className="accent-green-500"
                />

                Remember me

              </label>

              <button className="text-[11px] text-green-400 hover:text-green-300">

                Forgot?

              </button>

            </div>

            <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-xs font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-green-400">

              Login

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

            </button>

            <div className="my-6 flex items-center">

              <div className="h-px flex-1 bg-white/10"></div>

              <span className="px-4 text-[10px] text-gray-500">

                OR

              </span>

              <div className="h-px flex-1 bg-white/10"></div>

            </div>

            <button className="w-full rounded-xl border border-white/10 py-3 text-xs transition hover:border-green-500 hover:bg-white/5">

              Continue with Google

            </button>

            <p className="mt-7 text-center text-[11px] text-gray-400">

              Don't have an account?

              <span className="ml-1 cursor-pointer font-semibold text-green-400 hover:text-green-300">

                Sign Up

              </span>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;