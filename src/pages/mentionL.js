import React from "react";
import { Container, Typography } from "@mui/material";

const MentionsLegales = () => {
  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Mentions Légales
      </Typography>

      <Typography variant="h6">Éditeur du site</Typography>
      <Typography paragraph>
        Nom : Un Jour de Paix
        <br />
        Adresse : 123 Rue des Illusions, Quartier Imaginaire
        <br />
        Téléphone : 01.23.45.67.89
        <br />
        Email : unjourdepaix.1JDP@outlook.fr
        <br />
        Directeur de la publication : [Nom du Directeur]
      </Typography>

      <Typography variant="h6">Hébergeurs</Typography>
      <Typography paragraph>
        <strong>Front-end</strong>
        <br />
        Nom de l'hébergeur : Netlify
        <br />
        Adresse : 2325 3rd Street, Suite 215, San Francisco, California, 94107, USA
        <br />
        Téléphone : [Téléphone de Netlify]
        <br />
        Email : support@netlify.com
      </Typography>
      <Typography paragraph>
        <strong>Back-end</strong>
        <br />
        Nom de l'hébergeur : Render
        <br />
        Adresse : 655 Montgomery Street, 7th Floor, San Francisco, California, 94111, USA
        <br />
        Téléphone : [Téléphone de Render]
        <br />
        Email : support@render.com
      </Typography>

      <Typography variant="h6">Protection des données personnelles</Typography>
      <Typography paragraph>
        Les informations recueillies sur ce site sont destinées à l'association Un Jour de Paix. Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
      </Typography>

      <Typography variant="h6">Propriété intellectuelle</Typography>
      <Typography paragraph>
        Tous les contenus présents sur ce site sont protégés par le droit d'auteur. Toute reproduction, même partielle, sans autorisation préalable est strictement interdite.
      </Typography>
    </Container>
  );
};

export default MentionsLegales;
