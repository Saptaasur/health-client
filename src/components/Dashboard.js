import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecordDetail from './RecordDetail';
import AddRecordForm from './AddRecordForm';
import SearchBar from './SearchBar';
import '../index.css'; // Import custom CSS

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('/api/health-records');
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/health-records/${id}`);
      fetchRecords(); // Refresh the records after deletion
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Health Metrics Dashboard</h1>
      
      <div className="dashboard-content">
        <AddRecordForm onAdd={fetchRecords} />
        <h4>Find your details</h4>
        <SearchBar records={records} setRecords={setRecords}/>

        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th>Date</th>
                <th>Temperature</th>
                <th>Blood Pressure</th>
                <th>Heart Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record._id} className="table-row">
                  <td className="table-cell">{record.date}</td>
                  <td className="table-cell">{record.temperature}</td>
                  <td className="table-cell">{record.bloodPressure}</td>
                  <td className="table-cell">{record.heartRate}</td>
                  <td className="table-cell flex space-x-2">
                    <button 
                      onClick={() => setSelectedRecord(record)} 
                      className="button button-view"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => handleDelete(record._id)} 
                      className="button button-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedRecord && (
          <div className="modal-overlay">
            <div className="modal-content">
              <RecordDetail
                record={selectedRecord}
                onClose={() => {
                  setSelectedRecord(null);
                  fetchRecords(); // Refresh the records after updating or closing
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
