import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-200">
      
      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold uppercase">
          {user.name.firstname[0]}
          {user.name.lastname[0]}
        </div>

        <div>
          <h2 className="text-xl font-bold capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-5 space-y-3 text-sm">
        <p>
          <span className="font-semibold">📧 Email:</span>{" "}
          {user.email}
        </p>

        <p>
          <span className="font-semibold">📞 Phone:</span>{" "}
          {user.phone}
        </p>

        <p>
          <span className="font-semibold">🏙 City:</span>{" "}
          {user.address.city}
        </p>

        <p>
          <span className="font-semibold">📍 Address:</span>{" "}
          {user.address.number}, {user.address.street}
        </p>

        <p>
          <span className="font-semibold">📮 Zip Code:</span>{" "}
          {user.address.zipcode}
        </p>

        <p>
          <span className="font-semibold">🌍 Latitude:</span>{" "}
          {user.address.geolocation.lat}
        </p>

        <p>
          <span className="font-semibold">🌍 Longitude:</span>{" "}
          {user.address.geolocation.long}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
