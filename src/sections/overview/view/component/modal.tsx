import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CustomAccordion from "./accordion";
import CustomIcon from "@mui/icons-material/KeyboardArrowDown";
import { ContainedButton, TextButton } from "@/components/buttons";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
}));

const payment_methtod = [
  { value: 10, label: "Cash" },
  { value: 20, label: "E-Transfer" },
  { value: 30, label: "Debit" },
  { value: 40, label: "Credit Card" },
  { value: 50, label: "Paypal" },
  { value: 60, label: "Visa" },
  { value: 70, label: "Master Card" },
];

const order_status = [
  { value: 10, label: "New Order" },
  { value: 20, label: "In-Process" },
  { value: 30, label: "Shipped" },
  { value: 40, label: "Out of Delivery" },
  { value: 50, label: "Completed" },
  { value: 60, label: "Canceled" },
];

const FilterSelect = ({ value, onChange, items }: any) => (
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
        minWidth: "260px",
      }}
    >
      {items.map((item: any) => (
        <MenuItem key={item.value} value={item.value} sx={{ fontSize: 15 }}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export const CustomizedDialogs = ({ openDialog, close }: any) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedOption1, setSelectedOption1] = useState("10");
  const [selectedOption2, setSelectedOption2] = useState("10");
  const handleFirstChange = (event: any) => {
    setSelectedOption1(event.target.value);
  };
  const handleSecondChange = (event: any) => {
    setSelectedOption2(event.target.value);
  };

  const handleClick = (label: string) => {
    setSelected(label);
  };

  const buttons = [
    { label: "Download", icon: <SaveAltIcon />, ariaLabel: "download" },
    { label: "SMS", icon: <TextsmsOutlinedIcon />, ariaLabel: "sms" },
    { label: "EMail", icon: <MailOutlineIcon />, ariaLabel: "email" },
    { label: "WhatsApp", icon: <WhatsAppIcon />, ariaLabel: "whatsapp" },
  ];

  return (
    <>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={openDialog.open}
        sx={{ "& .MuiDialog-paper": { margin: 0 } }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {openDialog.type == "download"
            ? "Export CSV Sheet"
            : openDialog.type == "sort"
            ? "Sort"
            : openDialog.type == "payment" && "Filter"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#4CAF50",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {openDialog.type == "download" ? (
            <Stack direction={"row"} justifyContent={"space-around"}>
              {buttons.map(({ label, icon, ariaLabel }) => (
                <Stack
                  key={label}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={1}
                  minWidth={60}
                >
                  <Avatar sx={{ backgroundColor: "#FAFAFA" }}>
                    <IconButton
                      aria-label={ariaLabel}
                      onClick={() => handleClick(label)}
                    >
                      {React.cloneElement(icon, {
                        color: selected === label ? "success" : "inherit",
                      })}
                    </IconButton>
                  </Avatar>
                  <Typography
                    color={selected === label ? "green" : "black"}
                    sx={{ fontSize: { xs: "12px", sm: "16px" } }}
                  >
                    {label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          ) : openDialog.type == "sort" ? (
            <FormControl>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                defaultValue="lowtohigh"
                name="radio-buttons-group"
              >
                {[
                  { value: "lowtohigh", label: "Price -- Low to High" },
                  { value: "hightolow", label: "Price -- High to Low" },
                  { value: "newest", label: "Newest First" },
                ].map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={
                      <Radio
                        sx={{
                          color: "green",
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                      />
                    }
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            openDialog.type == "payment" && (
              <Stack spacing={1}>
                <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                  Payment Method
                </Typography>
                <FilterSelect
                  value={selectedOption1}
                  onChange={handleFirstChange}
                  items={payment_methtod}
                />
                <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                  Order Status
                </Typography>
                <FilterSelect
                  value={selectedOption2}
                  onChange={handleSecondChange}
                  items={order_status}
                />
                <Grid container spacing={0.2}>
                  <Grid item xs={6}>
                  <Button
                      sx={{
                        backgroundColor: "#EDF7ED",
                        color: "green",
                        borderRadius: "6px",
                        maxHeight: "40px",
                        fontSize: {
                          xs: "12px",
                          sm: "16px",
                        },
                        width: "95%",
                        padding: "10px 0",
                        "& .MuiButton-endIcon": {
                          marginLeft: "8px",
                        },
                        fontWeight: 100,
                      }}
                    >
                      Reset
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        borderRadius: "6px",
                        maxHeight: "40px",
                        fontSize: {
                          xs: "12px",
                          sm: "16px",
                        },
                        width: "95%",
                        padding: "10px 0",
                        "& .MuiButton-endIcon": {
                          marginLeft: "8px",
                        },
                        fontWeight: 100,
                      }}
                    >
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            )
          )}
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};
