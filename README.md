## Health Tracking App
A Health Tracking Application built with React for the frontend and Node.js with Express for the backend. This app allows users (patients) to log and track daily health metrics such as body temperature, blood pressure, and heart rate. It provides a dashboard for managing health records, a form for adding new records, a detailed view of each record, and search functionality.

# Table of Contents
Features
Technologies Used
Getting Started
Environment Variables
Backend Setup
Frontend Setup
Running the App
Deployment
Troubleshooting
Contributing
License
Features
# Add, view, search, and delete health records.
Displays a dashboard with a summary of all health metrics.
Provides a detailed view for each health record.
Built-in form validation for record addition.
Uses MongoDB for data storage.
API endpoints for managing health data.
Technologies Used
Frontend: React 18, Axios
Backend: Node.js, Express
Database: MongoDB
Styling: Custom CSS 
Deployment: Render (backend), Vercel (frontend)
Getting Started
Follow these instructions to set up the project locally.

Prerequisites
Node.js (v14 or later)
npm (v6 or later)
MongoDB for the backend
Git
Environment Variables
Create a .env file in the root of your backend directory to store environment-specific variables such as database URLs, API keys, and port numbers. Here is an example:

makefile
Copy code
# Backend .env file
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
For the frontend, set up environment variables in a .env file in the root of the frontend directory:

bash
Copy code

Backend Setup
Navigate to the backend directory:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Start the server:
bash
Copy code
npm start
The backend server should now be running on http://localhost:5000.
Frontend Setup
Navigate to the frontend directory:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Start the React application:
bash
Copy code
npm start
The app should now be running on http://localhost:3000.
Running the App
Ensure the backend server is running.
Start the frontend application.
Visit http://localhost:3000 to use the Health Tracking App.
Deployment
Backend (Azure)
Ensure the backend server is prepared for production (e.g., npm run build if applicable).
Deploy the backend to Azure using your preferred deployment method (Azure CLI, GitHub Actions, etc.).
Frontend (Vercel)
Log in to your Vercel account and deploy the frontend application.

API Returning HTML: If the API returns HTML instead of JSON, check the following:
Ensure that the API endpoint is correct and accessible in the production environment.
Verify CORS settings on the backend.
Check the deployment configurations for any server-side routing issues.
Deployment Issues: Review the logs on your hosting platform (Azure for backend, Vercel for frontend) for errors or misconfigurations.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add a new feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.