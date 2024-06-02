import React from "react";
import { Container, Typography } from "@mui/material";

const PaiementSecurise = () => {
  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Paiement Sécurisé
      </Typography>

      <Typography variant="h6">Sécurité des paiements</Typography>
      <Typography paragraph>
        Pour garantir la sécurité de vos paiements, nous utilisons [Nom du système de paiement sécurisé, ex: PayPal, Stripe]. Lorsque vous effectuez un achat en ligne sur notre site, vos données bancaires sont cryptées et transmises de manière sécurisée.
      </Typography>

      <Typography variant="h6">Modalités de paiement</Typography>
      <Typography paragraph>
        Les paiements peuvent être effectués par carte bancaire (Visa, MasterCard, etc.) ou via [Nom du système de paiement sécurisé]. Les transactions sont traitées immédiatement et de manière sécurisée.
      </Typography>

      <Typography variant="h6">Confidentialité des informations bancaires</Typography>
      <Typography paragraph>
        Vos informations bancaires ne sont jamais stockées sur nos serveurs. Nous utilisons des protocoles de sécurité avancés pour garantir la confidentialité de vos données.
      </Typography>

      <Typography variant="h6">Contact en cas de problème</Typography>
      <Typography paragraph>
        En cas de problème avec un paiement, veuillez nous contacter immédiatement à l'adresse suivante : paiement@unjourdepaix.org.
      </Typography>
    </Container>
  );
};

export default PaiementSecurise;
