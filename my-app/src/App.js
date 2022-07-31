import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Route, Routes } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./Components/navbar";

import News from "./Pages/news";
import Kampagnen from "./Pages/Kampagnen";

const darktheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline />
      <main>
        <Navbar />
        <Routes>
          <Route path="/News" element={<News />} />
          <Route path="/Kampagnen" element={<Kampagnen />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
