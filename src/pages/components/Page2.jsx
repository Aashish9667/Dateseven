import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

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

  return (
    
    <Box sx={{ textAlign: "center",my:2.5}}>
      <Typography variant="overline" gutterBottom>
        SERVICES
      </Typography>
      <Typography variant="h5" gutterBottom sx={{marginBottom:"20px" ,fontWeight:"bold"}}>
        Quality Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 7,
          flexWrap: "wrap",
         marginBottom:"40px"
        }}
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
              <Typography variant="h6" gutterBottom  sx={{textAlign:{xs:'left',md:'left'},}}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary"  sx={{textAlign:{xs:'left',md:'left'},}}>
                {service.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    
  );
}

export default SelectActionCard;
