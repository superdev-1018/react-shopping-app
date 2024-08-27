import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuList,
  MenuItem,
  ListItemText,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyAccordion = () => {
  const [selectedText, setSelectedText] = useState("Cash");
  const [originalText, setOriginalText] = useState("Accordion 1"); 
  const [expanded, setExpanded] = useState(false); 

  const handleMenuItemClick = (text:any) => {
    setOriginalText(selectedText);
    setSelectedText(text);
    setExpanded(false); 
  };

  return (
    <Stack spacing={2} sx={{maxWidth:"100%"}} justifyContent={"center"}>
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            width: "300px",
            border: "1px solid black",
            minHeight: 30,
            "&.Mui-expanded": {
              minHeight: 30,
              margin: 0,
            },
            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: "10px 0",
            },
          }}
        >
          {selectedText}
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0, width: "300px" }}>
          <MenuList>
            <MenuItem
              onClick={() => handleMenuItemClick("Cash")}
              sx={{ borderBottom: "1px solid", paddingLeft: 1, paddingRight: 1 }}
            >
              <ListItemText>Cash</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("Cash")}
              sx={{ borderBottom: "1px solid", paddingLeft: 1, paddingRight: 1 }}
            >
              <ListItemText>Cash</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("Crypto")}
              sx={{ borderBottom: "1px solid", paddingLeft: 1, paddingRight: 1 }}
            >
              <ListItemText>Crypto</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("Crypto")}
              sx={{ borderBottom: "1px solid", paddingLeft: 1, paddingRight: 1 }}
            >
              <ListItemText>Crypto</ListItemText>
            </MenuItem>
          </MenuList>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default MyAccordion;
