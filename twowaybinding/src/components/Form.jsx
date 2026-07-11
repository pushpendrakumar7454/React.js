import React, { useState } from "react";

const Form = ({ formData, setformData, settoggle, setCards }) => {
  const submitForm = (e) => {
    e.preventDefault();
    setCards((prev) => [...prev, formData]);


    console.log(formData);
    
    setformData({
      text: "",
      detail: "",
    });
    settoggle((prev) => !prev);
  };
  
  const hadaleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center p-6">
      <form
        action=""
        className="flex flex-col w-100 bg-black text-white gap-4 p-4 rounded-lg"
        onSubmit={submitForm}
      >
        <input
          name="text"
          value={formData.text}
          onChange={hadaleChange}
          type="text"
          placeholder="Enter text"
          className="border-2 border-gray-700 rounded-lg text-xl outline-none p-2"
        />
        <textarea
          name="detail"
          onChange={hadaleChange}
          value={formData.detail}
          placeholder="Enter detail.. "
          className="border-2 border-gray-700 rounded-lg text-xl outline-none p-2"
          id=""
        ></textarea>
        <button className="text-white bg-red-600 p-2 cursor-pointer active:scale-95 text-xl rounded-lg border-none ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
