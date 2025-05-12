import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import "./index.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData && Array.isArray(userData)) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("No employee data available.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
    window.location.href = "/"; // Explicitly redirect to login
  };

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
        ) : user === "admin" ? (
          <Route path="/admin" element={<AdminDashboard changeUser={handleLogout} />} />
        ) : (
          <Route
            path="/employee"
            element={<EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />}
          />
        )}
        <Route path="*" element={<Navigate to={user ? (user === "admin" ? "/admin" : "/employee") : "/"} />} />
      </Routes>
    </Router>
  );
};

export default App;