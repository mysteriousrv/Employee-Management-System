import React, { useEffect, useState } from "react";
import AcceptTask from "../TaskList/AcceptTask";

const EmployeeTasks = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Fetch employees from localStorage
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  // Fetch tasks for the selected employee
  useEffect(() => {
    if (selectedEmployeeId) {
      const employee = employees.find((emp) => emp.id === selectedEmployeeId);
      if (employee) {
        setTasks(employee.tasks);
      }
    }
  }, [selectedEmployeeId, employees]);

  // Update task status
  const updateTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);

    // Update localStorage
    const updatedEmployees = employees.map((emp) =>
      emp.id === selectedEmployeeId ? { ...emp, tasks: updatedTasks } : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Employee Tasks</h2>

      {/* Dropdown Menu */}
      <div className="mb-5">
        <select
          className="p-2 border rounded text-black"
          value={selectedEmployeeId || ""}
          onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
        >
          <option value="" disabled>
            Select an Employee
          </option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id} className="text-black">
              {employee.firstName}
            </option>
          ))}
        </select>
      </div>

      {/* Task List */}
      {selectedEmployeeId ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.map((task) => (
            <AcceptTask key={task.id} data={task} onUpdateTask={updateTaskStatus} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Please select an employee to view their tasks.</p>
      )}
    </div>
  );
};

export default EmployeeTasks;