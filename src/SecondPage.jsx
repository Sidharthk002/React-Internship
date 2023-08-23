// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Container, Typography, Paper } from "@mui/material";
import Component2 from "./Component2";
import Component1 from "./Component1";

function SecondPage() {
  // const usersData = JSON.parse(localStorage.getItem("userData"));
  // const navigate = useNavigate();

  // const latestUserData = usersData[usersData?.length - 1];

  return (
    <Container component="main" maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 10 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Second Page
        </Typography>
        {/* <Typography variant="body1">Name: {latestUserData?.name}</Typography>
        <Typography variant="body1">
          Phone Number: {latestUserData?.phoneNumber}
        </Typography>
        <Typography variant="body1">Email: {latestUserData?.email}</Typography> */}
        <div style={{ marginTop: "2rem" }}>
          <Component2 />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Component1 />
        </div>
      </Paper>
    </Container>
  );
}

export default SecondPage;
