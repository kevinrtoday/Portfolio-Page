import "./admin.scss";
import React, { useState } from "react";
import LoginForm from "../loginform/LoginForm";

function Admin() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  function Vanish() {
    var x = document.getElementById("LoginForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({ email: details.email });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ email: "" });
    Vanish();
  };

  return (
    <div className="admin" id="LoginForm">
      {user.email != "" ? (
        <div className="welcome">
          <h2> Welcome, Admin</h2>
          <button onClick={Logout}> Logout</button>
          <button onClick={Vanish}> Hide</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Admin;
