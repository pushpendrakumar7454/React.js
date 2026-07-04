import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-xl p-5 border">
      <img
        src={user.img}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-blue-500"
      />

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
