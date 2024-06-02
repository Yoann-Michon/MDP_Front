import React from "react";
import { Container, Typography } from "@mui/material";

const CGU = () => {
  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Conditions Générales d'Utilisation (CGU)
      </Typography>

      <Typography variant="h6">1. Introduction</Typography>
      <Typography paragraph>
        Bienvenue sur le site de l'association Un Jour de Paix. En accédant à
        notre site web, vous acceptez de vous conformer aux présentes conditions
        générales d'utilisation (CGU). Si vous n'acceptez pas ces termes,
        veuillez ne pas utiliser notre site.
      </Typography>

      <Typography variant="h6">2. Accès au site</Typography>
      <Typography paragraph>
        L'accès au site est gratuit. Tous les coûts relatifs à l'accès au site,
        que ce soit les frais matériels, logiciels ou d'accès à internet, sont
        exclusivement à la charge de l'utilisateur.
      </Typography>

      <Typography variant="h6">3. Propriété intellectuelle</Typography>
      <Typography paragraph>
        Tout le contenu présent sur ce site, y compris, sans s'y limiter, les
        textes, graphiques, images, vidéos, logos et icônes, est la propriété de
        l'association Un Jour de Paix ou de ses partenaires. Toute reproduction,
        distribution, modification ou utilisation de ces contenus sans
        autorisation préalable est strictement interdite.
      </Typography>

      <Typography variant="h6">4. Données personnelles</Typography>
      <Typography paragraph>
        Les informations collectées sur ce site sont utilisées uniquement dans
        le cadre de notre association. Conformément à la loi Informatique et
        Libertés, vous disposez d'un droit d'accès, de rectification et de
        suppression des données vous concernant.
      </Typography>

      <Typography variant="h6">5. Responsabilité</Typography>
      <Typography paragraph>
        L'association Un Jour de Paix ne peut être tenue responsable des
        dommages directs ou indirects résultant de l'utilisation du site ou de
        l'impossibilité d'y accéder.
      </Typography>

      <Typography variant="h6">6. Modifications des CGU</Typography>
      <Typography paragraph>
        L'association se réserve le droit de modifier à tout moment les
        présentes conditions générales d'utilisation. Les modifications
        prendront effet dès leur publication sur le site.
      </Typography>

      <Typography variant="h6">7. Contact</Typography>
      <Typography paragraph>
        Pour toute question concernant les CGU, veuillez nous contacter à
        l'adresse suivante : unjourdepaix.1JDP@outlook.fr
      </Typography>
    </Container>
  );
};

export default CGU;
