import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeProfile = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employees from localStorage
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  // Add a new employee (example function)
  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5 text-white">Employee Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
      {/* Example button to add a new employee */}
      <button
        onClick={() =>
          addEmployee({
            id: employees.length + 1,
            firstName: "New Employee",
            contact: "9876543210", // Dummy 10-digit contact number
            email: `new${employees.length + 1}@example.com`, // Unique dummy email
            password: "123",
            image: "https://via.placeholder.com/150",
            taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
            tasks: [],
          })
        }
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New Employee
      </button>
    </div>
  );
};

export default EmployeeProfile;