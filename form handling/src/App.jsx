import React, { useState } from "react";

const App = () => {
  //  const [formData, setFormData] = useState({})
  //  console.log("Form Data",formData); better approach

  const [formData, setFormData] = useState({});

  console.log("formData", formData);

  let formDataHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <form className="w-80 bg-white p-6 rounded-xl shadow-lg space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Enter Name..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          onChange={formDataHandler}
          //  onChange={(e)=>{
          //   setFormData({...formData,name:e.target.value})
          //  }} better approach
        />

        <input
          name="email"
          type="email"
          placeholder="Enter Email..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          // onChange={(e)=>{
          //   setFormData({...formData,email:e.target.value})
          // }} better approach
          onChange={formDataHandler}
        />

        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          // onChange={(e)=>{
          //      setFormData({...formData,password:e.target.value})
          // }} better approach
          onChange={formDataHandler}
        />
      </form>
    </div>
  );
};

export default App;
