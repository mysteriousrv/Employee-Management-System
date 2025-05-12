import React, { useState, useEffect } from "react";

const Leave = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  // Fetch leave requests and employee data from localStorage
  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Map employee names to leave requests
    const updatedRequests = storedRequests.map((request) => {
      const employee = employees.find((emp) => emp.id === request.employeeId); // Match by employee ID
      return {
        ...request,
        employeeName: employee ? employee.firstName : "Unknown Employee", // Add employee name
      };
    });

    setLeaveRequests(updatedRequests);
  }, []);

  // Approve or reject a leave request
  const handleLeaveAction = (index, action) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index] = {
      ...updatedRequests[index],
      status: action, // Update status to "Approved" or "Rejected"
    };
    setLeaveRequests(updatedRequests);

    // Update localStorage
    localStorage.setItem("leaveRequests", JSON.stringify(updatedRequests));
  };

  return (
    <div className="p-10 bg-gray-800 h-screen text-white">
      <h1 className="text-2xl font-bold mb-5">Leave Requests</h1>
      {leaveRequests.length === 0 ? (
        <p>No leave requests available.</p>
      ) : (
        <table className="w-full bg-gray-700 rounded-lg">
          <thead>
            <tr>
              <th className="p-3 text-left">Employee Name</th>
              <th className="p-3 text-left">Reason</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="p-3">{request.employeeName}</td>
                <td className="p-3">{request.reason}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded ${
                      request.status === "Approved"
                        ? "bg-green-500"
                        : request.status === "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="p-3">{request.date}</td>
                <td className="p-3">
                  {request.status === "Pending" && (
                    <>
                      <button
                        className="bg-green-500 px-3 py-1 rounded mr-2"
                        onClick={() => handleLeaveAction(index, "Approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 px-3 py-1 rounded"
                        onClick={() => handleLeaveAction(index, "Rejected")}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leave;