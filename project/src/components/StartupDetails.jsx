import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaArrowLeft,
  FaBookmark,
  FaHeart,
  FaShareAlt,
  FaChartLine,
  FaFire,
  FaUsers,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

const StartupDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { startups } = useSelector((state) => state.startup);

  const startup = startups.find((item) => item.id == id);

  if (!startup) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">

        <h1 className="text-4xl font-bold text-white">

          Startup Not Found 🚀

        </h1>

      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712]">

      {/* ================================================= */}

      {/* Animated Background */}

      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px] animate-pulse"></div>

        <div className="absolute right-20 top-40 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[170px] animate-pulse"></div>

        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-[140px] animate-pulse"></div>

      </div>

      {/* ================= STARS ================= */}

      <div className="absolute inset-0">

        {[...Array(80)].map((_, index) => (

          <motion.div

            key={index}

            animate={{
              opacity: [0.2, 1, 0.2],
              y: [0, -20, 0],
            }}

            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 5,
              delay: Math.random() * 4,
            }}

            className="absolute h-[2px] w-[2px] rounded-full bg-white"

            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}

          />

        ))}

      </div>

      {/* ================================================= */}

      {/* MAIN */}

      {/* ================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10">

        {/* Back Button */}

        <motion.button

          whileHover={{
            x: -5,
          }}

          whileTap={{
            scale: 0.95,
          }}

          onClick={() => navigate(-1)}

          className="mb-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl hover:border-cyan-500 transition"

        >

          <FaArrowLeft />

          Back

        </motion.button>

        {/* ================================================= */}

        {/* HERO */}

        {/* ================================================= */}

        <motion.section

          initial={{
            opacity: 0,
            y: 80,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl"

        >

          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-600/10"></div>

          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"></div>

          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[130px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16">

            {/* ================================= */}

            {/* LEFT */}

            {/* ================================= */}

            <div>

              <motion.div

                initial={{ scale: .8 }}

                animate={{ scale: 1 }}

                transition={{ duration: .6 }}

                className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2"

              >

                <FaRocket className="text-cyan-400" />

                <span className="text-cyan-400 font-semibold">

                  {startup.category}

                </span>

              </motion.div>

              <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white">

                {startup.title}

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">

                {startup.description}

              </p>
                            {/* ===============================
                      Founder Info
              ================================ */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .3 }}
                className="mt-10 flex flex-wrap items-center gap-5"
              >

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-2xl font-bold text-white shadow-lg">

                    {startup.founder.charAt(0)}

                  </div>

                  <div>

                    <p className="text-sm text-slate-400">

                      Founder

                    </p>

                    <h3 className="text-xl font-bold text-white">

                      {startup.founder}

                    </h3>

                  </div>

                </div>

                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4">

                  <p className="text-sm text-green-300">

                    Startup Stage

                  </p>

                  <h3 className="text-xl font-bold text-white">

                    {startup.stage}

                  </h3>

                </div>

              </motion.div>

              {/* ===============================
                      Action Buttons
              ================================ */}

              <div className="mt-12 flex flex-wrap gap-5">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .95 }}
                  className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 px-7 py-4 font-bold text-white shadow-xl"
                >

                  <FaHeart />

                  {startup.likes} Likes

                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .95 }}
                  className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-7 py-4 font-semibold text-cyan-300"
                >

                  <FaBookmark />

                  Save Startup

                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .95 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white"
                >

                  <FaShareAlt />

                  Share

                </motion.button>

              </div>

            </div>

            {/* =========================================
                    RIGHT SIDE PREMIUM PANEL
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: .4 }}
              className="relative flex items-center justify-center"
            >

              {/* Glow */}

              <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[150px]"></div>

              {/* Main Card */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="relative w-full max-w-md overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 shadow-2xl"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-600/10"></div>

                <div className="relative z-10">

                  {/* Rocket */}

                  <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_80px_rgba(6,182,212,.5)]">

                    <FaRocket className="text-6xl text-white" />

                  </div>

                  <h2 className="mt-8 text-center text-3xl font-black text-white">

                    Startup Overview

                  </h2>

                  <p className="mt-3 text-center leading-8 text-slate-300">

                    Turning innovative ideas into scalable businesses through
                    technology, collaboration and smart execution.

                  </p>

                  {/* Stats */}

                  <div className="mt-10 grid grid-cols-2 gap-5">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                      <FaFire className="mx-auto text-3xl text-orange-400" />

                      <h3 className="mt-3 text-2xl font-bold text-white">

                        {startup.likes}

                      </h3>

                      <p className="mt-1 text-slate-400">

                        Likes

                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                      <FaUsers className="mx-auto text-3xl text-cyan-400" />

                      <h3 className="mt-3 text-2xl font-bold text-white">

                        125+

                      </h3>

                      <p className="mt-1 text-slate-400">

                        Applicants

                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                      <FaChartLine className="mx-auto text-3xl text-green-400" />

                      <h3 className="mt-3 text-2xl font-bold text-white">

                        87%

                      </h3>

                      <p className="mt-1 text-slate-400">

                        Growth

                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                      <FaRocket className="mx-auto text-3xl text-purple-400" />

                      <h3 className="mt-3 text-2xl font-bold text-white">

                        MVP

                      </h3>

                      <p className="mt-1 text-slate-400">

                        Status

                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </motion.section>
                {/* =====================================================
                        ABOUT • PROBLEM • SOLUTION
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-24 grid xl:grid-cols-2 gap-8"
        >

          {/* ================= ABOUT ================= */}

          <motion.div

            whileHover={{
              y: -8
            }}

            className="group relative overflow-hidden rounded-[35px] border border-cyan-500/20 bg-white/5 backdrop-blur-3xl p-10"

          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl">

                  🚀

                </div>

                <div>

                  <p className="uppercase tracking-[6px] text-cyan-400 text-sm">

                    About Startup

                  </p>

                  <h2 className="mt-2 text-4xl font-black text-white">

                    Vision

                  </h2>

                </div>

              </div>

              <p className="mt-8 text-lg leading-10 text-slate-300">

                {startup.description}

              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-slate-400">

                    Category

                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">

                    {startup.category}

                  </h3>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-slate-400">

                    Stage

                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">

                    {startup.stage}

                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ================= PROBLEM ================= */}

          <motion.div

            whileHover={{
              y: -8
            }}

            className="group relative overflow-hidden rounded-[35px] border border-red-500/20 bg-white/5 backdrop-blur-3xl p-10"

          >

            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20 text-3xl">

                  ⚠️

                </div>

                <div>

                  <p className="uppercase tracking-[6px] text-red-400 text-sm">

                    Problem

                  </p>

                  <h2 className="mt-2 text-4xl font-black text-white">

                    Challenge

                  </h2>

                </div>

              </div>

              <p className="mt-8 text-lg leading-10 text-slate-300">

                {startup.problem}

              </p>

              <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">

                <h3 className="text-xl font-bold text-white">

                  Why does this matter?

                </h3>

                <p className="mt-4 leading-8 text-slate-300">

                  Every successful startup begins by solving a real-world
                  problem. Identifying the pain point is the first step
                  toward creating a scalable product.

                </p>

              </div>

            </div>

          </motion.div>

        </motion.section>



        {/* =====================================================
                        SOLUTION SECTION
        ====================================================== */}

        <motion.section

          initial={{
            opacity:0,
            y:70
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="mt-10"

        >

          <div className="relative overflow-hidden rounded-[40px] border border-green-500/20 bg-white/5 backdrop-blur-3xl p-10">

            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 text-3xl">

                  💡

                </div>

                <div>

                  <p className="uppercase tracking-[6px] text-green-400 text-sm">

                    Solution

                  </p>

                  <h2 className="mt-2 text-4xl font-black text-white">

                    Our Approach

                  </h2>

                </div>

              </div>

              <p className="mt-10 text-lg leading-10 text-slate-300">

                {startup.solution}

              </p>

              <div className="mt-12 grid md:grid-cols-3 gap-6">

                <motion.div
                  whileHover={{
                    y:-10
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7"
                >

                  <div className="text-5xl">

                    ⚡

                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">

                    Fast

                  </h3>

                  <p className="mt-3 leading-8 text-slate-400">

                    High performance architecture with modern technologies.

                  </p>

                </motion.div>

                <motion.div
                  whileHover={{
                    y:-10
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7"
                >

                  <div className="text-5xl">

                    🌍

                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">

                    Scalable

                  </h3>

                  <p className="mt-3 leading-8 text-slate-400">

                    Built to support thousands of users without compromising
                    speed or quality.

                  </p>

                </motion.div>

                <motion.div
                  whileHover={{
                    y:-10
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7"
                >

                  <div className="text-5xl">

                    🔒

                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">

                    Secure

                  </h3>

                  <p className="mt-3 leading-8 text-slate-400">

                    Security-first approach with reliable and trusted
                    infrastructure.

                  </p>

                </motion.div>

              </div>

            </div>

          </div>

        </motion.section>
                {/* ===========================================================
                        TECHNOLOGY STACK
        ============================================================ */}

        <motion.section
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="text-center">

            <p className="uppercase tracking-[8px] text-cyan-400">

              Technology

            </p>

            <h2 className="mt-4 text-5xl font-black text-white">

              Built With Modern Technologies

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">

              We use cutting-edge technologies to build secure, scalable and
              high-performance digital products.

            </p>

          </div>

          <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-7">

            {startup.technology
              ?.split(",")
              .map((tech, index) => (

                <motion.div

                  key={index}

                  whileHover={{
                    y:-10,
                    scale:1.03,
                    rotate:-1
                  }}

                  className="group relative overflow-hidden rounded-[35px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-3xl
                  p-8"

                >

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative z-10">

                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-4xl shadow-xl">

                      ⚡

                    </div>

                    <h3 className="mt-8 text-3xl font-black text-white">

                      {tech.trim()}

                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">

                      Modern, scalable and production ready technology used
                      inside this startup ecosystem.

                    </p>

                    <button
                      className="mt-8 rounded-xl bg-cyan-500/10 px-5 py-3 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition"
                    >

                      Learn More

                    </button>

                  </div>

                </motion.div>

              ))}

          </div>

        </motion.section>



        {/* ===========================================================
                        TEAM SECTION
        ============================================================ */}

        <motion.section

          initial={{ opacity:0,y:70 }}

          whileInView={{ opacity:1,y:0 }}

          transition={{ duration:.8 }}

          viewport={{ once:true }}

          className="mt-24"

        >

          <div className="grid xl:grid-cols-2 gap-10">

            {/* LEFT */}

            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-10">

              <p className="uppercase tracking-[8px] text-cyan-400">

                Hiring

              </p>

              <h2 className="mt-4 text-5xl font-black text-white">

                Team Required

              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-400">

                We're looking for passionate developers, designers and AI
                engineers to build something extraordinary.

              </p>

              <div className="mt-10 space-y-5">

                {[
                  startup.team,
                  "UI/UX Designer",
                  "Backend Developer",
                  "AI Engineer",
                ].map((item,index)=>(

                  <motion.div

                    key={index}

                    whileHover={{
                      x:10
                    }}

                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6"

                  >

                    <div>

                      <h3 className="text-2xl font-bold text-white">

                        {item}

                      </h3>

                      <p className="mt-2 text-slate-400">

                        Full Time Position

                      </p>

                    </div>

                    <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">

                      Open

                    </span>

                  </motion.div>

                ))}

              </div>

            </div>



            {/* RIGHT */}

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-600/10 backdrop-blur-3xl p-10">

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"></div>

              <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]"></div>

              <div className="relative z-10">

                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_90px_rgba(34,211,238,.5)]">

                  👨‍💻

                </div>

                <h2 className="mt-10 text-center text-5xl font-black text-white">

                  Join Our Team

                </h2>

                <p className="mt-6 text-center text-lg leading-9 text-slate-300">

                  Work with talented founders, designers and engineers to
                  create the next unicorn startup.

                </p>

                <div className="mt-12 grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">

                    <h3 className="text-4xl font-black text-cyan-400">

                      12+

                    </h3>

                    <p className="mt-3 text-slate-400">

                      Open Roles

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">

                    <h3 className="text-4xl font-black text-green-400">

                      150+

                    </h3>

                    <p className="mt-3 text-slate-400">

                      Applicants

                    </p>

                  </div>

                </div>

                <motion.button

                  whileHover={{
                    scale:1.05
                  }}

                  whileTap={{
                    scale:.95
                  }}

                  className="mt-10 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-5 text-xl font-bold text-white shadow-2xl"

                >

                  Apply For Team 🚀

                </motion.button>

              </div>

            </div>

          </div>

        </motion.section>
                {/* =====================================================
                    FUNDING & STARTUP ANALYTICS
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="grid xl:grid-cols-2 gap-8">

            {/* ==========================================
                        FUNDING CARD
            ========================================== */}

            <motion.div

              whileHover={{
                y:-8
              }}

              className="relative overflow-hidden rounded-[40px]
              border border-green-500/20
              bg-white/5
              backdrop-blur-3xl
              p-10"

            >

              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="uppercase tracking-[7px] text-green-400">

                      Funding Goal

                    </p>

                    <h2 className="mt-3 text-5xl font-black text-white">

                      ₹ {startup.funding}

                    </h2>

                  </div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500/20 text-5xl">

                    💰

                  </div>

                </div>

                <div className="mt-14">

                  <div className="flex justify-between mb-3">

                    <span className="text-slate-400">

                      Raised

                    </span>

                    <span className="text-green-400 font-bold">

                      72%

                    </span>

                  </div>

                  <div className="h-5 overflow-hidden rounded-full bg-slate-800">

                    <motion.div

                      initial={{
                        width:0
                      }}

                      whileInView={{
                        width:"72%"
                      }}

                      transition={{
                        duration:2
                      }}

                      className="h-full rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-indigo-500"

                    />

                  </div>

                </div>

                <div className="mt-10 grid grid-cols-2 gap-5">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                    <p className="text-slate-400">

                      Raised

                    </p>

                    <h2 className="mt-2 text-3xl font-black text-green-400">

                      ₹7.2L

                    </h2>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                    <p className="text-slate-400">

                      Investors

                    </p>

                    <h2 className="mt-2 text-3xl font-black text-cyan-400">

                      42

                    </h2>

                  </div>

                </div>

              </div>

            </motion.div>



            {/* ==========================================
                    LIVE ANALYTICS
            ========================================== */}

            <motion.div

              whileHover={{
                y:-8
              }}

              className="relative overflow-hidden rounded-[40px]
              border border-cyan-500/20
              bg-white/5
              backdrop-blur-3xl
              p-10"

            >

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-600/10"></div>

              <div className="relative z-10">

                <p className="uppercase tracking-[7px] text-cyan-400">

                  Live Analytics

                </p>

                <h2 className="mt-3 text-5xl font-black text-white">

                  Performance

                </h2>

                <div className="mt-12 space-y-6">

                  {[
                    {
                      title:"Profile Views",
                      value:"18.4K",
                      color:"cyan"
                    },
                    {
                      title:"Startup Likes",
                      value:startup.likes,
                      color:"pink"
                    },
                    {
                      title:"Applications",
                      value:"126",
                      color:"green"
                    },
                    {
                      title:"Followers",
                      value:"3.9K",
                      color:"purple"
                    }

                  ].map((item,index)=>(

                    <motion.div

                      key={index}

                      whileHover={{
                        x:10
                      }}

                      className="rounded-2xl border border-white/10 bg-white/5 p-6"

                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-slate-400">

                            {item.title}

                          </p>

                          <h2 className="mt-2 text-3xl font-black text-white">

                            {item.value}

                          </h2>

                        </div>

                        <div className="text-4xl">

                          📈

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </motion.section>



        {/* =====================================================
                    ANALYTICS CARDS
        ====================================================== */}

        <motion.section

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="mt-20"

        >

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              {
                icon:"❤️",
                value:startup.likes,
                title:"Total Likes"
              },
              {
                icon:"👁",
                value:"24.8K",
                title:"Views"
              },
              {
                icon:"💬",
                value:"189",
                title:"Comments"
              },
              {
                icon:"⭐",
                value:"4.9",
                title:"Rating"
              }

            ].map((item,index)=>(

              <motion.div

                key={index}

                whileHover={{
                  y:-12,
                  scale:1.04
                }}

                className="group overflow-hidden rounded-[35px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8"

              >

                <div className="text-6xl">

                  {item.icon}

                </div>

                <h2 className="mt-6 text-5xl font-black text-white">

                  {item.value}

                </h2>

                <p className="mt-3 text-lg text-slate-400">

                  {item.title}

                </p>

                <div className="mt-8 h-2 rounded-full bg-slate-800">

                  <motion.div

                    initial={{
                      width:0
                    }}

                    whileInView={{
                      width:"80%"
                    }}

                    transition={{
                      duration:1.5
                    }}

                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"

                  />

                </div>

              </motion.div>

            ))}

          </div>

        </motion.section>