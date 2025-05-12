import React, { useState, useEffect } from "react";
import AdminSideBar from "./AdminSideBar";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import EmployeeProfile from "./EmployeeProfile";
import EmployeeAttendenc from "./EmployeeAttendenc";
import EmployeeTasks from "./EmployeeTasks";
import Holiday from "./Holiday";
import Leave from "./Leave";
import Department from "./Department";
import Login from "../Auth/Login";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [employees, setEmployees] = useState([]);

  // Fetch employees from localStorage
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return (
          <div className="text-white text-center">
            <h2 className="text-2xl font-semibold mb-2">Welcome, Admin</h2>
            <p className="text-lg">
              You are now in the Admin Dashboard. Use the navigation menu to access various administrative tools and insights.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              From here, you can manage tasks, monitor employee performance, track attendance, and oversee departmental operations.
            </p>
          </div>
        );
      case "CreateTask":
        return <CreateTask employees={employees} setEmployees={setEmployees} />;
      case "AllTask":
        return <AllTask />;
      case "TaskChar":
        return <TaskChar />;
      case "EmployeeProfile":
        return <EmployeeProfile />;
      case "EmployeeTasks":
        return <EmployeeTasks />;
      case "EmployeeAttendance":
        return <EmployeeAttendenc />;
      case "Holiday":
        return <Holiday />;
      case "Leave":
        return <Leave />;
      case "Department":
        return <Department />;
      case "Login":
        return <Login />;
      default:
        return (
          <div className="text-white text-center">
            <h2 className="text-2xl font-semibold mb-2">Welcome, Admin</h2>
            <p className="text-lg">
              You are now in the Admin Dashboard. Use the navigation menu to access various administrative tools and insights.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              From here, you can create and manage tasks, view task progress, monitor employee profiles and attendance, manage holidays and leaves, and organize departmental structures — all in one place.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <div className="bg-indigo-900">
        <Header changeUser={props.changeUser} />
      </div>
      <div className="flex w-full">
        {/* Sidebar */}
        <div className="bg-gray-800">
          <AdminSideBar setActiveComponent={setActiveComponent} />
        </div>
        {/* Main Content */}
        <div className="flex-1 p-7 bg-slate-700">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
