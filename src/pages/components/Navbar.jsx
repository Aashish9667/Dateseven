import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Toolbar,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Routes: Desktop (scroll) vs Mobile (new page)
const desktopRoutes = {
  Home: "/",
  About: "/",
  Resume: "/components/Resume",
  Services: "/#service",
  Projects: "/#project",
  Contact: "/#contact",
};

const mobileRoutes = {
  Home: "/",
  About: "/", 
  Resume: "/components/Resume",
  Services: "/components/books",
  Projects: "/components/bookp",
  Contact: "/components/bookc",
};

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => setOpen(!open);

  const menuItems = ["Home", "About", "Resume", "Services", "Projects", "Contact"];

  // ✅ Detect mobile/desktop
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // ✅ Handle nav click (desktop → scroll, mobile → new page)
  const handleNavClick = (item) => {
    const path = isMobile ? mobileRoutes[item] : desktopRoutes[item];

    if (isMobile) {
      router.push(path);
      setOpen(false); // drawer close
    } else {
      if (path.startsWith("/#")) {
        const id = path.replace("/#", "#");
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(path);
      }
    }
  };

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
            {menuItems.map((item, index) => (
              <Button
                key={item}
                onClick={() => handleNavClick(item)}
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
        <Box sx={{ width: { xs: 240, sm: 280 }, p: 2 }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item}
                onClick={() => handleNavClick(item)}
                sx={{
                  px: 2,
                  py: 1.5,
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <Typography
                  fontSize="1rem"
                  fontWeight={500}
                  color="black"
                  sx={{ width: "100%" }}
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
