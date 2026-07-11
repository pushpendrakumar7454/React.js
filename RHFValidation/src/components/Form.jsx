import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
import { useState } from "react";

const Form = ({setUsers,users,settoggle,updateUser}) => {

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues:updateUser
   
  });


 const summitForm=(data)=>{
  if(updateUser){
    setUsers((prev)=>{
      const updateUsers=prev.map((val)=>{
      return val.id===updateUser.id?{...data}:val
      }
    )
    localStorage.setItem('users',JSON.stringify(updateUsers))
     return updateUsers;
      
    })
  }else{
    let arr=[...users,{...data,id:nanoid()}]
  setUsers(arr)
  localStorage.setItem('users',JSON.stringify(arr))
  }

  settoggle(prev=>!prev)
  reset()
 }



  return (
    <div className="p-5 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
      
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(summitForm)}>
          {/* Name */}
          <div>
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^\S+$/,
                  message: "Blank spaces not allowed",
                },
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter valid email",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Give correct password",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Number */}
          <div>
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
              placeholder="Enter your Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.number && (
              <p className="text-red-600">{errors.number.message}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <input
              {...register("img", {
                required: "Image is required",
              })}
              type="url"
              placeholder="Enter Image URL..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            {errors.img && <p className="text-red-600">{errors.img.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg cursor-pointer active:scale-95 hover:bg-blue-700 transition duration-300 font-semibold"
          >
           Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
