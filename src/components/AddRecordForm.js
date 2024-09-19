import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'; // Ensure the CSS file is imported

const AddRecordForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    date: '',
    temperature: '',
    bloodPressure: '',
    heartRate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/health-records', formData);
      onAdd(); // Refresh records
      setFormData({ date: '', temperature: '', bloodPressure: '', heartRate: '' });
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="label" htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="temperature">Temperature (°C)</label>
        <input
          id="temperature"
          type="number"
          name="temperature"
          placeholder="Temperature"
          value={formData.temperature}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="bloodPressure">Blood Pressure (e.g., 120/80)</label>
        <input
          id="bloodPressure"
          type="text"
          name="bloodPressure"
          placeholder="Blood Pressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="heartRate">Heart Rate (bpm)</label>
        <input
          id="heartRate"
          type="number"
          name="heartRate"
          placeholder="Heart Rate"
          value={formData.heartRate}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <button type="submit" className="button button-view">Submit</button>
    </form>
  );
};

export default AddRecordForm;
