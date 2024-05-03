import React from "react";
import { Typography, Box, Grid, Paper, Card, CardContent } from "@mui/material";
import DetailedOrderView from "./DetailedOrderView";
import SearchBar from "./SearchBar";
import AllOrders from "./AllOrders";

function SearchSection() {
  return (
    <>
      <Paper elevation={3} sx={{ marginBottom: 2, padding: 2 }}>
        <SearchBar />
      </Paper>
      <Card elevation={3} variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
        <CardContent>
          <AllOrders />
        </CardContent>
      </Card>
    </>
  );
}

function OrderDetailView() {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Detailed Order View
      </Typography>
      <DetailedOrderView />
    </Paper>
  );
}

function MainPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, pt: 8, minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <SearchSection />
        </Grid>
        <Grid item xs={12} md={8}>
          <OrderDetailView />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPage;
