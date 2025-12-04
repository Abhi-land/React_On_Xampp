import { useState } from "react";
import "../App.css";

function UserForm({ onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/test/api/insert.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (data.status === "success") {
      alert("User added!");
      onSuccess();
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="card">
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
