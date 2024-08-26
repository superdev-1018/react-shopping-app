import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

interface TextBtnProps {
  fontColor: string,
  bgColor: string,
  title: string
}

interface ContainedButtonProps {
  title: string,
  icon: any,
}

export const ContainedButton = ({title,icon}: ContainedButtonProps) => {
  return (
    <Button
      variant="contained"
      startIcon={icon=="plus" ? <AddIcon /> : null}
      fullWidth
      sx={{
        backgroundColor: "#4CAF50",
        color: "#ffffff",
        padding: "10px 20px",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: "#388E3C",
        },
        "& .MuiButton-endIcon": {
          marginLeft: "8px",
        },
        borderRadius: "8px",
        minWidth: "150px",
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
        fontSize: 16,
        width: "80%",
        padding: "10px 20px",
        "& .MuiButton-endIcon": {
          marginLeft: "8px",
        },
        minWidth: "150px",
        fontWeight: 100,
      }}
    >
      {title}
    </Button>
  );
};
