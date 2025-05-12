// filepath: /Users/mac/Desktop/ems-main/src/components/ui/Card.jsx
import React from "react";

export const Card = ({ children }) => {
  return <div className="bg-white shadow rounded p-4 text-black">{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="border-b pb-2 mb-2 text-black">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h2 className="text-lg font-semibold text-black">{children}</h2>;
};

export const CardContent = ({ children }) => {
  return <div className="text-black">{children}</div>;
};