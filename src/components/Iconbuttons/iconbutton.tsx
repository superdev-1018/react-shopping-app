import React from "react";
import Button from "@mui/material/Button";

import LightDown from "/assets/icons/lightdownload.png";
import LightUp from "/assets/icons/lightup.png";
import LightTune from "/assets/icons/lighttune.png";
import Back from "/assets/icons/back.png";
import Delete from "/assets/icons/delete.png";
import Detail from "/assets/icons/detail.png";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

interface CustomImgButtonProps {
  image?: string;
  size?: number;
  type?: string;
  open?: () => void;
}

export const CustomImgButton = ({
  image,
  size,
  open,
}: CustomImgButtonProps) => {
  let iconSrc;
  switch (image) {
    case "lightdown":
      iconSrc = LightDown;
      break;
    case "lightup":
      iconSrc = LightUp;
      break;
    case "lighttune":
      iconSrc = LightTune;
      break;
    case "back":
      iconSrc = Back;
      break;
    case "delete":
      iconSrc = Delete;
      break;
    case "detail":
      iconSrc = Detail;
      break;
    default:
      iconSrc = LightDown;
      break;
  }

  return (
    <Button
      variant="outlined"
      sx={{
        backgroundColor: "#D9D9D9",
        aspectRatio: 1,
        maxWidth: "40px",
        maxHeight: "40px",
        minWidth: "35px",
        minHeight: "35px",
        border: "none",
        color: "black",
        "&:hover": {
          backgroundColor: "#2196F3",
        },
      }}
      onClick={open}
    >
      {image == "lightdown" ? (
        <FileDownloadOutlinedIcon />
      ) : image == "lightup" ? (
        <SortOutlinedIcon />
      ) : image == "lighttune" ? (
        <TuneOutlinedIcon />
      ) : image == "back" ? (
        <RefreshOutlinedIcon />
      ) : image == "detail" ? (
        <RemoveRedEyeOutlinedIcon />
      ) : image == "delete" ? (
        <DeleteOutlinedIcon />
      ) : (
        <FileDownloadOutlinedIcon />
      )}
    </Button>
  );
};
