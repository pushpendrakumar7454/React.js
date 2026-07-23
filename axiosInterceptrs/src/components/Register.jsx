import { useAuth } from "../hooks/useAuth";

const Register = () => {

  const{register,errors,handleSubmit, subitRegisterForm,watch,}=useAuth()




  return (
    <div className="scroll-hidden flex items-center justify-center bg-gray-100 p-2">
      <div className="w-110 h-155 m-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Register to get started
        </p>

        <form className="space-y-5"  onSubmit={handleSubmit(subitRegisterForm)}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
            {...register("name",{
                required:"Name is required"
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
            {...register("email",{
                required:"Email is required"
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
            {...register('password',{
                required:"password is required"
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           {errors.password && <p className="text-red-600">{errors.password.message}</p>}

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
           {...register('confirm',{
            required:"confirm password is required",
            validate:( value)=>{
                return value===watch('password') || "Password do not match"
            }
           })}
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           {errors.confirm && <p className="text-red-600">{errors.confirm.message}</p>}

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
