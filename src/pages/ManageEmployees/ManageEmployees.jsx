// src/pages/ManageEmployees.js
import React, { useState } from 'react';
import './ManageEmployees.css';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Car Washer', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', role: 'Manager', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', role: 'Receptionist', email: 'charlie@example.com' },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', email: '' });
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const addEmployee = (e) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.role && newEmployee.email) {
      setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
      setNewEmployee({ name: '', role: '', email: '' });
    }
  };

  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const saveEmployee = () => {
    setEmployees(
      employees.map((employee) =>
        employee.id === editingEmployee.id ? editingEmployee : employee
      )
    );
    setEditingEmployee(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="manage-employees-container">
      <h2>Manage Employees</h2>
      <form onSubmit={addEmployee} className="add-employee-form">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={newEmployee.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={newEmployee.email}
          onChange={handleInputChange}
          required
        />
        <select
          name="role"
          value={newEmployee.role}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="Car Washer">Car Washer</option>
          <option value="Manager">Manager</option>
          <option value="Receptionist">Receptionist</option>
        </select>
        <button type="submit">Add Employee</button>
      </form>
      <table className="employees-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="text"
                    value={editingEmployee.name}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, name: e.target.value })
                    }
                  />
                ) : (
                  employee.name
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <input
                    type="email"
                    value={editingEmployee.email}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, email: e.target.value })
                    }
                  />
                ) : (
                  employee.email
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <select
                    value={editingEmployee.role}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, role: e.target.value })
                    }
                  >
                    <option value="Car Washer">Car Washer</option>
                    <option value="Manager">Manager</option>
                    <option value="Receptionist">Receptionist</option>
                  </select>
                ) : (
                  employee.role
                )}
              </td>
              <td>
                {editingEmployee?.id === employee.id ? (
                  <>
                    <button onClick={saveEmployee} className="action-button save">
                      Save
                    </button>
                    <button
                      onClick={() => setEditingEmployee(null)}
                      className="action-button cancel"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => editEmployee(employee)}
                      className="action-button edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEmployee(employee.id)}
                      className="action-button delete"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEmployees;
