import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Button, Grid, Typography, Box } from "@mui/material";

export default function Page3() {
  const leftColumn = ["Logo Design", "Branding Identity", "Web Design"];
  const rightColumn = [
    "Social Marketing",
    "Digital Marketing",
    "Product Design",
  ];

  return (
    <Box sx={{ marginTop: "0px" }}>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        {/* Left Side */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.05)",
              p: 4,
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <img
              src="/image.jpg"
              alt="profile"
              style={{
                display: "block",
                margin: "365.5 365.5 0",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "300px",
              }}
            />
            <Typography variant="h4" sx={{ mt: 3 }}>
              AASHISH KUMAR
            </Typography>

            <Box sx={{ mt: 2 }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  border: "2px solid  #d3d3d3",
                  borderRadius: "50px",
                  display: "inline-block",
                  padding: "10px 20px",
                  color: "grey",
                }}
              >
                Available for Work
                <span
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "#90EE90",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "blink 2s infinite",
                    marginLeft: "10px",
                  }}
                ></span>
              </span>
              <style>
                {`@keyframes blink {
                  0% { box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2) }
                  100% { box-shadow: 0 0 0 20px rgba(0, 0, 0, 0) }
                }`}
              </style>
            </Box>

            <Box
              sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 3 }}
            >
              <FacebookIcon sx={iconStyle("#1877F2")} />
              <InstagramIcon sx={iconStyle("#E4405F")} />
              <TwitterIcon sx={iconStyle("#1DA1F2")} />
              <GitHubIcon sx={iconStyle("#333")} />
            </Box>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "55px" }, // ✅ Responsive font size
              lineHeight: { xs: "28px", sm: "40px", md: "72px" }, // ✅ Responsive line height
              mb: 3,
              textAlign: "left", // ✅ Always left aligned
            }}
          >
            Hello, I’m AASHISH KUMAR, <br />
            <span style={{ border: "2px solid #d3d3d3", padding: "5px" }}>
              Web Developer
            </span>{" "}
            and <br /> UX / UI Designer Based <br /> in New Delhi, India.
          </Typography>

          <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
            <a href="/resume.pdf" download style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  border: "2px solid #d3d3d3",
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": { color: "black", backgroundColor: "white" },
                }}
              >
                Download CV <DownloadIcon />
              </Button>
            </a>
          </Box>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} sm={6}>
              {leftColumn.map((service, i) => (
                <Typography key={i} sx={serviceStyle}>
                  <NorthEastIcon sx={{ fontSize: 16, mr: 1 }} />
                  {service}
                </Typography>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
              {rightColumn.map((service, i) => (
                <Typography key={i} sx={serviceStyle}>
                  <NorthEastIcon sx={{ fontSize: 16, mr: 1 }} />
                  {service}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const iconStyle = (hoverColor) => ({
  border: "2px solid grey",
  padding: "5px",
  fontSize: "60px",
  color: "grey",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    color: hoverColor,
  },
});

const serviceStyle = {
  display: "flex",
  alignItems: "center",
  color: "grey",
  fontSize: "18px",
  mb: 2,
};
