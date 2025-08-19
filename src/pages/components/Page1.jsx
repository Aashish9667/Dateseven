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
        marginTop: "150px",
        marginBottom: "100px",
        marginLeft: "200px",
        marginRight: "200px",
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
          bgcolor: "#f8f8f8",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
          "&:hover .hoverText": {
            fontSize: "1.2rem", // text size increase on hover
          },
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          className="hoverText"
          sx={{ transition: "all 0.3s ease" }} // smooth animation
        >
          • UI Designer • Webflow Developer • Marketer
        </Typography>
      </Paper>
    </Box>
  );
}
