import axios from 'axios';

const API_URL = 'https://health-server-mcxj.onrender.com';

const fetchRecords = () => axios.get(API_URL);
const fetchRecordById = (id) => axios.get(`${API_URL}/${id}`);
const addRecord = (data) => axios.post(API_URL, data);
const updateRecord = (id, data) => axios.put(`${API_URL}/${id}`, data);
const deleteRecord = (id) => axios.delete(`${API_URL}/${id}`);

export { fetchRecords, fetchRecordById, addRecord, updateRecord, deleteRecord };
