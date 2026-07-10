import React, { useState } from "react";
import Form from "./components/Form";
import Navvar from "./components/Navvar";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, settoggle] = useState(true);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);





  return (
    <div className="p-5 bg-black min-h-screen">
      <Navvar settoggle={settoggle} />

      {toggle ? (
        <Form
        users={users}
          setUsers={setUsers}
          settoggle={settoggle}
          editUser={editUser}
          setEditUser={setEditUser}
        
        />
      ) : (
        <div className="flex flex-wrap gap-6 mt-6">
          {users.map((elem, idx) => (
            <UserCard
              key={idx}
              elem={elem}
              idx={idx}
            
              settoggle={settoggle}
              setEditUser={setEditUser}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
