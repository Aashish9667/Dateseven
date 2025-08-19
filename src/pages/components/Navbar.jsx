import * as React from "react";
import { Toolbar, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50, // kitna scroll hone par shrink effect start hoga
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: trigger
          ? "0px 2px 10px rgba(0,0,0,0.1)"
          : "0px 2px 10px rgba(0,0,0,0.05)",
        padding: trigger ? "0.3rem 2rem" : "1rem 2rem", // scroll hone par chhota
        transition: "all 400ms ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Brand */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black",
            fontSize: trigger ? "1.1rem" : "1.4rem", // scroll hone par text chhota
            transition: "all 400ms ease",
          }}
        >
          Portfolio
        </Typography>

        {/* Right Menu */}
        <Stack direction="row" spacing={3}>
          {["Home", "About", "Resume", "Services", "Projects", "Contact"].map(
            (item) => (
              <Button
                key={item}
                sx={{
                  color: "black",
                  fontSize: trigger ? "0.9rem" : "1rem",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    textDecoration:"underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "4px",
                  },
                  transition: "all 300ms ease",
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
