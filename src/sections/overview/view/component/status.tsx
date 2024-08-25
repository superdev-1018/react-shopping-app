import {
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const data = [
    { label: "Processing: 50", color: "#2196F3" },
    { label: "Pending: 1550", color: "#FF9800" },
    { label: "Complete: 50", color: "#4CAF50" },
  ];
  
export const OrderStatus = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1}
      sx={{
        width: "100%",
        backgroundColor: "#fffffd",
        overflowX: "auto", 
        maxHeight: 40,
        padding: 2,
      }}
      justifyContent="space-around"
    >
      {data.map((item, index) => (
        <Stack
          key={index}
          direction="row"
          alignItems="center"
          textAlign="center"
        >
          <FiberManualRecordIcon sx={{ fontSize: 10, color: item.color }} />
          <Typography sx={{ fontSize: 12, marginLeft:"2px", fontWeight: "bold" }}>
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
