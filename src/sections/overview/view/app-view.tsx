import React, { useState } from "react";
import {
  Container,
  IconButton,
  Box,
  Stack,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import TuneIcon from "@mui/icons-material/Tune";
import CustomIcon from "@mui/icons-material/KeyboardArrowDown";
import SwitchButton from "@/components/switch/switch";

import { DashboardCard } from "@/components/card";
import { Chart } from "@/components/charts";
import { SearchInput } from "@/components/inputs";
import { ContainedButton } from "@/components/buttons";
import { CustomIconButton } from "@/components/Iconbuttons";
import { OrderStatus } from "./component/status";
import { UserCard } from "./component/userCard";
import UserAvatar from "/assets/avatar/user.png";
import Product from "/assets/products/product.png";
import { useTheme } from "@mui/material/styles";

export default function AppView() {
  const theme = useTheme();
  const [selectedOption1, setSelectedOption1] = useState("10");
  const [selectedOption2, setSelectedOption2] = useState("10");
  const [activeTab, setActiveTab] = useState("orders");
  const ft15 = {fontSize: 15};
  const handleFirstChange = (event: any) => {
    setSelectedOption1(event.target.value);
  };

  const handleSecondChange = (event: any) => {
    setSelectedOption2(event.target.value);
  };

  const CustomSelect = ({ value, onChange, items }: any) => (
    <FormControl>
      <Select
        IconComponent={CustomIcon}
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiSelect-select": {
            padding: "10px",
            fontSize: 15,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
      >
        {items.map((item: any) => (
          <MenuItem key={item.value} value={item.value} sx={ft15}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const options1 = [
    { value: 10, label: "Last 6 months" },
    { value: 20, label: "Last 3 months" },
    { value: 30, label: "Last 1 month" },
  ];

  const options2 = [
    { value: 10, label: "Last 5 months" },
    { value: 20, label: "Last 6 months" },
    { value: 30, label: "Last 7 months" },
  ];

  const Data = [
    { count: 250, percent: 40, status: 1 },
    { count: 302, percent: -20, status: 2 },
    { count: 2321, percent: 39, status: 3 },
    { count: 22, percent: -10, status: 4 },
    { count: 50, percent: 40, status: 4 },
    { count: 2503, percent: 80, status: 2 },
  ];

  return (
      <Container maxWidth="xl" sx={{ paddingBottom:5, backgroundColor: "#f2f2f2"}}>
        <SwitchButton activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "orders" ? (
          <Box>
            <Stack
              justifyContent="space-around"
              direction="row"
              alignItems="center"
              sx={{ pt: 1, pb: 1}}
            >
              <CustomSelect
                value={selectedOption1}
                onChange={handleFirstChange}
                items={options1}
              />
              <Stack direction="column" sx={{ fontSize: 9,ml:1,mr:1 }}>
                <EastIcon sx={ft15} />
                <WestIcon sx={ft15} />
              </Stack>
              <CustomSelect
                value={selectedOption2}
                onChange={handleSecondChange}
                items={options2}
              />
              <IconButton sx={{ color: "black" }}>
                <TuneIcon />
              </IconButton>
            </Stack>
            <Stack spacing={1}>
              {Data.map((item, index) => (
                <DashboardCard
                  percent={item.percent}
                  status={item.status}
                  count={item.count}
                  key={index}
                />
              ))}
              <Chart />
            </Stack>
          </Box>
        ) : (
          <Stack spacing={2} sx={{ paddingTop: 2 }}>
            <SearchInput />          
            <Grid container spacing={1}>
              <Grid item xs={6.5}>
                <ContainedButton />
              </Grid>
              <Grid item xs={5.5}>
                <Stack direction="row" spacing={1}>
                  <CustomIconButton image="lightdown" size={16}/>
                  <CustomIconButton image="lightup" size={16}/>
                  <CustomIconButton image="lighttune" size={16}/>
                </Stack>
              </Grid>
            </Grid>
            <Stack spacing={2}>
              <Typography sx={{fontSize: 15, fontWeight: 'bold'}}>Your Orders</Typography>
              <OrderStatus />
              <UserCard 
                userName="John Bushmill"
                userImg={UserAvatar}
                product="Visionary Brew "
                productImg={Product}
                total={120.00}
                payment ="Mastercard"
                date = "29 Dec 2022"
                orderNo={302012}
                status = {1}
              />
              <UserCard 
                userName="John Myaie"
                userImg={UserAvatar}
                product="Visionary Brew"
                productImg={Product}
                total={1900.00}
                payment ="PayPal"
                date = "24 Oct 2022"
                orderNo={302012}
                status = {2}
              />
            </Stack>
          </Stack>
        )}
        
      </Container>
  );
}
