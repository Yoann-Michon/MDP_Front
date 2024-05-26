import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Chip,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import DonationCards from "../components/DonationCards";
import dana from "../assets/avatars/dana.svg";
import ornella from "../assets/avatars/ornella.svg";
import ines from "../assets/avatars/ines.svg";
import yoann from "../assets/avatars/yoann.svg";
import tiktok from "../assets/img/tiktok_ujdp.jpg";
import { InstagramEmbed } from "react-social-media-embed";
import child from "../assets/img/people-watching-ruins-old-city-jerusalem-israel.jpg";
import people from "../assets/img/emad-el-byed-1kJZm6qV8bE-unsplash.jpg";
import kid from "../assets/img/photorealistic-kid-refugee-camp.jpg";
import "./style/home.css";

const Home = () => {
  const avatars = [
    { name: "Dana", image: dana },
    { name: "Ornella", image: ornella },
    { name: "Ines", image: ines },
    { name: "Yoann", image: yoann },
  ];

  return (
    <div className="home">
      <div className="head">
        <Box
          className="title"
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            textAlign: { xs: "center", md: "center" },
            ml: 2,
            mb: 2,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              fontSize: { xs: "2rem", md: "5rem" },
            }}
          >
            Un jour de paix
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              mb: 2,
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              fontSize: { xs: 16, md: 20, lg: 25 },
            }}
          >
            En soutenant la cause, vous contribuez directement à les aider et à
            améliorer leurs conditions de vie.
          </Typography>
        </Box>
      </div>
      <DonationCards />
      <Divider sx={{ my: 5 }}>
        <Chip
          label="Situation"
          sx={{ bgcolor: "#7ED957", color: "#FFFFFF", fontSize: "20px" }}
        />
      </Divider>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: { xs: "center", md: "left" },
          mt: 6,
          mb: 6,
        }}
      >
        <Box
          component="section"
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            mb: "100px",
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={child}
              alt="First Image"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                textAlign: "center",
              }}
            >
              Source:{" "}
              <a
                href="https://www.freepik.com/free-ai-image/people-watching-ruins-old-city-jerusalem-israel_88937765.htm#fromView=search&page=1&position=28&uuid=a8fb9017-e1d9-4c36-97f0-3ac943d9f767"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Freepik
              </a>
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 2,
              flexDirection: "column",
            }}
          >
            <Typography variant="body1">
              En novembre 2023, un accord de cessez-le-feu a été conclu, qui a
              permis la libération de 86 otages israéliens, 240 prisonniers
              palestiniens et 24 otages d’origine étrangère. La trêve
              humanitaire qui a duré 6 jours a également permis l’acheminement
              de fournitures humanitaires dans la bande de Gaza. Depuis, les
              agences de l’ONU, dont l’UNICEF, n’ont cessé de demander un
              cessez-le-feu. En mars 2024, le Conseil de sécurité de l’ONU a
              adopté une résolution appelant à un cessez-le-feu humanitaire
              immédiat pendant le mois du ramadan et la libération de tous les
              otages.
            </Typography>
            <Typography variant="body1">
              <small>
                Source:{" "}
                <a
                  href="https://www.unicef.fr/article/israel-palestine-les-enfants-paient-le-prix-de-la-guerre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unicef
                </a>
              </small>
            </Typography>
          </Box>
        </Box>

        <Box
          component="section"
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={people}
              alt="Second Image"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                textAlign: "center",
              }}
            >
              Source:{" "}
              <a
                href="https://unsplash.com/fr/photos/un-couple-de-personnes-marchant-sur-un-chemin-de-terre-1kJZm6qV8bE"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Unsplash
              </a>
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 2,
              flexDirection: "column",
            }}
          >
            <Typography variant="body1">
              En mars 2024, le Conseil de sécurité de l'ONU a adopté une
              résolution appelant à un cessez-le-feu humanitaire immédiat
              pendant le mois du ramadan et la libération de tous les otages. La
              situation dans la bande de Gaza est critique depuis plus de six
              mois, avec une escalade de violence qui a causé la mort de plus de
              35 800 personnes, dont plus de 14 100 enfants et 9 000 femmes.
              Plus de 80 000 personnes ont été blessées, dont 12 300 enfants, et
              des milliers d'autres sont portées disparues. Les femmes et les
              enfants représentent 70 % des victimes, avec un enfant blessé ou
              tué toutes les dix minutes.
            </Typography>
            <Typography variant="body1">
              <small>
                Source:{" "}
                <a
                  href="https://www.unicef.fr/article/israel-palestine-les-enfants-paient-le-prix-de-la-guerre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unicef
                </a>
              </small>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Divider sx={{ my: 3 }}>
        <Chip
          label="Notre mission"
          sx={{ bgcolor: "#7ED957", color: "#FFFFFF", fontSize: "20px" }}
        />
      </Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 4,
          position: "relative",
        }}
      >
        <Typography variant="body1" sx={{ maxWidth: "700px", mt: 5 }}>
          Notre mission est de soutenir la population palestinienne en
          fournissant une plateforme inclusive et des ressources financières par
          le biais de notre association. Nous utilisons site pour informer,
          engager et collecter des fonds, tout en mettant en avant des articles
          pertinents et en vendant des produits dont les recettes sont reversées
          à des projets soutenant la cause palestinienne. La transparence et la
          mobilisation communautaire sont au cœur de notre approche.
        </Typography>

        <Box
          sx={{ position: "relative", width: "100%", maxWidth: "700px", my: 2 }}
        >
          <Box
            component="img"
            src={kid}
            alt="Second Image"
            sx={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              textAlign: "center",
            }}
          >
            Source:{" "}
            <a
              href="https://www.freepik.com/free-ai-image/photorealistic-kid-refugee-camp_187202697.htm#query=gaza%20child&position=1&from_view=keyword&track=ais_user&uuid=0adcc469-fc0a-484b-af7f-f8d70c8d271f"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Freepik
            </a>
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }}>
        <Chip
          label="Notre équipe"
          sx={{ bgcolor: "#7ED957", color: "#FFFFFF", fontSize: "20px" }}
        />
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          p: 2,
        }}
      >
        {avatars.map((avatar, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 200,
              flex: "1 1 150px",
              margin: 1,
              textAlign: "center",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={avatar.image}
              alt={avatar.name}
              sx={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                margin: "auto",
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "20px",
              }}
            >
              <Typography variant="h5" component="div">
                {avatar.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Container
        component="div"
        id="network"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          my: 5,
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            maxHeight: { md: "600px" },
            mb: 5,
          }}
        >
          Envie de rejoindre l'équipe ?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            "& > *": { margin: "20px" },
          }}
        >
          <InstagramEmbed
            url="https://www.instagram.com/p/C68MGQbNtdj/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
            style={{ maxWidth: "400px", width: "100%", aspectRatio: 1 }}
          />
          <a
            href="https://www.tiktok.com/@_unjourdepaix?_t=8mfW2K3MuRt&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              component="img"
              src={tiktok}
              alt="tiktok account image"
              sx={{
                maxWidth: "400px",
                width: "100%",
                border: "1px solid #80808075",
                objectFit: "cover",
              }}
            />
          </a>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
