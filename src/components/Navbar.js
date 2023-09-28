import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h5" component="p">
              Bank of DG
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
