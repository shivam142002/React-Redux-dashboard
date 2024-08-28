import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { selectUserState } from '../redux/userSlice';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Typography } from '@mui/material';

const SubscriptionChart = () => {
  const userState = useSelector(selectUserState);

  // Sample data
  const data = [
    { month: 'Jan', amount: 30 },
    { month: 'Feb', amount: 50 },
    { month: 'Mar', amount: 80 },
    { month: 'Apr', amount: 90 },
    { month: 'May', amount: 75 },
    { month: 'Jun', amount: 60 },
    { month: 'Jul', amount: 85 },
    { month: 'Aug', amount: 95 },
    { month: 'Sep', amount: 110 },
    { month: 'Oct', amount: 120 },
  ];

  return (
    <div className="chart-container" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Box display="flex" alignItems="center" mb={2}>
        <TrendingUpIcon sx={{ color: 'green', fontSize: 30 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginLeft: 1 }}>
          Total Subscription Amount
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', marginTop: 1 }}>
          $8,999
        </Typography>
      </Box>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#e0e0e0" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionChart;

