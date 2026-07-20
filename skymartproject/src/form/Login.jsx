import { ArrowRight, Bolt, Eye, Mail, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyStore } from "../constext/MyContext";
import { toast } from "react-toastify";

const Login = () => {
  let naviagte = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { users, setCurrentUser } = useContext(MyStore);

  const formSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);

    if (user) {
      toast.success("Successfully Logged In!", {
        position: "top-center",
        autoClose: 2000,
      });
      naviagte("/");
    } else {
      toast.error("Please ENter valid Email and password", {
        position: "top-center",
        autoClose: 2000,
      });
    }

    reset();
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* ================= LEFT ================= */}

        <div className="hidden lg:flex relative flex-col justify-between p-20 border-r border-white/10">
          {/* Background Glow */}

          <div className="absolute left-24 top-40 h-72 w-72 rounded-full bg-lime-500/10 blur-[130px]" />

          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-lime-400/5 blur-[160px]" />

          {/* Logo */}

          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-black shadow-lg shadow-lime-500/40">
              <Bolt size={20} />
            </div>

            <h1 className="text-2xl font-semibold tracking-wide">
              Sky<span className="text-lime-400">Mart</span>
            </h1>
          </div>

          {/* Hero */}

          <div className="relative max-w-xl">
            <span className="mb-5 inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold tracking-[4px] text-lime-300">
              WELCOME BACK
            </span>

            <h2 className="text-5xl font-semibold leading-tight">
              Shop the future.
              <br />
              <span className="text-lime-400">Today.</span>
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Thousands of premium products, lightning-fast delivery and
              exclusive offers crafted for your lifestyle.
            </p>
          </div>

          {/* Stats */}

          <div className="relative mt-10 grid grid-cols-3 gap-6">
            {[
              ["20K+", "Products"],
              ["50K+", "Customers"],
              ["4.9★", "Ratings"],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition duration-300 hover:border-lime-400 hover:-translate-y-2 hover:bg-lime-400/5"
              >
                <h3 className="text-2xl font-semibold text-lime-400">
                  {item[0]}
                </h3>

                <p className="mt-2 text-zinc-400">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
        {/* ================= RIGHT ================= */}

        <div className="relative flex min-h-screen items-center justify-center p-5 sm:p-8 lg:p-10">
          {/* Background Glow */}
          <div className="absolute h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px] rounded-full bg-lime-500/10 blur-[150px]" />

          {/* Login Card */}
          <div className="relative w-full max-w-md rounded-[22px] lg:rounded-[35px] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,.6)]">
            <div className="mb-8 lg:mb-10">
              <h2 className="text-3xl lg:text-4xl font-semibold">Sign in</h2>

              <p className="text-sm lg:text-base text-zinc-400">
                Enter your credentials to continue
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(formSubmit)}>
              {/* Email */}

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-[#FFF8C9] p-3 pl-12 lg:pl-14 pr-4 text-black outline-none transition focus:border-lime-400"
                />
              </div>

              {errors.email && (
                <p className="relative -mt-4 ml-2 text-sm sm:text-base lg:text-xl font-semibold text-red-600">
                  {errors.email.message}
                </p>
              )}

              {/* Password */}

              <div className="relative">
                <ShieldCheck
                  size={18}
                  className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  {...register("password", {
                    required: "Please enter correct password",
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-2xl border border-white/10 bg-[#FFF8C9] p-3 pl-12 lg:pl-14 pr-12 lg:pr-14 text-black outline-none"
                />

                <Eye
                  size={18}
                  className="absolute right-4 lg:right-5 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-500"
                />
              </div>

              {errors.password && (
                <p className="relative -mt-4 ml-2 text-sm sm:text-base lg:text-xl font-semibold text-red-600">
                  {errors.password.message}
                </p>
              )}

              {/* Button */}

              <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 p-3 font-bold text-black transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(163,230,53,.45)] active:scale-95 cursor-pointer">
                Sign in
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}

            <div className="my-5 flex items-center">
              <div className="h-px flex-1 bg-white/10" />

              <span className="mx-4 text-sm text-zinc-500">OR</span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google */}

            <button className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              Continue with Google
            </button>

            {/* Register */}

            <p className="mt-5 text-center text-sm lg:text-base text-zinc-400">
              Don't have an account?
              <span
                onClick={() => naviagte("/register")}
                className="ml-2 cursor-pointer font-semibold text-lime-400 hover:underline"
              >
                Register here..
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
