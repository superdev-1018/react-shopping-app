import React from 'react';
import { Button, Box } from '@mui/material';

const SwitchButton = ({ activeTab, setActiveTab }: any) => {
  return (
    <Box display={"flex"} justifyContent={"center"} sx={{marginTop: "20px"}}>
      <Button
        variant={activeTab === 'orders' ? 'contained' : 'outlined'}
        onClick={() => setActiveTab('orders')}
        sx={{
          position: 'relative',
          transition: 'background-color 0.2s ease',
          marginRight: '-40px', 
          zIndex: activeTab === 'orders' ? 1 : 0,
          backgroundColor: activeTab === 'orders' ? '#4CAF50' : '#ffffff', 
          color: activeTab === 'orders' ? 'white' : 'gray',
          borderRadius: '25px',
          border: 'none', 
          maxWidth: '250px',
          width: '195px', 
          height: '50px',
          "&:hover": {
            backgroundColor: "#EDF7eD",
          },
        }}
      >
        Orders
      </Button>
      <Button
        variant={activeTab === 'analytics' ? 'contained' : 'outlined'}
        onClick={() => setActiveTab('analytics')}
        sx={{
          position: 'relative',
          transition: 'background-color 0.2s ease',
          zIndex: activeTab === 'analytics' ? 1 : 0,
          backgroundColor: activeTab === 'analytics' ? '#4CAF50' : '#ffffff', 
          color: activeTab === 'analytics' ? 'white' : 'gray', 
          borderRadius: '25px', 
          border: 'none',
          maxWidth: '250px',
          width: '195px', 
          height: '50px',
          "&:hover": {
            backgroundColor: "#EDF7ED",
          }, 
        }}
      >
        Analytics
      </Button>
    </Box>
  );
};

export default SwitchButton;
