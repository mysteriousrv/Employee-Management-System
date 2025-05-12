import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSideBar = ({ setActiveComponent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const handleLogout = () => {
    // Clear localStorage or session data
    localStorage.clear();

    // Redirect to the "/" route
    navigate("/");
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-[88vh] p-5">
      <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
      <ul className="space-y-4">
        <li
          className="cursor-pointer hover:text-gray-300"
          onClick={() => setActiveComponent("Dashboard")}
        >
          Dashboard
        </li>

        {/* Tasks Dropdown */}
        <li>
          <div
            onClick={toggleDropdown}
            className="cursor-pointer hover:text-gray-300 flex items-center justify-between"
          >
            <span>Tasks</span>
            <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </div>
          {isDropdownOpen && (
            <ul className="mt-2 bg-gray-700 rounded shadow-lg">
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("CreateTask")}
              >
                Create Task
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("AllTask")}
              >
                View All Tasks
              </li>
            </ul>
          )}
        </li>

        {/* Employee Dropdown */}
        <li>
          <div
            onClick={toggleDropdown1}
            className="cursor-pointer hover:text-gray-300 flex items-center justify-between"
          >
            <span>Employee</span>
            <span>{isDropdownOpen1 ? "▲" : "▼"}</span>
          </div>
          {isDropdownOpen1 && (
            <ul className="mt-2 bg-gray-700 rounded shadow-lg">
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("EmployeeProfile")}
              >
                Employee Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("EmployeeTasks")}
              >
                Employee Tasks
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("EmployeeAttendance")}
              >
                Employee Attendance
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("Holiday")}
              >
                Holiday
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("Leave")}
              >
                Leave
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => setActiveComponent("Department")}
              >
                Department
              </li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li
          className="cursor-pointer hover:text-gray-300"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;