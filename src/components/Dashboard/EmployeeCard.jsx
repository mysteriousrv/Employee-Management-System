import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-gray-800 text-white p-5 rounded shadow-lg">
      <img
        src={employee.image}
        alt={employee.firstName}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-center">{employee.firstName}</h3>
      <p className="text-center text-gray-400">{employee.email}</p>
      <div className="mt-4">
        <p>Active Tasks: {employee.taskCounts.active}</p>
        <p>New Tasks: {employee.taskCounts.newTask}</p>
        <p>Completed Tasks: {employee.taskCounts.completed}</p>
        <p>Failed Tasks: {employee.taskCounts.failed}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;