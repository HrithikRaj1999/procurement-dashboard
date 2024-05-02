import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

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
  const orders = [
    {
      orderNumber: "4907 - 00019",
      description: "HOTEL/TECH WORK SQUAD GFR",
      type: "Services",
      date: "12 Jul 2019",
      statusColor: "success.main",
      statusLabel: "RT",
    },
    {
      orderNumber: "5325 - 00034",
      description: "SAFETY EQUIPMENT- COMPULSORY SPARES",
      type: "Consumables",
      date: "04 Mar 2020",
      statusColor: "error.main",
      statusLabel: "TQ",
    },
    {
      orderNumber: "4907 - 00038",
      description: "EM SPARES FOR INTERSTAGE FILTER UNIT",
      type: "Spares",
      date: "26 Jul 2022",
      statusColor: "primary.main",
      statusLabel: "EO",
    },
    {
      orderNumber: "5325 - 00040",
      description: "FUEL/LUBE/AIR/WATER.SEWAGE SYSTEM",
      type: "Spares",
      date: "10 Mar 2019",
      statusColor: "secondary.main",
      statusLabel: "RT",
    },
    {
      orderNumber: "4907 - 00050",
      description: "HOBART FX-A-SEF VSP UNDERCOUNTER",
      type: "Equipment",
      date: "21 Nov 2019",
      statusColor: "info.main",
      statusLabel: "RT",
    },
    {
      orderNumber: "5325 - 00051",
      description: "EXTERNAL LOAD RIG",
      type: "Hardware",
      date: "15 Jan 2021",
      statusColor: "warning.main",
      statusLabel: "TQ",
    },
    {
      orderNumber: "4907 - 00056",
      description: "SERVER UPGRADE IN ZONE 3",
      type: "Services",
      date: "03 Feb 2020",
      statusColor: "success.main",
      statusLabel: "EO",
    },
    {
      orderNumber: "5325 - 00060",
      description: "WIRELESS SENSOR NETWORKS FOR DATA ACQUISITION",
      type: "Equipment",
      date: "12 Dec 2020",
      statusColor: "primary.main",
      statusLabel: "RT",
    },
    {
      orderNumber: "4907 - 00064",
      description: "PORTABLE DRILLING RIG",
      type: "Hardware",
      date: "08 Aug 2019",
      statusColor: "error.main",
      statusLabel: "EO",
    },
    {
      orderNumber: "5325 - 00067",
      description: "REPLACEMENT OF HVAC UNITS",
      type: "Services",
      date: "22 Oct 2021",
      statusColor: "secondary.main",
      statusLabel: "TQ",
    },
  ];
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        All Orders
      </Typography>
      {orders.map((order, index) => (
        <OrderCard key={index} {...order} />
      ))}
    </Box>
  );
}

export default AllOrders;
