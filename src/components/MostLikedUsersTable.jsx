import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserState } from '../redux/userSlice';
const MostLikedUsersTable = () => {
  const userState = useSelector(selectUserState);

  return (
    <div className="table-container">
      <h2>Most Liked Users</h2>
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>UserName</th>
            <th>Registered Email</th>
            <th>Registered Mobile</th>
            <th>Gender</th>
            <th>Country</th>
            <th>City</th>
            <th>Active Time</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {userState.mostLikedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td>{user.city}</td>
              <td>{user.activeTime}</td>
              <td>{user.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostLikedUsersTable;

