import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"; // Adjusted import path
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const COLORS = ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"];

const EmployeeAttendenc = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch employees from localStorage
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  // Update selected employee when dropdown changes
  useEffect(() => {
    const employee = employees.find((emp) => emp.id === selectedEmployeeId);
    setSelectedEmployee(employee);
  }, [selectedEmployeeId, employees]);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">Employee Attendance</h1>

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

      {/* Attendance Details */}
      {selectedEmployee ? (
        <div className="space-y-6 flex flex-col">  
          {/* Today's Attendance */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <Card>
            <CardHeader>
              <CardTitle>Today's Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEmployee.attendance ? (
                <p className="text-lg text-black">
                  {selectedEmployee.attendance.today === "Present" ? "✔️ Present" : "❌ Absent"}
                </p>
              ) : (
                <p className="text-gray-950">No attendance data available.</p>
              )}
            </CardContent>
          </Card>

          {/* Weekly Attendance */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEmployee.attendance ? (
                <>
                  <PieChart width={200} height={200}>
                    <Pie
                      data={[
                        { name: "Present", value: selectedEmployee.attendance.weekly[0] },
                        { name: "Absent", value: selectedEmployee.attendance.weekly[1] },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className="text-center">
                    <p className="text-black">Present: {selectedEmployee.attendance.weekly[0]} days</p>
                    <p className="text-black">Absent: {selectedEmployee.attendance.weekly[1]} days</p>
                  </div>
                </>
              ) : (
                <p className="text-black">No weekly attendance data available.</p>
              )}
            </CardContent>
          </Card>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Monthly Attendance */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEmployee.attendance ? (
                <>
                  <BarChart
                    width={400}
                    height={250}
                    data={[
                      { name: "Present", value: selectedEmployee.attendance.monthly[0] },
                      { name: "Absent", value: selectedEmployee.attendance.monthly[1] },
                    ]}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#36A2EB" />
                  </BarChart>
                  <div className="text-center">
                    <p className="text-black">Present: {selectedEmployee.attendance.monthly[0]} days</p>
                    <p className="text-black">Absent: {selectedEmployee.attendance.monthly[1]} days</p>
                  </div>
                </>
              ) : (
                <p className="text-black">No monthly attendance data available.</p>
              )}
            </CardContent>
          </Card>
          {/* Yearly Attendance */}
          <Card>
            <CardHeader>
              <CardTitle>Yearly Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedEmployee.attendance ? (
                <>
                  <BarChart
                    width={400}
                    height={250}
                    data={[
                      { name: "Present", value: selectedEmployee.attendance.yearly[0] },
                      { name: "Absent", value: selectedEmployee.attendance.yearly[1] },
                    ]}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FF6384" />
                  </BarChart>
                  <div className="text-center">
                    <p className="text-black">Present: {selectedEmployee.attendance.yearly[0]} days</p>
                    <p className="text-black">Absent: {selectedEmployee.attendance.yearly[1]} days</p>
                  </div>
                </>
              ) : (
                <p className="text-black">No yearly attendance data available.</p>
              )}
            </CardContent>
          </Card>
          </div> 
        </div>
      ) : (
        <p className="text-black">Please select an employee to view their attendance.</p>
      )}
    </div>
  );
};

export default EmployeeAttendenc;