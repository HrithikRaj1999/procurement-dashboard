import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Button,
  useTheme,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

function AppBarContent() {
  return (
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      Procurement
    </Typography>
  );
}

function MenuButton({ onClick }) {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={onClick}
      edge="start"
      sx={{ marginRight: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );
}

function SearchButton() {
  return (
    <IconButton color="inherit">
      <SearchIcon />
    </IconButton>
  );
}

function NotificationsButton() {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

function AccountButton() {
  return (
    <Button color="inherit" startIcon={<AccountCircle />}>
      Daniel Rogers
    </Button>
  );
}

function HeaderBar({ open, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <MenuButton onClick={handleDrawerClose} />
          <AppBarContent />
          <SearchButton />
          <NotificationsButton />
          <AccountButton />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HeaderBar;
