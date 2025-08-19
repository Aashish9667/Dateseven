import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#e6eaee",
        minHeight: { xs: "250px", md: "300px" }, // mobile छोटा height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        mx: { xs: 2, sm: 5, md: 20 }, // responsive margin (x-axis)
        my: { xs: 5, md: 12 }, // responsive margin (y-axis)
        textAlign: "center", // mobile में center align
        p: { xs: 2, md: 4 }, // padding adjust
        marginTop:"100px"
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // responsive font size
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
          px: { xs: 2, sm: 3 },
          py: { xs: 0.5, sm: 1 },
          bgcolor: "#f8f8f8",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
          "&:hover .hoverText": {
            fontSize: { xs: "1rem", sm: "1.2rem" },
          },
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          className="hoverText"
          sx={{
            transition: "all 0.3s ease",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
          }}
        >
          • UI Designer • Webflow Developer • Marketer
        </Typography>
      </Paper>
    </Box>
  );
}
