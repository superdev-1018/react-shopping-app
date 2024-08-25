import React from "react";
import Button from "@mui/material/Button";
import LightDown from "/assets/icons/lightdownload.png";
import LightUp from "/assets/icons/lightup.png";
import LightTune from "/assets/icons/lighttune.png";
import Back from "/assets/icons/back.png";
import Delete from "/assets/icons/delete.png";
import Detail from "/assets/icons/detail.png";

interface CustomIconButtonProps {
    image?: string;
    size?: number
}

export const CustomIconButton = ({ image, size }: CustomIconButtonProps) => {
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
            iconSrc = LightDown; // Default icon if none match
            break;
    }

    return (
        <Button
            variant="outlined"
            sx={{
                backgroundColor: "#D9D9D9",
                aspectRatio: 1,
                padding: "15px",
                minWidth: "40px",
                border: "none",
                "&:hover": {
                    backgroundColor: "#2196F3",
                  },
            }}
        >
            <img src={iconSrc} style={{ width: size, height: size }} alt="icon" />
        </Button>
    );
};
