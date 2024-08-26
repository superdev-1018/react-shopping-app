import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GridViewIcon from '@mui/icons-material/GridView';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { makeStyles } from '@mui/styles';
import NavContent from "/assets/nav_mark.png";

const useStyles = makeStyles({

});

export default function BottomNav() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabClass = { minWidth: 0, fontSize: '10px', padding: '6px 12px', aspectRatio: 1};

  return (
    <>
    <Box
      sx={{
        height: "15%",
        maxWidth: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: "relative",
        bottom: 0,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stack
        justifyContent="space-around"
        alignItems="center"
        direction="row"
        sx={{
          position: "absolute",
          bottom: 0,
          height:"80%",
          width: "100%",
          borderTopLeftRadius: 44,
          borderTopRightRadius: 44,
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.9)',
          overflow: "hidden"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs"
          sx={{ minHeight: 48 }}
          TabIndicatorProps={{
            sx: {
              bottom: '-5px', 
              height: '5px',
              backgroundColor: '#4CAF50', 
              borderRadius: '3px', 
            },
          }}
        >
          <Tab 
            icon={<GridViewIcon />} 
            label="Dashboard" 
            sx={{
              ...tabClass,
              backgroundColor: value === 0 ? '#4CAF50' : 'transparent',
              '&.Mui-selected': {
                color: 'white',
              },
            }} 
          />
          <Tab 
            icon={<ProductionQuantityLimitsIcon />} 
            label="Products" 
            sx={{
              ...tabClass,
              backgroundColor: value === 1 ? '#4CAF50' : 'transparent',
              '&.Mui-selected': {
                color: 'white',
              },
            }} 
          />
          <Tab 
            icon={<ReceiptLongIcon />} 
            label="Orders" 
            sx={{
              ...tabClass,
              backgroundColor: value === 2 ? '#4CAF50' : 'transparent',
              '&.Mui-selected': {
                color: 'white',
              },
            }} 
          />
          <Tab 
            icon={<TrackChangesIcon />} 
            label="Marketing" 
            sx={{
              ...tabClass,
              backgroundColor: value === 3 ? '#4CAF50' : 'transparent',
              '&.Mui-selected': {
                color: 'white',
              },
            }} 
          />
          <Tab 
            icon={<BusinessCenterIcon />} 
            label="Business" 
            sx={{
              ...tabClass,
              backgroundColor: value === 4 ? '#4CAF50' : 'transparent',
              '&.Mui-selected': {
                color: 'white',
              },
            }} 
          />
        </Tabs>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img src={NavContent} />
      </Box>
    </Box>
  </>
  );
}
