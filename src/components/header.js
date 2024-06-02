import React, { useState, useEffect } from "react";
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
import { Link, NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./../assets/img/Ujdp_Logo.svg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Accueil", path: "/home" },
    { label: "Articles", path: "/blog" },
    {
      label: "Boutique",
      path: "/shop",
      external: true,
      url: "https://unjourdepaix.myshopify.com/",
    },
    { label: "Dons", path: "/donation" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/home");
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
          <ListItem
            button
            key={index}
            component={link.external ? "a" : NavLink}
            href={link.external ? link.url : null}
            target={link.external ? "_blank" : null}
            to={link.path}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
        {isLoggedIn ? (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Déconnexion" />
          </ListItem>
        ) : (
          <ListItem button component={NavLink} to="/login">
            <ListItemText primary="Connexion" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", padding: "0 20px" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="Un jour de paix logo"
              sx={{
                width: 100,
                objectFit: "cover",
                bgcolor: "#7ED957",
                fontFamily: '"Alice", serif',
                display: { xs: "none", md: "flex" },
              }}
            />
              <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={{
                color: "#7ED957",
                ml: 4,
                display: { xs: "none", md: "flex" },
              }}
            >
              UnJourDePaix
            </Typography>
          </Link>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            maxWidth: "500px",
            justifyContent: "space-around",
          }}
        >
          {navLinks.map((link, index) => (
            <Button
              key={index}
              component={link.external ? "a" : NavLink}
              href={link.external ? link.url : null}
              target={link.external ? "_blank" : null}
              to={link.path}
              sx={{ color: "#7ED957" }}
            >
              {link.label}
            </Button>
          ))}
          {isLoggedIn ? (
            <Button onClick={handleLogout} sx={{ color: "#7ED957" }}>
              Déconnexion
            </Button>
          ) : (
            <Button component={NavLink} to="/login" sx={{ color: "#7ED957" }}>
              Connexion
            </Button>
          )}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: "#7ED957" }} />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
