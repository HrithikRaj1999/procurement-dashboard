import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import { Box } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#f4f5fd",
      paper: "#ffffff",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Procurement Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            pt: `${64}px`,
            height: "calc(100vh - 64px)",
            overflow: "auto",
          }}
        >
          <MainPage />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
