import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import React, { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8080/test/api/getData.php");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <UserForm onSuccess={fetchUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
