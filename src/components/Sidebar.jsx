import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import '../styles/global.css'; // Import global CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Box className="sidebar-box">
        <Avatar className="sidebar-icon" sx={{ bgcolor: '#FF6F61' }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="h6">Total Users</Typography>
        <Typography variant="h4">45</Typography>
      </Box>

      <Box className="sidebar-box">
        <Avatar className="sidebar-icon" sx={{ bgcolor: '#FFC107' }}>
          <EmojiEventsIcon />
        </Avatar>
        <Typography variant="h6">Premium Users</Typography>
        <Typography variant="h4">20</Typography>
      </Box>

      <Box className="sidebar-box">
        <Avatar className="sidebar-icon" sx={{ bgcolor: '#4CAF50' }}>
          <AttachMoneyIcon />
        </Avatar>
        <Typography variant="h6">Subscriptions</Typography>
        <Typography variant="h4">15</Typography>
      </Box>

      <Box className="sidebar-box">
        <Avatar className="sidebar-icon" sx={{ bgcolor: '#2196F3' }}>
          <VerifiedUserIcon />
        </Avatar>
        <Typography variant="h6">Active Users</Typography>
        <Typography variant="h4">12</Typography>
      </Box>

      <Box className="sidebar-box">
        <Avatar className="sidebar-icon" sx={{ bgcolor: '#9C27B0' }}>
          <HowToRegIcon />
        </Avatar>
        <Typography variant="h6">New Registration</Typography>
        <Typography variant="h4">5</Typography>
      </Box>

      <Box className="sidebar-box">
        <Avatar className="sidebar-icon" sx={{ bgcolor: '#F44336' }}>
          <ReportProblemIcon />
        </Avatar>
        <Typography variant="h6">Total Received Reports</Typography>
        <Typography variant="h4">3</Typography>
      </Box>
    </div>
  );
};

export default Sidebar;
