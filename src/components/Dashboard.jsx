import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import GenderDistributionChart from './GenderDistributionChart';
import MonthlyUserAnalysisChart from './MonthlyUserAnalysisChart';
import SubscriptionChart from './SubscriptionChart';
import MostLikedUsersTable from './MostLikedUsersTable';
 import '../styles/global.css';

 // Main Dashboard component that includes header, navigation, sidebar, and various charts
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header/>
      <Navbar/>
      <div className="main-content">
        <div className="left-container">
        <div className="sidebar-container">
          <Sidebar />
          </div>
          <div className="gender-chart-container">
          <GenderDistributionChart />
          </div>
        </div>

        <div className="chart-container">
          <MonthlyUserAnalysisChart />
        </div>

        <div className="chart-container">
          <SubscriptionChart />
        </div>
      </div>

      <div className="most-liked-users">
        <MostLikedUsersTable />
      </div>
      
    </div>
  );
};

export default Dashboard;







