import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./Components/navbar";

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
        <Button variant="contained">yo</Button>
      </main>
    </ThemeProvider>
  );
}

export default App;
