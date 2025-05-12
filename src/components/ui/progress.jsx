// filepath: /Users/mac/Desktop/ems-main/src/components/ui/Progress.jsx
import React from "react";

export const Progress = ({ value }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 text-black">
      <div
        className="bg-blue-500 h-2.5 rounded-full text-black"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};