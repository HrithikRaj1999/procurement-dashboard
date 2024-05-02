import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import { Box } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Procurement Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 8 }}>
          <MainPage />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
