

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Button, Grid, Typography, Box } from "@mui/material";

// ✅ AOS import
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page3() {
  const leftColumn = ["Logo Design", "Branding Identity", "Web Design"];
  const rightColumn = [
    "Social Marketing",
    "Digital Marketing",
    "Product Design",
  ];

  // ✅ AOS initialize
  React.useEffect(() => {
    AOS.init({
      duration: 800, // animation time
      once: true, // ek baar hi chalega
    });
  }, []);

  return (
    <Box sx={{ marginTop: { xs: "80px", md: "110px" },
    px: { xs: "24px", md: "0px" },
       mx: { xs: "24px", md: "0px" }
       ,maxWidth:"100%"}}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 0, md: 5 }} alignItems="center" justifyContent="center">
        {/* Left Side */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              border: {
                xs: "none", // mobile
                md: "1px solid rgba(0, 0, 0, 0.05)", // desktop and tablets
              },
              p: 4,
              borderRadius: "20px",
              textAlign: "center",
            }}
            data-aos="fade-right" // ✅ Animation
          >
            <img
              src="/image.jpg"
              alt="profile"
              style={{
                display: "block",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "300px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                mt: { xs: "10px", md: 3 },
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              AASHISH KUMAR
            </Typography>

            <Box sx={{ mt: { xs: "2px", md: 3 } }}>
              <span
                style={{
                  fontSize: "clamp(0rem, 4vw, 1.3rem)",
                  border: "2px solid  #d3d3d3",
                  borderRadius: "50px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "5px 10px",
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
                    marginLeft: "5px",
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
              sx={{ display: "flex", justifyContent: "center", gap: 3 }}
              data-aos="zoom-in" // ✅ Animation
            >
              <FacebookIcon sx={iconStyle("#1877F2")} />
              <InstagramIcon sx={iconStyle("#E4405F")} />
              <TwitterIcon sx={iconStyle("#1DA1F2")} />
              <GitHubIcon sx={iconStyle("#333")} />
            </Box>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{ mt: { xs: "0 auto", md: "10px" } }}
          data-aos="fade-left" // ✅ Animation
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "55px" }, // ✅ Responsive font size
              lineHeight: { xs: "36px", sm: "48px", md: "72px" }, // ✅ Responsive line height
              mt: { xs: "-39px", md: "10px" },
              mb: { xs: "10px", md: "10px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Hello, I’m AASHISH KUMAR, <br />
            <span style={{ border: "2px solid #d3d3d3", padding: "5px" }}>
              Web Developer
            </span>{" "}
            and <br /> UX / UI Designer Based <br /> in New Delhi, India.
          </Typography>

          <Box
            sx={{
              mt: { xs: "22px", md: "10px" },
              mb: { xs: "30px", md: "20px" },
              textAlign: { xs: "center", md: "left" },
            }}
            data-aos="zoom-in" // ✅ Animation
          >
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
                <Typography
                  key={i}
                  sx={serviceStyle}
                  data-aos="fade-up"
                  data-aos-delay={i * 100} // ✅ Delay
                >
                  <NorthEastIcon sx={{ fontSize: 16, mr: 1 }} />
                  {service}
                </Typography>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
              {rightColumn.map((service, i) => (
                <Typography
                  key={i}
                  sx={serviceStyle}
                  data-aos="fade-up"
                  data-aos-delay={i * 100 + 200} // ✅ Delay alag rakha
                >
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

// ✅ Icon style with hover effect
const iconStyle = (hoverColor) => ({
  border: "2px solid grey",
  padding: "2px",
  color: "grey",
  cursor: "pointer",
  transition: "all 0.3s ease",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  mt: { xs: "10px", md: 3 },
  mb: { xs: "-20px", md: 3 },
  "&:hover": {
    color: hoverColor,
  },
});

// ✅ Service style
const serviceStyle = {
  display: "flex",
  alignItems: "center",
  color: "grey",
  fontSize: "18px",
  mb: 2,
};

