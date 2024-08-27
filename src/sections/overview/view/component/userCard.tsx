import React, { useState } from "react";
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
import { CustomImgButton } from "@/components/Iconbuttons";
import { Link } from "react-router-dom";

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
  userName: string;
  userImg: string;
  product: string;
  productImg: string;
  total: number;
  payment: string;
  date: string;
  orderNo: number;
  status: number;
}

const sectionStyles = {
  paddingBottom: 1,
  borderBottom: "1px solid #ccc",
  marginTop: 1,
};

const UserInfo = ({
  avatarSrc,
  label,
  name,
  additionalInfo,
}: UserInfoProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const txtClass1 = {
    color: "#969696",
    fontWeight: "bold",
    fontSize: {
      xs: "13px",
      sm: "16px",
      letterSpacing: hovered ? "2px" : "normal",
      transition: "letter-spacing 0.3s",
    },
  };
  const txtClass2 = {
    fontWeight: "bold",
    fontSize: {
      xs: "13px",
      sm: "16px",
      letterSpacing: hovered ? "2px" : "normal",
      transition: "letter-spacing 0.3s",
    },
  };

  return (
    <Grid
      container
      spacing={1}
      sx={sectionStyles}
      alignItems="center"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid item xs={2}>
        <Avatar variant="rounded" src={avatarSrc} alt={label} />
      </Grid>
      <Grid item xs={10}>
        <Typography sx={txtClass1}>{label}</Typography>
        <Typography sx={txtClass2}>
          {name}
          {additionalInfo && (
            <span style={{ color: "#969696" }}> {additionalInfo}</span>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};
const txtClass1 = {
  color: "#969696",
  fontWeight: "bold",
  fontSize: { xs: "13px", sm: "16px" },
};
const txtClass2 = { fontWeight: "bold", fontSize: { xs: "13px", sm: "16px" } };
const SummarySection: React.FC<SummarySectionProps> = ({ title, value }) => (
  <Box>
    <Typography sx={txtClass1}>{title}</Typography>
    <Typography sx={txtClass2}>
      {typeof value == "number" ? "$" + value : value}
    </Typography>
  </Box>
);

export const UserCard = ({
  userName,
  userImg,
  product,
  productImg,
  total,
  payment,
  date,
  orderNo,
  status,
}: UserCardProps) => {
  let textBtnColor = "#EDF7ED";
  let textBtnFontColor = "#4CAF50";
  let btnTitle = "Complete";
  switch (status) {
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

  const hoverClass = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <Card sx={{ borderRadius: "5px" }}>
      <CardContent>
        <Grid container spacing={1} sx={sectionStyles} alignItems={"center"}>
          <Grid item xs={6.5}>
            <TextButton
              title={btnTitle}
              fontColor={textBtnFontColor}
              bgColor={textBtnColor}
            />
          </Grid>
          <Grid item xs={5.5}>
            <Stack direction="row" spacing={1} justifyContent={"flex-end"}>
              <CustomImgButton image="back" size={14} />
              <CustomImgButton image="delete" size={14} />
              <CustomImgButton image="detail" size={14} />
            </Stack>
          </Grid>
        </Grid>
        <Link to="/order/detail" style={hoverClass}>
          <UserInfo avatarSrc={userImg} label="Customer" name={userName} />
          <UserInfo
            avatarSrc={productImg}
            label="Product"
            name={product}
            additionalInfo="+3 Products"
          />
        </Link>
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
