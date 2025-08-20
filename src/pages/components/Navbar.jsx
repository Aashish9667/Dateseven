import * as React from "react";
import Link from "next/link"; // ✅ Added for navigation
import {
  Toolbar,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = ["Home", "About", "Resume", "Services", "Projects", "Contact"];

  // ✅ Added routes map for navigation
  const routes = {
    Home: "/",
    About: "/#about",
    Resume: "/components/Resume",
    Services: "/#service",
    Projects: "/#project",
    Contact: "/#contact",
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
          >
            Portfolio
          </Typography>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {menuItems.map((item) => (
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
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <List sx={{ width: 220 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item}
              onClick={handleDrawerToggle} // Drawer close
              sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
            >
              {/* ✅ Added Link for navigation */}
              <Link href={routes[item]} passHref>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    component: "a", // anchor link
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
