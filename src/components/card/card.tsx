import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Divider,
  Link,
  Icon,
  IconButton,
  Grid,
} from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import WorkIcon from "@mui/icons-material/Work";

interface CardProps {
    count?: number;
    status?: number,
    percent: number;
    icon?: string;
}
export const DashboardCard = ({count, status, percent, icon}: CardProps) => {

  let statusTitle = "";
  let icon_color = "";
  let status_icon = <LocalShippingIcon />;
  switch (status) {
      case 1:
        statusTitle = "Delivery Pending";
        icon_color = "#FF9800";
        status_icon = <ShoppingCartIcon />;
        break;
      case 2:
        statusTitle = "Delivery Processing";
        icon_color = "#2196F3";
        status_icon = <ShoppingCartIcon />;
        break;
      case 3:
        statusTitle = "Delivery Completed";
        icon_color = "#4CAF50";
        status_icon = <WorkIcon />;
        break;
      case 4:
        statusTitle = "Delivery Cancled";
        icon_color = "#F44336";
        status_icon = <CancelIcon />;
        break;
      default:
        statusTitle = "Delivery Pending";
        icon_color = "#FF9800";
        status_icon = <ShoppingCartIcon />;
        break;
      
  }
  const fontClass = { fontSize: 13, fontWeight: "bold" };
  const gridItemClass = {display: 'flex', flexDirection: 'row', alignItems: 'center'};
  return (
    <Card sx={{ borderRadius: 1 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={10} sx={gridItemClass} gap={2}>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              {count}
            </Typography>
            <Typography sx={[fontClass, {color: icon_color}]}>
              {statusTitle}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton sx={{color: icon_color}}>
              {status_icon}
            </IconButton>
          </Grid>
        </Grid>
        
        <Grid container spacing={1}>
          <Grid item xs={10} sx={gridItemClass} gap={2}>
          <Typography sx={{ fontSize: 13, color: percent > 0 ? "green" : "red" }}>{percent>0? "+" : null}{percent}%</Typography>
          <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Link href="#" color="inherit" sx={fontClass}>
                View Products
              </Link>
              <Link href="#" color="inherit" sx={fontClass}>
                More Analytics
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
