import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Box component="span" sx={{ fontWeight: 'bold', color: 'orange' }}>UN</Box>common
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: 'orange', marginLeft: 2 }}>K</Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Kaustav
            </Typography>
            <Typography variant="body2" sx={{ color: '#777' }}>
              kaustav.saha@webstep.in
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;



// import React from 'react';
// import { Box, Typography, Avatar } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const Header = () => {
//   return (
//     <Box className="header">
//       <Box className="user-info">
//         <AccountCircleIcon className="user-icon" />
//         <Box>
//           <Typography variant="h6" className="user-name">
//             Kaustav
//           </Typography>
//           <Typography variant="body2" className="user-email">
//             kaustav@example.com
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Header;

