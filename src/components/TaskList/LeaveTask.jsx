import React, { useState, useEffect } from "react";

const LeaveTasks = ({ data }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  // Fetch leave requests from localStorage
  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    setLeaveRequests(storedRequests.filter((request) => request.employeeId === data.id));
  }, [data.id]);

  // Delete a leave request
  const deleteLeaveRequest = (index) => {
    const updatedRequests = leaveRequests.filter((_, i) => i !== index);
    setLeaveRequests(updatedRequests);

    // Update localStorage
    const allRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    const filteredRequests = allRequests.filter(
      (request) => !(request.employeeId === data.id && allRequests.indexOf(request) === index)
    );
    localStorage.setItem("leaveRequests", JSON.stringify(filteredRequests));
  };

  // Submit a new leave request
  const handleNewLeaveRequest = (e) => {
    e.preventDefault();
    const reason = e.target.reason.value;

    const newRequest = {
      employeeId: data.id,
      employeeName: data.name,
      reason,
      status: "Pending",
      date: new Date().toLocaleDateString(), // Add the current date
    };

    const updatedRequests = [...leaveRequests, newRequest];
    setLeaveRequests(updatedRequests);

    // Update localStorage
    const allRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    localStorage.setItem("leaveRequests", JSON.stringify([...allRequests, newRequest]));

    e.target.reset();
    alert("Leave request submitted successfully!");
  };
  

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-white mb-5">Leave Tasks</h1>

      {/* Leave Requests */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white mb-3">Your Leave Requests</h2>
        {leaveRequests.length > 0 ? (
          <ul className="text-white">
            {leaveRequests.map((request, index) => (
              <li key={index} className="mb-3 bg-gray-800 p-3 rounded">
                <p>
                  <strong>Reason:</strong> {request.reason}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      request.status === "Approved"
                        ? "text-green-500"
                        : request.status === "Rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }
                  >
                    {request.status}
                  </span>
                </p>
                <p>
                  <strong>Date:</strong> {request.date}
                </p>
                {request.status === "Pending" && (
                  <button
                    className="bg-red-500 px-3 py-1 rounded mt-2"
                    onClick={() => deleteLeaveRequest(index)}
                  >
                    Delete Request
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No leave requests found.</p>
        )}
      </div>

      {/* New Leave Request Form */}
      <div className="bg-gray-800 p-5 rounded">
        <h2 className="text-xl font-bold text-white mb-3">Apply for New Leave</h2>
        <form onSubmit={handleNewLeaveRequest}>
          <textarea
            name="reason"
            className="w-full p-3 rounded bg-gray-700 text-white"
            placeholder="Enter the reason for leave"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit Leave Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveTasks;