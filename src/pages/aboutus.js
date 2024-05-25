import React from "react";
import { Container, Typography } from "@mui/material";
import Dana from "./../assets/avatars/dana.svg";
import Ines from "./../assets/avatars/ines.svg";
import Ornella from "./../assets/avatars/ornella.svg";
import Yoann from "./../assets/avatars/yoann.svg";

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Notre Mission
        </Typography>
        <section>
          <Typography variant="body1">
            Notre initiative consiste à établir une association dédiée au
            soutien de la cause palestinienne. Nous avons choisi de mettre en
            place une application web comme principal moyen d'action. L'objectif
            de cette plateforme est de centraliser nos efforts en fournissant un
            espace où la communauté peut s'informer, s'engager et contribuer
            financièrement.
          </Typography>
        </section>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Notre Équipe
        </Typography>
        <section id="ines" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img src={Ines} alt="Ines" style={{ marginRight: "20px" }} />
          <Typography variant="body1">
            Ines est notre spécialiste de la communication. Elle excelle dans
            l'art de raconter des histoires et de susciter l'engagement. En
            charge de la diffusion de notre message, elle travaille pour établir
            des relations significatives avec notre communauté, partager des
            informations pertinentes sur la situation en Palestine et mobiliser
            un soutien continu à travers divers canaux de communication.
          </Typography>
        </section>
        <section id="yoann" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <Typography variant="body1" style={{ marginRight: "20px" }}>
            Yoann est notre génie du développement. Avec une passion pour la
            technologie et un talent exceptionnel en programmation, il est
            responsable de concrétiser notre vision à travers une application
            web fonctionnelle et intuitive. Son dévouement envers la cause
            palestinienne se manifeste dans son engagement à créer une
            plateforme dynamique qui facilite l'interaction et l'action de notre
            communauté.
          </Typography>
          <img src={Yoann} alt="Yoann" />
        </section>
        <section id="dana" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img src={Dana} alt="Dana" style={{ marginRight: "20px" }} />
          <Typography variant="body1">
            Dana est notre experte en marketing. Forte d'une compréhension
            approfondie des stratégies de promotion et de sensibilisation, elle
            travaille à accroître la visibilité de notre initiative et à
            mobiliser un public plus large. Son engagement envers la cause
            palestinienne se traduit par sa capacité à développer des campagnes
            percutantes et à inspirer l'action à travers des messages
            convaincants.
          </Typography>
        </section>
        <section id="ornella" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <Typography variant="body1" style={{ marginRight: "20px" }}>
            Ornella apporte son expertise créative en tant que designer au sein
            de notre équipe. Avec une sensibilité artistique aiguisée, elle est
            chargée de donner vie à notre vision à travers des interfaces
            attrayantes et accessibles sur notre application web. Son engagement
            envers la cause palestinienne se reflète dans chaque détail de son
            travail, où elle cherche à transmettre des messages forts et
            percutants.
          </Typography>
          <img src={Ornella} alt="Ornella" />
        </section>
      </div>
    </Container>
  );
};

export default AboutUs;