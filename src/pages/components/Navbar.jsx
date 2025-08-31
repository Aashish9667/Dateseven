import * as React from "react";
import Link from "next/link"; // ✅ Added for navigation
import {
  Toolbar,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    "Home",
    "About",
    "Resume",
    "Services",
    "Projects",
    "Contact",
  ];

  // ✅ Added routes map for navigation
  const routes = {
    Home: "/",
    About: "/#about",
    Resume: "/components/Resume",
    Services: "/#service",
    Projects: "/#project",
    Contact: "/#contact",
  };
    React.useEffect(() => {
    AOS.init({
      duration: 800, // animation time
      once: true,    // animation केवल 1 बार चलेगा
    });
  }, []);

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: trigger
            ? "0px 2px 10px rgba(0,0,0,0.1)"
            : "0px 2px 10px rgba(0,0,0,0.05)",
          padding: trigger ? "0.3rem 2rem" : "1rem 2rem",
          transition: "all 400ms ease",
        }}
        data-aos="fade-down"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: trigger ? "1.1rem" : "1.4rem",
              transition: "all 400ms ease",
            }}
            data-aos="zoom-in"
          >
            Portfolio
          </Typography>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {menuItems.map((item,index) => (
              <Link key={item} href={routes[item]} passHref>
                <Button
                  sx={{
                    color: "black",
                    fontSize: trigger ? "0.9rem" : "1rem",
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                    },
                    transition: "all 300ms ease",
                  }}
                   data-aos="fade-up" 
                   data-aos-delay={index * 100}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Stack>

          {/* Mobile Hamburger */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" }, color: "black" }}
             data-aos="fade-left" 
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <List sx={{ width: 220 }}>
          {menuItems.map((item,index) => (
            <ListItem
              button
              key={item}
              onClick={handleDrawerToggle} // Drawer close
              sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              {/* ✅ Added Link for navigation */}
              <Link
                href={routes[item]}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Typography
                  fontSize="1rem"
                  fontWeight={500}
                  color="black"
                  sx={{ textDecoration: "none" }}
                >
                  {item}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
