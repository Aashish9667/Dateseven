import * as React from "react";
import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white", // white background
        boxShadow: "none", // no shadow
        padding: "0.5rem 1rem",
     
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black", // bold black text
          }}
        >
          Portfolio
        </Typography>

        {/* Right Side Menu */}
        <Stack direction="row" spacing={2}>
          {["Home", "About", "Resume", "Services", "Projects", "Contact"].map(
            (item) => (
              <Button
                key={item}
                sx={{
                  color: "black",
                  textTransform: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  }
                }}
              >
                {item}
              </Button>
            )
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
