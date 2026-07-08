import React, { useState } from "react";
import Form from "./components/Form";
import Navvar from "./components/Navvar";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, settoggle] = useState(true);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const deleteUser = (idx) => {
    setUsers((prev) => prev.filter((user, i) => i != idx));
  };

  const updateUser = (idx, updatedData) => {
  setUsers((prev) =>
    prev.map((user, i) => (i === idx ? updatedData : user))
  );
};

  return (
    <div className="p-5 bg-black min-h-screen">
      <Navvar settoggle={settoggle} />

      {toggle ? (
        <Form settoggle={settoggle} setUsers={setUsers} />
      ) : (
        <div className="flex flex-wrap gap-6  mt-6">
          {users.map((elem, idx) => (
            <UserCard
              key={idx}
              elem={elem}
              idx={idx}
              settoggle={settoggle}
              deleteUser={deleteUser}
                setEditUser={setEditUser}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
