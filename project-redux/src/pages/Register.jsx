import React from 'react'
import { useAuth } from '../hooks/authHooks'


const Register = () => {

   
    const {navigate,register,registerSubmit,errors,handleSubmit,watch}=useAuth()
    const  password=watch("password")

  
  
   
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Create Account 🚀
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Register to get started
                </p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit(registerSubmit)}>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                        {...register("name",{
                            required:"name is reequired"
                        })}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                        {...register("email",{
                            required:"email is reequired"
                        })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>
                      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                        {...register("password",{
                            required:"password is required"
                        })}
                            type="password"
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>
                      {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>

                        <input
                        {...register("confirm",{
                            required:"confirm password is reequired",
                            validate:(value)=>{
                                return  value===password || "password do not match"
                            }
                        })}
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>
                      {errors.confirm && <p className='text-red-500'>{errors.confirm.message}</p>}

                    <button
                        type="submit"
                        className="w-full cursor-pointer active:scale-95 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Create Account
                    </button>

                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <span onClick={()=>navigate("/login")}  className="text-blue-600 cursor-pointer active:scale-95 cursor-pointer hover:underline ml-1">
                        Login
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Register
