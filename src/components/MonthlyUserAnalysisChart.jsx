
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserState } from '../redux/userSlice';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Box, Typography } from '@mui/material';

const MonthlyUserAnalysis = () => {
  const userState = useSelector(selectUserState);

  const data = userState.monthlyUserAnalysis.activeUsers.map((value, index) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][index],
    activeUsers: value,
    premiumUsers: userState.monthlyUserAnalysis.premiumUsers[index],
    newUsers: userState.monthlyUserAnalysis.newUsers[index],
  }));

  return (
    <div className="chart-container"><h2>Monthly User Analysis</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="activeUsers" fill="#8884d8" />
        <Bar dataKey="premiumUsers" fill="#82ca9d" />
        <Bar dataKey="newUsers" fill="#ffc658" />
      </BarChart>
      <Box display="flex" justifyContent="center" mt={2}>
        <Box display="flex" alignItems="center" mx={2}>
          <Box width={16} height={16} bgcolor="#8884d8" mr={1} />
          <Typography>Active User</Typography>
        </Box>
        <Box display="flex" alignItems="center" mx={2}>
          <Box width={16} height={16} bgcolor="#82ca9d" mr={1} />
          <Typography>Premium User</Typography>
        </Box>
        <Box display="flex" alignItems="center" mx={2}>
          <Box width={16} height={16} bgcolor="#ffc658" mr={1} />
          <Typography>New User</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MonthlyUserAnalysis;

