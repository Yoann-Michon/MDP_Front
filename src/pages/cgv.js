import React from "react";
import { Container, Typography } from "@mui/material";

const CGV = () => {
  return (
    <Container maxWidth="md" sx={{  my:5}}>
      <Typography variant="h4" gutterBottom>
        Conditions Générales de Vente (CGV)
      </Typography>

      <Typography variant="h6">1. Préambule</Typography>
      <Typography paragraph>
        Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes
        les transactions conclues par le biais du site web de l'association "Un
        Jour de Paix". Est considéré comme "client" toute personne physique ou
        morale réalisant auprès de l'association "Un Jour de Paix" une commande
        validée via notre plateforme de paiement sécurisée.
      </Typography>

      <Typography variant="h6">2. Objet</Typography>
      <Typography paragraph>
        Les CGV visent à définir les relations contractuelles entre
        l'association "Un Jour de Paix" et le client et les conditions
        applicables à tout achat effectué par le biais du site web de
        l'association, que le client soit professionnel ou consommateur.
        L'acquisition d'un bien ou d'un service à travers le présent site
        implique une acceptation sans réserve par le client des présentes CGV.
      </Typography>

      <Typography variant="h6">3. Produits et Services</Typography>
      <Typography paragraph>
        Les produits et services proposés sont ceux qui figurent sur le site web
        de l'association "Un Jour de Paix", dans la limite des stocks
        disponibles. L'association "Un Jour de Paix" se réserve le droit de
        modifier à tout moment l’assortiment de produits et services.
      </Typography>

      <Typography variant="h6">4. Tarifs</Typography>
      <Typography paragraph>
        Les prix figurant sur les fiches produits du catalogue internet sont des
        prix en Euros (€) toutes taxes comprises (TTC) tenant compte de la TVA
        applicable au jour de la commande. L'association "Un Jour de Paix" se
        réserve le droit de modifier ses prix à tout moment, étant toutefois
        entendu que le prix figurant au catalogue le jour de la commande sera le
        seul applicable au client.
      </Typography>

      <Typography variant="h6">5. Commandes</Typography>
      <Typography paragraph>
        Le client, qui souhaite acheter un produit ou un service doit
        obligatoirement :
      </Typography>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          Remplir la fiche d’identification sur laquelle il indiquera toutes les
          coordonnées demandées.
        </li>
        <li>Valider sa commande après l’avoir vérifiée.</li>
        <li>Effectuer le paiement dans les conditions prévues.</li>
        <li>Confirmer sa commande et son règlement.</li>
      </ul>
      <Typography paragraph>
        La confirmation de la commande entraîne acceptation des présentes CGV,
        la reconnaissance d’en avoir parfaite connaissance et la renonciation à
        se prévaloir de ses propres conditions d’achat ou d’autres conditions.
      </Typography>

      <Typography variant="h6">6. Paiement</Typography>
      <Typography paragraph>
        Le prix est exigible à la commande. Les paiements seront effectués par
        carte bancaire; ils seront réalisés par le biais du système sécurisé qui
        utilise le protocole SSL (Secure Socket Layer) de telle sorte que les
        informations transmises sont cryptées par un logiciel et qu’aucun tiers
        ne peut en prendre connaissance au cours du transport sur le réseau.
      </Typography>

      <Typography variant="h6">7. Livraison</Typography>
      <Typography paragraph>
        Les livraisons sont faites à l’adresse indiquée sur le bon de commande.
        Les risques sont à la charge de l'acquéreur à compter du moment où les
        produits ont quitté les locaux de l'association "Un Jour de Paix". En
        cas de dommage pendant le transport, la protestation motivée doit être
        formulée auprès du transporteur dans un délai de trois jours à compter
        de la livraison.
      </Typography>

      <Typography variant="h6">8. Rétractation</Typography>
      <Typography paragraph>
        Conformément aux dispositions de l'article L.121-21 du Code de la
        Consommation, le client dispose d'un délai de rétractation de 14 jours à
        compter de la réception de ses produits pour exercer son droit de
        rétraction sans avoir à justifier de motifs ni à payer de pénalité.
      </Typography>
      <Typography variant="h6">9. Responsabilité</Typography>
      <Typography paragraph>
        L'association "Un Jour de Paix", dans le processus de vente à distance,
        n’est tenue que par une obligation de moyens. Sa responsabilité ne
        pourra être engagée pour un dommage résultant de l’utilisation du réseau
        Internet tel que perte de données, intrusion, virus, rupture du service,
        ou autres problèmes involontaires.
      </Typography>

      <Typography variant="h6">10. Propriété intellectuelle</Typography>
      <Typography paragraph>
        Tous les éléments du site de l'association "Un Jour de Paix" sont et
        restent la propriété intellectuelle et exclusive de l'association "Un
        Jour de Paix". Personne n’est autorisé à reproduire, exploiter, ou
        utiliser à quelque titre que ce soit, même partiellement, des éléments
        du site qu’ils soient sous forme de photo, logo, visuel ou texte.
      </Typography>

      <Typography variant="h6">11. Données à caractère personnel</Typography>
      <Typography paragraph>
        Conformément à la loi relative à l’informatique, aux fichiers et aux
        libertés du 6 janvier 1978, les informations à caractère nominatif
        relatives aux acheteurs pourront faire l’objet d’un traitement
        automatisé. L'association "Un Jour de Paix" se réserve le droit de
        collecter des informations sur les acheteurs y compris en utilisant des
        cookies, et, s’il le souhaite, de transmettre à des partenaires
        commerciaux les informations collectées.
      </Typography>

      <Typography variant="h6">12. Règlement des litiges</Typography>
      <Typography paragraph>
        Les présentes CGV sont soumises à la loi française. En cas de litige,
        compétence est attribuée aux tribunaux compétents de Paris, nonobstant
        pluralité de défendeurs ou appel en garantie.
      </Typography>
    </Container>
  );
};

export default CGV;
