import React, { useState } from "react";

const Register = ({ settoggle,setUsers }) => {
  const [formData, setFormData] = useState({
    img:"",
    name:"",
    email:"",
    password:""
  });
  


  const formDataUser = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  let submittForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setUsers((prev)=>[...prev,formData]);
    setFormData({
        img:"",
        name:"",
        email:"",
        password:""
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[380px]">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            submittForm(e);
          }}
        >
          {/* Profile Image */}
           <div>
            <label className="block text-sm font-medium mb-1">
              Profile Image
            </label>
            <input
              name="img"
              value={formData.img}
              type="url"
              placeholder="Enter Url..."
              className="w-full border rounded-lg p-2"
              onChange={formDataUser}
            />
          </div> 

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="name"
              value={formData.name}
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
              onChange={formDataUser}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
              onChange={formDataUser}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              value={formData.password}
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
              onChange={formDataUser}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline active:scale-95"
              onClick={() => settoggle((pre) => !pre)}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
