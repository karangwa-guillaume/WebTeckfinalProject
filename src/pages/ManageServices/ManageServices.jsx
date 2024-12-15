// src/pages/ManageServices.js
import React, { useState } from 'react';
import './ManageServices.css';

const ManageServices = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Exterior Wash', price: 20 },
    { id: 2, name: 'Full Service', price: 50 },
    { id: 3, name: 'Interior Cleaning', price: 30 },
  ]);
  const [newService, setNewService] = useState({ name: '', price: '' });
  const [editingService, setEditingService] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const addService = (e) => {
    e.preventDefault();
    if (newService.name && newService.price) {
      setServices([
        ...services,
        { id: Date.now(), name: newService.name, price: parseFloat(newService.price) },
      ]);
      setNewService({ name: '', price: '' });
    }
  };

  const editService = (service) => {
    setEditingService(service);
  };

  const saveService = () => {
    setServices(
      services.map((service) =>
        service.id === editingService.id ? editingService : service
      )
    );
    setEditingService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="manage-services-container">
      <h2>Manage Services</h2>
      <form onSubmit={addService} className="add-service-form">
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={newService.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={newService.price}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Service</button>
      </form>
      <table className="services-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>
                {editingService?.id === service.id ? (
                  <input
                    type="text"
                    value={editingService.name}
                    onChange={(e) =>
                      setEditingService({ ...editingService, name: e.target.value })
                    }
                  />
                ) : (
                  service.name
                )}
              </td>
              <td>
                {editingService?.id === service.id ? (
                  <input
                    type="number"
                    value={editingService.price}
                    onChange={(e) =>
                      setEditingService({ ...editingService, price: parseFloat(e.target.value) })
                    }
                  />
                ) : (
                  service.price
                )}
              </td>
              <td>
                {editingService?.id === service.id ? (
                  <>
                    <button onClick={saveService}>Save</button>
                    <button onClick={() => setEditingService(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => editService(service)}>Edit</button>
                    <button onClick={() => deleteService(service.id)}>Delete</button>
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

export default ManageServices;
