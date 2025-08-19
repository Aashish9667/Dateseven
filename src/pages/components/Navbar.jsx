import * as React from "react";
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

  const menuItems = [
    "Home",
    "About",
    "Resume",
    "Services",
    "Projects",
    "Contact",
  ];

  return (
    <>
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
          {/* Left Brand */}
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

          {/*  Right Menu (Desktop) */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }} // ✅ mobile me hide
          >
            {menuItems.map((item) => (
              <Button
                key={item}
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
            ))}
          </Stack>

          {/*  Hamburger Menu (Mobile) */}
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

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <List sx={{ width: 220 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item}
              onClick={handleDrawerToggle}
              sx={{
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
