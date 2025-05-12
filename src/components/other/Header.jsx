import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("Logged In User:", loggedInUser); // Debugging

    if (loggedInUser) {
      if (loggedInUser.role === "admin") {
        setUsername("Ritvij");
      } else if (loggedInUser.role === "employee" && loggedInUser.data) {
        setUsername(loggedInUser.data.firstName|| "Employee");
        console.log(loggedInUser.data.firstName) // Fallback to "Employee" if name is missing
      }
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    window.location.reload(); // Reload the page to reset the state
  };

  return (
    <div className="flex items-end justify-between px-5 py-2">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;