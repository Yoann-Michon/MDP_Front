import React from "react";
import { Container, Typography } from "@mui/material";

import Dana from "./../assets/avatars/dana.svg";
import Ines from "./../assets/avatars/ines.svg";
import Ornella from "./../assets/avatars/ornella.svg";
import Yoann from "./../assets/avatars/yoann.svg";
const team = [
  {
    image: Dana,
    name: "Dana",
    description:
      "Dana est notre experte en marketing. Forte d'une compréhension approfondie des stratégies de promotion et de sensibilisation, elle travaille à accroître la visibilité de notre initiative et à mobiliser un public plus large. Son engagement envers la cause palestinienne se traduit par sa capacité à développer des campagnes percutantes et à inspirer l'action à travers des messages convaincants."
  },
  {
    image: Ines,
    name: "Ines",
    description:
      "Ines est notre spécialiste de la communication. Elle excelle dans l'art de raconter des histoires et de susciter l'engagement. En charge de la diffusion de notre message, elle travaille pour établir des relations significatives avec notre communauté, partager des informations pertinentes sur la situation en Palestine et mobiliser un soutien continu à travers divers canaux de communication."
  },
  {
    image: Ornella,
    name: "Ornella",
    description:
      "Ornella apporte son expertise créative en tant que designer au sein de notre équipe. Avec une sensibilité artistique aiguisée, elle est chargée de donner vie à notre vision à travers des interfaces attrayantes et accessibles sur notre application web. Son engagement envers la cause palestinienne se reflète dans chaque détail de son travail, où elle cherche à transmettre des messages forts et percutants."
  },
  {
    image: Yoann,
    name: "Yoann",
    description:
      "Yoann est notre génie du développement. Avec une passion pour la technologie et un talent exceptionnel en programmation, il est responsable de concrétiser notre vision à travers une application web fonctionnelle et intuitive. Son dévouement envers la cause palestinienne se manifeste dans son engagement à créer une plateforme dynamique qui facilite l'interaction et l'action de notre communauté."
  }
];

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom  sx={{textAlign:"center"}}>
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
      <div style={{ marginTop: "20px", }}>
        <Typography variant="h4" gutterBottom  sx={{textAlign:"center"}}>
          Notre Équipe
        </Typography>
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          {team.map((member, index) => (
            <section key={index} style={{ display: "flex", alignItems: "center", margin: "30px" }}>
              <img src={member.image} alt={member.name} style={{ marginRight: "20px", width: "200px", height: "200px" }} />
              <div>
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body1" sx={{maxWidth:"600px"}}>
                  {member.description}
                </Typography>
              </div>
            </section>
          ))}
        </section>
      </div>
    </Container>
  );
};

export default AboutUs;
