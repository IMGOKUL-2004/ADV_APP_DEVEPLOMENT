import React from 'react';
import '../../assets/css/admindashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, Admin</h1>
      </header>
      <main className="dashboard-content">
        <section className="card-container">
          <div className="card">
            <h2>Bookings</h2>
            <p>View upcoming and past bookings.</p>
            <Link to="/viewbooking">Manage Bookings</Link>
          </div>
          <div className="card">
            <h2>Clients</h2>
            <p>View and manage client information.</p>
            <Link to="/viewbooking">Manage Clients</Link>
          </div>
          <div className="card">
            <h2>Reports</h2>
            <p>Generate and view reports on bookings and revenue.</p>
            <Link to="/viewbooking">View Reports</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
