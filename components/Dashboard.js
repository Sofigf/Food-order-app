import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Konten Dashboard */}
      <h1>Dashboard</h1>
      <style jsx>{`
        .dashboard {
          padding: 20px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        h1 {
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
