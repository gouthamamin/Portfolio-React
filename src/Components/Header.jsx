import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  const menuItems = [
    "About",
    "Skills",
    "Education",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <div className="header">
      <AppBar position="static" sx={{ bgcolor: "#38596b" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amin-Folio
          </Typography>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            About
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            Skills
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            Education
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            Experience
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            Projects
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{ width: "35%" }}
      >
        <List>
          {menuItems.map((text) => (
            <ListItem key={text} onClick={() => toggleDrawer(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
