import React from 'react';
import DashboardBody from './Quick menu/dashboardbody';
import Sidebar from './Sidebar/Sidebar';

const DashboardPage: React.FC = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <DashboardBody />
    </div>
  );
};

export default DashboardPage;