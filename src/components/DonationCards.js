import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const donationData = [
  {
    title: "Lever de Fonds",
    description: "Contribuez à nos campagnes de lever de fonds pour soutenir divers projets humanitaires.",
    icon: <VolunteerActivismIcon sx={{ fontSize: 80, color: 'success.main' }} />,
  },
  {
    title: "Colis de Nourriture",
    description: "Aidez-nous à distribuer des colis de nourriture aux familles dans le besoin.",
    icon: <RestaurantIcon sx={{ fontSize: 80, color: 'success.main' }} />,
  },
  {
    title: "Volontaire",
    description: "Rejoignez-nous en tant que volontaire et participez activement à nos actions humanitaires.",
    icon: <Diversity3Icon sx={{ fontSize: 80, color: 'success.main' }} />,
  },
];

const DonationCards = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ backgroundColor: "#4CAF50", width: "100%", textAlign: "center", py: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#FFFFFF" }}>
          Nous sommes une ONG caritative à but non lucratif.
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ width: "100%", maxWidth: 1200, justifyContent: "center", my: 4 }}>
        {donationData.map((donation, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: "12px", maxWidth: "400px", width: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ my: 2 }}>
                  {donation.icon}
                </Box>
                <Typography variant="h5" component="div">
                  {donation.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {donation.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DonationCards;
