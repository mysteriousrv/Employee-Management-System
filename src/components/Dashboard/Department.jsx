import React, { useState } from 'react';

const initialDepartments = [
  { id: 1, head: "Joan Dyer", department: "Web Development", employees: 40 },
  { id: 2, head: "Sally Graham", department: "Accounts", employees: 48 },
  { id: 3, head: "Robert Anderson", department: "Support", employees: 15 },
  { id: 4, head: "Phil Glover", department: "App Development", employees: 39 },
  { id: 5, head: "Victor Rampling", department: "Recruiter", employees: 12 },
  { id: 6, head: "Ryan Stewart", department: "Admin", employees: 8 },
];

const Department = () => {
  const [departments, setDepartments] = useState(initialDepartments);
  const [form, setForm] = useState({ head: "", department: "", employees: "" });

  const handleDelete = (id) => {
    setDepartments(departments.filter(dep => dep.id !== id));
  };

  const handleAdd = () => {
    if (form.head && form.department && form.employees) {
      const newDep = {
        id: departments.length + 1,
        head: form.head,
        department: form.department,
        employees: parseInt(form.employees)
      };
      setDepartments([...departments, newDep]);
      setForm({ head: "", department: "", employees: "" });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Departments</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Head Name"
          className='text-black'
          value={form.head}
          onChange={e => setForm({ ...form, head: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          className='text-black'
          value={form.department}
          onChange={e => setForm({ ...form, department: e.target.value })}
          style={{ marginLeft: '10px' }}
        />
        <input
          type="number"
          placeholder="Employees"
          className='text-black'
          value={form.employees}
          onChange={e => setForm({ ...form, employees: e.target.value })}
          style={{ marginLeft: '10px' }}
        />
        <button onClick={handleAdd} className='ml-10 border-2 px-2 rounded-md hover:bg-indigo-800' >+ Add Department</button>
      </div>

      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Department Head</th>
            <th>Department Name</th>
            <th>Employee Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dep, index) => (
            <tr key={dep.id}>
              <td>{index + 1}</td>
              <td>{dep.head}</td>
              <td>{dep.department}</td>
              <td>{dep.employees}</td>
              <td>
                <button onClick={() => alert("Edit not implemented")} style={{ color: 'green' }}>✏️</button>
                <button onClick={() => handleDelete(dep.id)} style={{ color: 'red', marginLeft: '10px' }}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
