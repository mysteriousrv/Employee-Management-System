import React from "react";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeTasks = ({ data }) => {
 
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-5">Employee Tasks</h1>
      <p className="text-white">Here are your tasks, {data.name}.</p>
      {/* Use the destructured `data` directly */}
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeTasks;