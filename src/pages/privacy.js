import React from "react";
import { Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Politique de Confidentialité
      </Typography>
      <Typography variant="h6">
        1. Introduction
      </Typography>
      <Typography paragraph>
        L'association "Un Jour de Paix" s'engage à protéger la vie privée
        de ses utilisateurs et la confidentialité de leurs données
        personnelles conformément à la législation en vigueur. Cette
        politique de confidentialité explique comment nous collectons,
        utilisons et protégeons vos données personnelles lorsque vous
        utilisez notre site web.
      </Typography>
      <Typography variant="h6">
        2. Collecte des données personnelles
      </Typography>
      <Typography paragraph>
        Nous collectons des données personnelles lorsque vous nous les
        fournissez volontairement, par exemple lorsque vous créez un compte,
        effectuez un achat, vous inscrivez à notre newsletter ou lorsque
        vous nous contactez. Les données collectées peuvent inclure votre
        nom, adresse, adresse e-mail, numéro de téléphone, et informations
        de paiement.
      </Typography>
      <Typography variant="h6">
        3. Utilisation des données personnelles
      </Typography>
      <Typography paragraph>
        Nous utilisons vos données personnelles pour :
      </Typography>
      <ul style={{ paddingLeft: "20px", marginBottom:"20px" }}>
        <li>Traiter et gérer vos commandes.</li>
        <li>Vous fournir des informations sur nos produits et services.</li>
        <li>Améliorer notre site web et nos services.</li>
        <li>Vous contacter dans le cadre d'enquêtes de satisfaction.</li>
      </ul>
      <Typography variant="h6">
        4. Partage des données personnelles
      </Typography>
      <Typography paragraph>
        Nous ne vendons, ne louons ni ne partageons vos données personnelles
        à des tiers, sauf dans les cas suivants :
      </Typography>
      <ul style={{ paddingLeft: "20px", marginBottom:"20px"}}>
        <li>Avec des prestataires de services tiers qui fournissent des services en notre nom, tels que le traitement des paiements, l'exécution des commandes, l'analyse de données, etc. Ces prestataires sont tenus de protéger la confidentialité de vos données.</li>
        <li>Lorsque la loi l'exige ou pour protéger nos droits, notre propriété ou notre sécurité.</li>
      </ul>
      <Typography variant="h6">
        5. Protection des données personnelles
      </Typography>
      <Typography paragraph>
        Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucune transmission de données sur Internet ne peut être garantie à 100% sécurisée.
      </Typography>
      <Typography variant="h6">
        6. Cookies
      </Typography>
      <Typography paragraph>
        Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil lorsque vous visitez notre site web. Ils nous permettent de reconnaître votre appareil et de collecter des informations sur vos préférences et vos actions sur notre site web. Vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités de notre site web.
      </Typography>
      <Typography variant="h6">
        7. Vos droits
      </Typography>
      <Typography paragraph>
        Vous avez le droit d'accéder à vos données personnelles, de les rectifier, de les effacer, de limiter leur traitement, de vous opposer à leur traitement et de les transférer. Pour exercer ces droits, veuillez nous contacter.
      </Typography>
      <Typography variant="h6">
        8. Modifications de la politique de confidentialité
      </Typography>
      <Typography paragraph>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet immédiatement après leur publication sur notre site web. Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de confidentialité.
      </Typography>
      <Typography variant="h6">
        9. Contactez-nous
      </Typography>
      <Typography paragraph>
        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter.
      </Typography>
      <Typography variant="h6">
        10. Droit applicable
      </Typography>
      <Typography paragraph>
        Cette politique de confidentialité est régie par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
      </Typography>
    </Container>
  );
}

export default PrivacyPolicy;
