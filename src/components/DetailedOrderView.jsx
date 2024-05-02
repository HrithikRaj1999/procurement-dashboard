import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";

function DetailedOrderView() {
  const invoices = [
    {
      id: 1,
      status: "Invoice Paid",
      ref: "PJIN002271-SRIN",
      amount: "34,445.00",
      currency: "USD",
      invoiceDate: "23 Sep 2019",
      paidDate: "30 Jun 2020",
    },
    {
      id: 2,
      status: "Invoice Paid",
      ref: "PJIN002156-SRIN",
      amount: "31,320.00",
      currency: "USD",
      invoiceDate: "12 Aug 2019",
      paidDate: "30 Jun 2020",
    },
  ];

  const freightDetails = {
    pieces: 0,
    weight: 0,
    cbm: 0,
    order: "-",
    mode: "-",
    awbRef: "-",
  };

  const deliveryDetails = {
    orderDate: "10 May 2023",
    expectedDate: "02 Jun 2023",
    port: "-",
    exDays: 15,
    address: "Contour Avenue, 2133 LD",
    phone: "+31-20-5000 300",
    email: "po.office@marine.global",
  };

  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Invoices
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Attachment</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Reference</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Invoice Date</TableCell>
                <TableCell>Paid Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>
                    <AttachmentIcon />
                  </TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.ref}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.currency}</TableCell>
                  <TableCell>{invoice.invoiceDate}</TableCell>
                  <TableCell>{invoice.paidDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Delivery To
          </Typography>
          <Typography variant="body2">
            Ordered Date: {deliveryDetails.orderDate}
          </Typography>
          <Typography variant="body2">
            Expected: {deliveryDetails.expectedDate}
          </Typography>
          <Typography variant="body2">Port: {deliveryDetails.port}</Typography>
          <Typography variant="body2">
            Ex Works Days: {deliveryDetails.exDays}
          </Typography>
          <Typography variant="body2">Marine</Typography>
          <Typography variant="body2">{deliveryDetails.address}</Typography>
          <Typography variant="body2">{deliveryDetails.phone}</Typography>
          <Typography variant="body2">{deliveryDetails.email}</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Freight Details
          </Typography>
          <Typography variant="body2">
            No. of pieces: {freightDetails.pieces}
          </Typography>
          <Typography variant="body2">
            Weight (in KG): {freightDetails.weight}
          </Typography>
          <Typography variant="body2">
            Total CBM: {freightDetails.cbm}
          </Typography>
          <Typography variant="body2">
            Freight Order: {freightDetails.order}
          </Typography>
          <Typography variant="body2">
            Transport Mode: {freightDetails.mode}
          </Typography>
          <Typography variant="body2">
            AWB/Reference No.: {freightDetails.awbRef}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DetailedOrderView;
