import * as React from "react";

import { Box, Typography, Paper } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#e6eaee", // light grey background
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        paddingTop:10
        
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        I'M{" "}
        <span
          style={{
            fontWeight: "normal",
            WebkitTextStroke: "1px black",
            color: "transparent",
          }}
        >
          AASHISH
        </span>{" "}
        KUMAR
      </Typography>

      {/* Subtitle Label */}
      <Paper
        elevation={1}
        sx={{
          px: 3,
          py: 1,
          bgcolor: "#f8f8f8"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          • UI Designer • Webflow Developer • Marketer
        </Typography>
      </Paper>
    </Box>
  );
}
