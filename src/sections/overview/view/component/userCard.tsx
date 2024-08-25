import React from "react";
import {
  Typography,
  CardContent,
  Card,
  Grid,
  Stack,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import { TextButton } from "@/components/buttons";
import { CustomIconButton } from "@/components/Iconbuttons";


interface UserInfoProps {
  avatarSrc: string;
  label: string;
  name: string;
  additionalInfo?: string;
}


interface SummarySectionProps {
  title: string;
  value: string | number;
}

interface UserCardProps {
    userName: string,
    userImg: string,
    product: string,
    productImg:string,
    total: number,
    payment: string,
    date : string,
    orderNo: number,
    status: number
}

const sectionStyles = {
  paddingBottom: 1,
  borderBottom: "1px solid #ccc",
  marginTop: 1,
};

const UserInfo: React.FC<UserInfoProps> = ({ avatarSrc, label, name, additionalInfo }) => (
  <Grid container spacing={1} sx={sectionStyles} alignItems="center">
    <Grid item xs={2}>
      <Avatar variant="rounded" src={avatarSrc} alt={label} />
    </Grid>
    <Grid item xs={10}>
      <Typography sx={{ color: "#969696" }}>{label}</Typography>
      <Typography variant="h6">
        {name}
        {additionalInfo && (
          <span style={{ color: "#969696" }}> {additionalInfo}</span>
        )}
      </Typography>
    </Grid>
  </Grid>
);


const SummarySection: React.FC<SummarySectionProps> = ({ title, value }) => (
  <Box>
    <Typography sx={{ color: "#969696" }}>{title}</Typography>
    <Typography variant="h5">
        {
            typeof(value) =="number"? "$"+ value : value
        }
    </Typography>
  </Box>
);

export const UserCard = ({userName, userImg, product, productImg, total, payment, date, orderNo, status}: UserCardProps) => {
    let textBtnColor = "#EDF7ED";
    let textBtnFontColor = "#4CAF50";
    let btnTitle = "Complete";
    switch (status){
        case 1:
            textBtnColor = "#EDF7ED";
            textBtnFontColor = "#4CAF50";
            btnTitle = "Complete";
            break;
        case 2:
            textBtnColor = "#FFF5E5";
            textBtnFontColor = "#FF9800";
            btnTitle = "Pending";
            break;
    }
  return (
    <Card sx={{ borderRadius: "5px" }}>
      <CardContent>
        <Grid container spacing={1} sx={sectionStyles}>
          <Grid item xs={6.5}>
            <TextButton title={btnTitle} fontColor={textBtnFontColor} bgColor={textBtnColor} />
          </Grid>
          <Grid item xs={5.5}>
            <Stack direction="row" spacing={1}>
              <CustomIconButton image="back" size={15} />
              <CustomIconButton image="delete" size={15} />
              <CustomIconButton image="detail" size={15} />
            </Stack>
          </Grid>
        </Grid>

        <UserInfo
          avatarSrc={userImg}
          label="Customer"
          name={userName}
        />

        <UserInfo
          avatarSrc={productImg}
          label="Product"
          name={product}
          additionalInfo="+3 Products"
        />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          flexDirection="row"
          gap={2}
          sx={sectionStyles}
        >
          <SummarySection title="Total" value={total} />
          <SummarySection title="Payment" value={payment} />
          <SummarySection title="Date" value={date} />
        </Stack>

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          flexDirection="row"
          gap={2}
          sx={sectionStyles}
        >
          <SummarySection title="Order No" value={orderNo} />
        </Stack>
      </CardContent>
    </Card>
  );
};
