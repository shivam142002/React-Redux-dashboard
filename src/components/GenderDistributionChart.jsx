import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { name: 'Male', value: 60 },
  { name: 'Female', value: 40 },
];

const COLORS = ['#0088FE', '#FF69B4'];

const GenderDistributionChart = () => {
  return (
    <Box className="chart-box">
      <Typography variant="h6" align="center" gutterBottom>
        Gender Distribution
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <Box display="flex" justifyContent="center" mt={2}>
        <Box display="flex" alignItems="center" mx={2}>
          <Box width={16} height={16} bgcolor="#0088FE" mr={1} />
          <Typography>Male</Typography>
        </Box>
        <Box display="flex" alignItems="center" mx={2}>
          <Box width={16} height={16} bgcolor="#FF69B4" mr={1} />
          <Typography>Female</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GenderDistributionChart;





