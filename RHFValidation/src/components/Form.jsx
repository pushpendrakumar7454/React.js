import React, { useState } from "react";
import { useForm } from "react-hook-form"



const Form = ({setUsers,settoggle}) => {

  let {
    handleSubmit,
    register,
    reset,
    formState:{errors}
  }=useForm({
    mode:"onChange"
  })

  const summitForm=(data)=>{
    console.log(data);
    setUsers(((prev)=>[...prev,data]))
    
    settoggle((pre)=>!pre)
    reset()
  }


  return (
    <div className="p-5 flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
           Form
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(summitForm)}>
          {/* Name */}
          <div>
           
            <input
            {...register('name',{
              required:'Name is required',
              pattern:{
                value:/^\S+$/,
                message:"blank spaces not allowed"
              }
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
         
          </div>

          {/* Email */}
          <div>
           
            <input
            {...register('email',
              {
                required:"Email is required",
                pattern:{
                  value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:"please enter valid email",

                }
              }
            )}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
           {errors.email &&  <p className="text-red-600">{errors.email.message}</p>}
        
          </div>

          {/* Password */}
          <div>
            
            <input
            {...register('password',
              {
                required:"password is required",
                pattern:{
                  value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:"give correct password"
                }
              }
            )}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
           
          </div>
           <div>
           
            <input
            {...register('number',
              {
                required:"number is required",
                maxLength:{
                  value:10,
                  message:'maximum 10 digits required'
                },
                minLength:{
                  value:10,
                  message:"Minimin 10 digits required"
                }
              }
            )}
              type="number"
              placeholder="Enter your Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.number && <p className="text-red-600">{errors.number.message}</p>}
         
          </div>

          {/* Image */}
          <div>
            
            <input
            {...register('img',
              {
                required:"Image is required"
              }
            )}
              type="url"
             placeholder="Enter url..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer cursor-pointer"
            />
           {errors.img &&  <p className="text-red-600">{errors.img.message}</p>}
          
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg cursor-pointer active:scale-95 hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Create Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;