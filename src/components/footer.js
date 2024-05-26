import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
  List,
  ListItemText,
  ListSubheader,
  ListItemButton,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import ujdpLogo from "../assets/img/Ujdp_Logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  const utils = [
    { label: "Politique de confidentialité", path: "/privacy" },
    { label: "CGV", path: "/cgv" },
    { label: "Contact", path: "/contact" },
    { label: "Team", path: "/aboutus" }
  ];
  const shop = [
    { label: "Panier", path: "/shoppingBag" },
    { label: "Suivi commande", path: "/trakingNumber" },
    { label: "Livraison et retour", path: "/Delivery" },
  ];
  return (
    <footer style={{ backgroundColor: "#7ED957"}}>
      <Container sx={{width:"100%"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%",
            justifyContent: "space-between",ml:2,mb:{xs: 3}, flexDirection: { xs: "column", md: "row" }}}>
            <Box
              component="img"
              src={ujdpLogo}
              alt="First Image"
              sx={{
                mr: 2,
                width:"100%",
                maxWidth: "200px",
              }}
            />
            <Box>
              <Typography variant="body1" sx={{ color: "#FFFFFF"}}>
                <strong>123 Rue des Illusions</strong>
                <br />
                Quartier Imaginaire
              </Typography>
              <Typography variant="body1">
                <a href="tel:0123456789" style={{ color: "white" }}>
                  01.23.45.67.89
                </a>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection:{xs:"column" ,md:"row"}, gap: { xs: 2, sm: 3, md: 5 } , color:"#FFFFFF"}}>
            <List
              sx={{ bgcolor: "transparent", display: "flex",
              flexDirection:"column",
              alignItems: "center",
              width: {
                sx: "100%", 
                md: "360px"
              }}}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: "transparent",color:"#FFFFFF"}}>
                  Liens Utiles
                  <Divider />
                </ListSubheader>
              }>
                {utils.map((link, index) => (
        <ListItemButton
          key={index}
          color="inherit"
          component={NavLink}
          to={link.path}
        >
          <ListItemText primary={link.label} />
        </ListItemButton>
      ))}
              
            </List>
            <Divider orientation="vertical" variant="middle" flexItem />
            <List
              sx={{  bgcolor: "transparent",display: "flex",
              flexDirection:"column",
              alignItems: "center",
              width: {
                sx: "100%", 
                md: "360px"
              }
            }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: "transparent",color:"#FFFFFF"}}>
                  Boutique
                  <Divider />
                </ListSubheader>
              }
            >
              {shop.map((link, index) => (
        <ListItemButton
          key={index}
          color="inherit"
          component={NavLink}
          to={link.path}
          sx={{position:"relative"}}
        >
          <ListItemText primary={link.label} />
        </ListItemButton>
      ))}
            </List>
          </Box>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            {`© ${year} All rights reserved.`}
          </Typography>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width:"150px"
          }}>
            <IconButton>
              <Facebook style={{ color: "white" }} />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <IconButton>
              <Instagram style={{ color: "white" }} />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <IconButton>
              <LinkedIn style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
