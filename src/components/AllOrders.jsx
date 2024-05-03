import React from "react";
import {
  Box,
  Card, Typography,
  Chip,
  Avatar
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Orders from "../contants/Orders";

function OrderCard({
  orderNumber,
  description,
  type,
  date,
  statusColor,
  statusLabel,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
        <Avatar sx={{ bgcolor: statusColor, marginRight: 2 }}>
          {type === "Services" ? <SettingsIcon /> : <LocalShippingIcon />}
        </Avatar>
        <Box>
          <Typography variant="subtitle1">{orderNumber}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
        <Chip label={statusLabel} color="primary" size="small" />
        <Typography variant="caption" sx={{ marginLeft: 1 }}>
          {date}
        </Typography>
      </Box>
    </Card>
  );
}

function AllOrders() {

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        All Orders
      </Typography>
      {Orders.map((order, index) => (
        <OrderCard key={index} {...order} />
      ))}
    </Box>
  );
}

export default AllOrders;
