import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Link from "next/link";
import { Button } from "@mui/material"; 
// ✅ AOS import
import AOS from "aos";
import "aos/dist/aos.css";

function SelectActionCard() {
  const services = [
    {
      icon: <LanguageIcon fontSize="large" />,
      title: "Brand Identity Design",
      desc: "Kane gives you the blocks & kits you need to create a true website within minutes.",
    },
    {
      icon: <ColorLensIcon fontSize="large" />,
      title: "Website Design",
      desc: "Kane gives you the blocks & kits you need to create a true website within minutes.",
    },
    {
      icon: <DesignServicesIcon fontSize="large" />,
      title: "Application Design",
      desc: "Kane gives you the blocks & kits you need to create a true website within minutes.",
    },
  ];

  // ✅ AOS initialize
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Box sx={{ textAlign: "center", my: 2.5 }}>
      {/* Heading with animation */}
      <Typography variant="overline" gutterBottom data-aos="fade-up">
        SERVICES
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Quality Services
      </Typography>

      {/* Cards with animation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 7,
          flexWrap: "wrap",
          marginBottom: "40px",
        px: { xs: "24px", md: "0px" }, }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              flex: "1 1 250px",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
            data-aos="zoom-in"
            data-aos-delay={index * 200} // ✅ delay har card ke liye
          >
            <CardContent sx={{ background: "#e6eaee", textAlign: "left" }}>
              <Box
                sx={{
                  mb: 1,
                  "& svg": {
                    fontSize: 40,
                    transition: "0.3s",
                  },
                  "& svg:hover": {
                    color: "black",
                  },
                }}
              >
                {service.icon}
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: { xs: "left", md: "left" } }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: { xs: "left", md: "left" } }}
              >
                {service.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
        {/* ✅ Home Button */}
            <div
              style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
            >
              <Link href="/" passHref>
                <Button
                  variant="contained"
                  sx={{
                   
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": { background: "white", color: "black" },
                  }}
                >
                  Go to Home
                </Button>
              </Link>
            </div>
    </Box>
  );
}

export default SelectActionCard;
