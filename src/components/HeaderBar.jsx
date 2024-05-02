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

function HeaderBar({ open, handleDrawerOpen, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <>
      {" "}
      <CssBaseline />
      <AppBar position="fixed" open={handleDrawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{ marginRight: theme.spacing(2) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Procurement
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button color="inherit" startIcon={<AccountCircle />}>
            Daniel Rogers
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HeaderBar;
