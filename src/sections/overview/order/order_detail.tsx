import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { SearchInput } from "@/components/inputs";
import { Card, CardContent, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContainedButton } from "@/components/buttons";
import { ProductCard } from "./component/product_info";
import ProductImg from "/assets/products/product.png";
import Product2Img from "/assets/products/product2.png";

const detail_data = [
  {
    title: "Subtotal",
    value: 363.0,
  },
  {
    title: "Discount",
    value: 50.0,
  },
  {
    title: "Taxes",
    value: 10.0,
  },
  {
    title: "Standard Delivery",
    value: 20.0,
  },
  {
    title: "Total",
    value: 443.0,
  },
];

const user_data = [
  {
    title: "Customer",
    value: "johnbushmill@gmail.com",
  },
  {
    title: "Email",
    value: "+1 235 365 8965",
  },
  {
    title: "PhoneNo",
    value: "Master Card ending in 1234",
  },
  {
    title: "Payment",
    value: "Master Card ending in 1234",
  },
  {
    title: "Address",
    value: "400 Broome St, New York, NY 10013, USA",
  },
];

const txtClass = {color: "black", fontWeight: "bold", fontSize: {xs:"15px", sm: "17px"}}
const DetailText = ({ title, value }: any) => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
      <Typography sx={txtClass}>{title}</Typography>
      <Typography sx={txtClass} color={title == "Total" ? "black" : "#969696"}>
        $ {value}
      </Typography>
    </Stack>
  );
};

const UserDataText = ({ title, value }: any) => {
  return (
    <Stack flexDirection={"row"} gap={1}>
      <Typography sx={{fontWeight: "bold", fontSize: {xs:"13px", sm: "16px"}}} color={"#969696"}>
        {title}:
      </Typography>
      <Typography 
      sx={{ 
        ...txtClass,
        whiteSpace: 'normal',  
        wordBreak: 'break-word', 
        overflowWrap: 'break-word',
      }}
    >{value}</Typography>
    </Stack>
  );
};

export const OrderDetailView = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fffffd", paddingBottom: 3}}>
      <AppBar position="static" sx={{ backgroundColor: "white",paddingTop: {xs:0, sm:1}, paddingBottom:{xs:0,sm:1}}}>
        <Toolbar sx={{ justifyContent: "space-between"}}>
          <IconButton
            edge="start"
            color="default"
            aria-label="menu"
            size="small"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <ArrowBackIosNewIcon sx={{fontSize:{xs:"13px",sm:"16px", fontWeight:"bold"}}}/>
          </IconButton>
          <Typography
            sx={{
              color: "black",
              textAlign: "center",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              fontSize:{xs:"16px", sm:"18px"},
              fontWeight: "bold",
            }}
          >
            Order Details
          </Typography>
          <Box sx={{ width: "10%" }} />
        </Toolbar>
      </AppBar>
      <Stack sx={{ marginTop: 1, padding: 1 }} spacing={2}>
        <SearchInput />
        <ContainedButton title="Add Item" icon="plus"/>
        <Card sx={{ borderRadius: 1, border: "1px solid" }}>
          <CardContent>
            <ProductCard
              name="Visionary Brew"
              type="1 PCS"
              price={121.0}
              count={1}
              img={ProductImg}
            />
            <ProductCard
              name="Visionary Brew"
              type="1 PCS"
              price={190.0}
              count={1}
              img={Product2Img}
            />
            <ProductCard
              name="Visionary Brew"
              type="1 PCS"
              price={121.0}
              count={1}
              img={ProductImg}
            />
            {detail_data.map((item, index) => (
              <DetailText title={item.title} value={item.value} key={index} />
            ))}
          </CardContent>
        </Card>
        <Box sx={{backgroundColor: '#ffffff', paddingBottom:{xs:2,sm:5}, paddingLeft:1}}>
          {user_data.map((item, index) => (
            <UserDataText title={item.title} value={item.value} key={index} />
          ))}
        </Box>
        <ContainedButton title="Place Order" icon="null"/>
      </Stack>
    </Box>
  );
};
