import React from "react";

const UserCard = ({
  elem,
  deleteUser,
  idx,
  updateUser,
  setEditUser,
  settoggle,
}) => {
  return (
    <div className="min-h-80  items-centep-5 p-5 h-full ">
      <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <img
          src={elem.img}
          alt="Profile"
          className="w-full h-56 object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Name-:{elem.name}
          </h2>

          <p className="text-gray-500 mt-2">Email-:{elem.email}</p>

          <div className="flex justify-between gap-5">
            <button
              className="w-full mt-5 bg-green-600 cursor-pointer text-white py-2.5 rounded-lg hover:bg-green-700 transition active:scale-95"
              onClick={() => {
                setEditUser({ ...elem, idx });
                settoggle(true);
              }}
            >
              Update
            </button>
            <button
              className="w-full mt-5 bg-red-600 cursor-pointer text-white py-2.5 rounded-lg hover:bg-red-700 transition active:scale-95"
              onClick={() => deleteUser(idx)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
