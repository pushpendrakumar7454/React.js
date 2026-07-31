import React from 'react'
import { useAuth } from '../hooks/authHooks'



const Login = () => {


    const {navigate,handleSubmit,register,errors,loginFrom}=useAuth()
       
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back 👋
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Login to continue
                </p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit(loginFrom)}>

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
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                    </div>
                      {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <button
                            type="button"
                            className="text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer active:scale-95 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-gray-600 mt-6">
                    Don't have an account?
                    <span onClick={()=>navigate('/register')} className="text-blue-600 cursor-pointerr cursor-pointer hover:underline ml-1">
                        Register
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Login