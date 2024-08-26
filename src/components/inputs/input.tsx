import {
    OutlinedInput,
    InputAdornment,
    FormControl
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput= () => {
    return (
      <FormControl sx={{ m: 0, width: '100%'}}>
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search Product..."
          sx={{
            height:"46px",
            paddingLeft: '8px', 
            paddingRight: '8px', 
            paddingTop:0,
            paddingBottom:0,
            margin: 0,
            '&.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />
      </FormControl>
    );
  }