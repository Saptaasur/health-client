import React, { useState } from 'react';
import '../index.css'; // Ensure the CSS file is imported

const SearchBar = ({ records, setRecords }) => {
  const [searchDate, setSearchDate] = useState('');
  const [minHeartRate, setMinHeartRate] = useState('');

  const handleSearch = () => {
    let filteredRecords = records;

    if (searchDate) {
      filteredRecords = filteredRecords.filter(record => record.date.includes(searchDate));
    }
    
    if (minHeartRate) {
      filteredRecords = filteredRecords.filter(record => record.heartRate >= minHeartRate);
    }

    setRecords(filteredRecords);
  };

  return (
    <div className="search-bar">
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
        className="input-field"
        placeholder="Search by date"
      />
      <input
        type="number"
        value={minHeartRate}
        onChange={(e) => setMinHeartRate(e.target.value)}
        className="input-field"
        placeholder="Minimum heart rate"
      />
      <button onClick={handleSearch} className="button button-view">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
