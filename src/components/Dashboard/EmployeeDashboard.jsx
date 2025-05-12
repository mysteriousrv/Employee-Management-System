import React, { useState } from "react";
import Header from "../other/Header";
import EmployeeTasks from "../TaskList/EmployeeTasks";
import LeaveTasks from "../TaskList/LeaveTask";

const EmployeeDashboard = (props) => {
  const [activeComponent, setActiveComponent] = useState("EmployeeTasks");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "EmployeeTasks":
        return <EmployeeTasks data={props.data} />;
      case "LeaveTasks":
        return <LeaveTasks data={props.data} />;
      default:
        return <div className="text-white">Welcome to the Employee Dashboard</div>;
    }
  };

  return (
    <div className="h-screen flex bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Employee Panel</h2>
        <ul className="space-y-4">
          <li
            className="cursor-pointer hover:text-gray-300"
            onClick={() => setActiveComponent("EmployeeTasks")}
          >
            Employee Tasks
          </li>
          <li
            className="cursor-pointer hover:text-gray-300"
            onClick={() => setActiveComponent("LeaveTasks")}
          >
            Leave Tasks
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-7">
        <Header changeUser={props.changeUser} data={props.data} />
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default EmployeeDashboard;