import { Box, Button, Typography } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return(
    <>
      <Box
        sx={{
          margin: "12rem auto",
          textAlign: "center",
          padding: "1rem"
        }}
      >
        <Typography 
          variant="h3"
          style={{fontWeight: 700}}
        >
          Share your images online, password protected
        </Typography>
        <br />
        <br />
        <Button 
          variant="contained"
          size="large"
          style={{
            fontSize: "1.2rem"
          }}
        >
          Create my account!
        </Button>
      </Box>
    </>
  );
};

export default LandingPage;