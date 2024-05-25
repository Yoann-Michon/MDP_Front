import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "./../assets/img/Ujdp_Logo.svg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isShopPage = location.pathname === "/shop";

  const navLinks = [
    { label: "Accueil", path: "/home" },
    { label: "Articles", path: "/blog" },
    { label: "Boutique", path: "/shop" },
    { label: "Dons", path: "/donation" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link, index) => (
          <ListItem button key={index} component={NavLink} to={link.path}>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", padding: "0 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="Un jour de paix logo"
            sx={{ width: 100, objectFit: "cover", bgcolor: "#4CAF50" }}
          />
          <Typography variant="h6" sx={{ color: "#4CAF50", ml: 4 }}>
            UnJourDePaix
          </Typography>
        </Box>
        
        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, maxWidth: "500px",justifyContent:"space-around"}}>
          {navLinks.map((link, index) => (
            <Button key={index} color="info" component={NavLink} to={link.path}>
              {link.label}
            </Button>
          ))}
        </Box>
        
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="start"
            color="#4CAF50"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList}
          </Drawer>
        </Box>

        {isShopPage && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
              width: 100,
            }}
          >
            <IconButton size="large" aria-label="search" color="info">
              <SearchIcon />
            </IconButton>
            <IconButton size="large" aria-label="shoppingBag" color="info">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
