import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomIcon from "@mui/icons-material/KeyboardArrowDown";

const ft15 = { fontSize: 15 };
export const FilterSelect = ({ value, onChange, items }: any) => (
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
      }}
    >
      {items.map((item: any) => (
        <MenuItem key={item.value} value={item.value} sx={ft15}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
