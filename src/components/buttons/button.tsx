import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

interface TextBtnProps {
  fontColor: string,
  bgColor?: string,
  title?: string
}

interface ContainedButtonProps {
  title: string,
  icon: any,
}

export const ContainedButton = ({title,icon}: ContainedButtonProps) => {
  return (
    <Button
  variant="contained"
  startIcon={icon === "plus" ? <AddIcon /> : null}
  fullWidth
  sx={{
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    paddingTop: "8px",
    paddingBottom: "8px",
    fontSize: {
      xs: "12px", 
      sm: "16px"
    },
    "&:hover": {
      backgroundColor: "#388E3C",
    },
    "& .MuiButton-endIcon": {
      marginLeft: "8px",
    },
    borderRadius: "8px",
    width: "100%",
    height: "100%",
    fontWeight: 100,
  }}
>
  {title}
</Button>
  );
};

export const TextButton = ({title, fontColor, bgColor}: TextBtnProps) => {
  return (
    <Button
      variant="text"
      sx={{
        backgroundColor: bgColor,
        color: fontColor,
        borderRadius: "6px",
        maxHeight: "40px",
        fontSize: {
          xs: "12px", 
          sm: "16px"
        },
        width: "90%",
        padding: "10px 0px",
        "& .MuiButton-endIcon": {
          marginLeft: "8px",
        },
        fontWeight: 100,
      }}
    >
      {title}
    </Button>
  );
};
