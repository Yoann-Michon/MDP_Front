import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Modal,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import aImage from "../assets/img/joel-muniz-A4Ax1ApccfA-unsplash.jpg";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import SchoolIcon from "@mui/icons-material/School";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PinDropIcon from "@mui/icons-material/PinDrop";
import StripeContainer from "../components/stripe/stripeContainer";

const Donation = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const carousel = [
    {
      url: aImage,
      alt: "smiling children",
    },
  ];

  const listItems = [
    {
      icon: <MedicalServicesIcon sx={{ color: "#FF0000", fontSize: 40 }} />,
      text: "Fournir des kits de premiers secours aux familles touchées par le conflit",
    },
    {
      icon: <WaterDropIcon sx={{ color: "#2196F3", fontSize: 40 }} />,
      text: "Assurer un accès à l'eau potable dans les zones les plus affectées",
    },
    {
      icon: <PsychologyAltIcon sx={{ color: "#9C27B0", fontSize: 40 }} />,
      text: "Offrir un soutien psychologique aux enfants traumatisés par la violence",
    },
    {
      icon: <AddBusinessIcon sx={{ color: "#7ED957", fontSize: 40 }} />,
      text: "Réhabiliter des infrastructures essentielles comme les écoles et les hôpitaux",
    },
    {
      icon: <SchoolIcon sx={{ color: "#FF9800", fontSize: 40 }} />,
      text: "Organiser des programmes éducatifs pour les enfants déplacés",
    },
    {
      icon: <LocalDiningIcon sx={{ color: "#795548", fontSize: 40 }} />,
      text: "Distribuer des paniers alimentaires aux familles en situation de crise",
    },
  ];

  return (
    <Container>
      <Box
        component="img"
        src={carousel[0].url}
        alt={carousel[0].alt}
        sx={{
          aspectRatio: 16 / 9,
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Pourquoi faire un don ?
        </Typography>
        <Typography variant="body1" sx={{ color: "#000000", mb: 2 }}>
          Les dons nous permettent de continuer à fournir nos services et à
          soutenir notre cause. Chaque don, quel que soit le montant, est
          grandement apprécié et contribue à faire une différence dans la vie de
          ceux qui en ont besoin.
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          sx={{ mt: 5 }}
        >
          {listItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: { xs: "100%", sm: "48%", md: "30%" },
                mb: 4,
              }}
            >
              {item.icon}
              <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box component="section">
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
            Comment faire un don :
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Vous pouvez faire un don de différentes manières :
          </Typography>
          <Typography variant="body1">
            En ligne :{" "}
            <Button onClick={handleOpenModal}>
              Faire un don
            </Button>
          </Typography>
          <Box component="section" id="postal_add" sx={{ my: 3 }}>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Via des denrées alimentaires à l'adresse postale suivante :
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PinDropIcon sx={{ color: "#f44336", fontSize: 40 }} />
                </ListItemIcon>
                <ListItemText
                  primary={<strong>123 Rue des Illusions</strong>}
                  secondary="Quartier Imaginaire"
                  primaryTypographyProps={{
                    variant: "body1",
                    sx: { color: "#000000" },
                  }}
                  secondaryTypographyProps={{
                    variant: "body2",
                    sx: { color: "#000000" },
                  }}
                />
              </ListItem>
            </List>
          </Box>
          <Typography variant="body1" sx={{ my: 3 }}>
            Merci infiniment pour votre générosité et votre soutien !
          </Typography>
        </Box>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Formulaire de Paiement
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <StripeContainer />
          </Typography>
          <Button onClick={handleCloseModal} sx={{ mt: 2, color:"#7ed957"}}>
            Fermer
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Donation;
