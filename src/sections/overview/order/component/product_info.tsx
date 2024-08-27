import React, { useState } from "react";
import { Typography, Grid, Stack, Avatar, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

interface ProductCardProps {
  name: string;
  type: string;
  price: number;
  count: number;
  img: any;
}

const commonStyles = {
  alignItemsCenter: {
    alignItems: "center",
  },
  buttonStyles: {
    color: "black",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    width: "24px",
    minWidth: 0,
    backgroundColor: "#fffff4",
    padding: 0,
  },
  sectionStyles: {
    paddingBottom: 1,
    borderBottom: "1px solid #ccc",
    marginTop: 1,
    marginBottom: 4,
  },
};
const txtClass = {fontWeight: "bold", fontSize: {xs:"12px", sm:"16px"}};
const CartButton = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => setCount((prevCount) => prevCount + 1);
  const handleRemove = () => setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  
  return (
    <Stack direction="row" sx={commonStyles.alignItemsCenter}>
      <Button
        variant="contained"
        onClick={handleAdd}
        sx={{ ...commonStyles.buttonStyles, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, '&:hover': {
            backgroundColor: '#4CAF50',
          },}}
      >
        <AddIcon />
      </Button>
      <Typography sx={{ ...commonStyles.buttonStyles, width: "30px", ...txtClass}}>
        {count}
      </Typography>
      <Button
        variant="contained"
        onClick={handleRemove}
        sx={{ ...commonStyles.buttonStyles, borderTopRightRadius: 5, borderBottomRightRadius: 5, '&:hover': {
            backgroundColor: '#4CAF50',
          }, }}
      >
        <RemoveIcon />
      </Button>
    </Stack>
  );
};

export const ProductCard = ({ name, type, price, count, img }: ProductCardProps) => {
  return (
    <Grid container spacing={1} sx={commonStyles.sectionStyles} alignItems="center">
      <Grid item xs={2}>
        <Avatar variant="rounded" src={img} alt={name} style={{ width: "95%", height: "95%", minWidth: "40px" }} />
      </Grid>
      <Grid item xs={10}>
        <Grid container sx={commonStyles.alignItemsCenter}>
          <Grid item xs={8}>
            <Typography sx={{ color: "black",...txtClass}}>
              {name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ color: "black", textAlign: "end", marginRight: 1, ...txtClass}}>
              $ {price}
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={commonStyles.alignItemsCenter}>
          <Grid item xs={4}>
            <Typography sx={{ color: "#969696", ...txtClass}}>
              {type}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" justifyContent="flex-end">
              <CartButton />
              <IconButton aria-label="delete" size="medium" sx={{padding:{xs:"1px", sm:"8px"}}}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
