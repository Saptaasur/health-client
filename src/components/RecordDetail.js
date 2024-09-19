import React, { useState } from 'react';
import axios from 'axios';

const RecordDetail = ({ record, onClose }) => {
  const [formData, setFormData] = useState({
    date: record.date,
    temperature: record.temperature,
    bloodPressure: record.bloodPressure,
    heartRate: record.heartRate,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://health-server-mcxj.onrender.com/api/health-records/${record._id}`, formData);
      onClose(); // Close the modal after updating
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://health-server-mcxj.onrender.com/api/health-records/${record._id}`);
      onClose(); // Close the modal after deleting
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="record-detail-modal">
      <h2>Record Details</h2>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="number" name="temperature" placeholder="Temperature" value={formData.temperature} onChange={handleChange} />
      <input type="text" name="bloodPressure" placeholder="Blood Pressure (e.g., 120/80)" value={formData.bloodPressure} onChange={handleChange} />
      <input type="number" name="heartRate" placeholder="Heart Rate" value={formData.heartRate} onChange={handleChange} />
      
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RecordDetail;
