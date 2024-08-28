
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalUsers: 45,
  premiumUsers: 20,
  subscriptions: 15,
  activeUsers: 12,
  newRegistrations: 5,
  totalReceivedReports: 3,
  genderDistribution: { male: 57.9, female: 42.1 },
  monthlyUserAnalysis: {
    activeUsers: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    premiumUsers: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    newUsers: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  },
  

  totalSubscriptionAmount: 8999,
  mostLikedUsers: [
    { id: 1, name: 'John Brown', email: 'john@example.com', mobile: '+1234567890', gender: 'Male', country: 'USA', city: 'New York', activeTime: '2 hours', lastSeen: '1 day ago' },
    { id: 2, name: 'Jim Green', email: 'jim@example.com', mobile: '+9876543210', gender: 'Male', country: 'UK', city: 'London', activeTime: '5 hours', lastSeen: '2 hours ago' },
    { id: 3, name: 'Joe Black', email: 'joe@example.com', mobile: '+1122334455', gender: 'Male', country: 'Australia', city: 'Sydney', activeTime: '24 hours', lastSeen: '3 days ago' },
  ],
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectUserState = (state) => state.user;

export default userSlice.reducer;

