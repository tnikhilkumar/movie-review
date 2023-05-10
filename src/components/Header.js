import React from "react";
import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          marginLeft: "35%",
          fontWeight: "bold",
          marginTop: "5px",
          width: "100%",
          textAlign: "center",
          fontSize: "5vw",
          marginLeft: "20px"
        }}
      >
        THE PURSUIT OF HAPPYNESS
      </Typography>
      <Divider />
      <Box
        sx={{
          border: "2px solid black",
          width: "fit-content",
          height: "fit-content",
          marginLeft: "80px",
          marginRight: "60px",
          marginTop: "15px"
        }}
      >
        <img
          src="https://movietvtechgeeks.com/wp-content/uploads/2015/08/pursuit-of-happyness-profound-images-2015.jpg"
          alt="Logo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </>
  );
}

export default Header;
