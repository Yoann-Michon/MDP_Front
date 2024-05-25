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
import te from "../assets/img/test.jpg";
import dana from "../assets/avatars/dana.svg";
import ornella from "../assets/avatars/ornella.svg";
import ines from "../assets/avatars/ines.svg";
import yoann from "../assets/avatars/yoann.svg";
import { InstagramEmbed } from 'react-social-media-embed';
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
          sx={{ bgcolor: "#4CAF50", color: "#FFFFFF", fontSize: "20px" }}
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
            }}
          >
            <Box
              component="img"
              src={te}
              alt="First Image"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 2,
            }}
          >
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              facilisis neque id nunc consectetur malesuada. Vestibulum accumsan
              rhoncus lacinia. Sed nec lectus ac nulla tempus ultricies
              consectetur vitae massa. Nulla quis porta enim. In eleifend magna
              vel libero rutrum, vitae aliquet lorem tincidunt. Vivamus
              dignissim ullamcorper eleifend. Phasellus consectetur eleifend
              libero ut viverra. Donec venenatis lorem ut odio consequat, ac
              lacinia diam cursus. Fusce mauris orci, egestas at molestie sit
              amet, condimentum in elit. Curabitur non tincidunt turpis.
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
            }}
          >
            <Box
              component="img"
              src={te}
              alt="Second Image"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 2,
            }}
          >
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              facilisis neque id nunc consectetur malesuada. Vestibulum accumsan
              rhoncus lacinia. Sed nec lectus ac nulla tempus ultricies
              consectetur vitae massa. Nulla quis porta enim. In eleifend magna
              vel libero rutrum, vitae aliquet lorem tincidunt. Vivamus
              dignissim ullamcorper eleifend. Phasellus consectetur eleifend
              libero ut viverra. Donec venenatis lorem ut odio consequat, ac
              lacinia diam cursus. Fusce mauris orci, egestas at molestie sit
              amet, condimentum in elit. Curabitur non tincidunt turpis.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Divider sx={{ my: 3 }}>
        <Chip
          label="Notre mission"
          sx={{ bgcolor: "#4CAF50", color: "#FFFFFF", fontSize: "20px" }}
        />
      </Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 2,
          mb: 4,
        }}
      >
        <Typography variant="body1" sx={{ maxWidth: "700px", mb: 5 }}>
          Notre mission est de soutenir la population palestinienne en
          fournissant une plateforme inclusive et des ressources financières par
          le biais de notre association. Nous utilisons site pour informer,
          engager et collecter des fonds, tout en mettant en avant des articles
          pertinents et en vendant des produits dont les recettes sont reversées
          à des projets soutenant la cause palestinienne. La transparence et la
          mobilisation communautaire sont au cœur de notre approche.
        </Typography>
        {/*https://unsplash.com/fr/photos/un-groupe-de-femmes-debout-les-unes-a-cote-des-autres-Br9WoY9YufU*/}
        <Box
          component="img"
          src={te}
          alt="Second Image"
          sx={{
            maxWidth: "700px",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Box>
      <Divider sx={{ my: 3 }}>
        <Chip
          label="Notre équipe"
          sx={{ bgcolor: "#4CAF50", color: "#FFFFFF", fontSize: "20px" }}
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
      <Container component="div" id="network" sx={{display: 'flex', justifyContent: 'center',flexDirection:"column",width:"100%",my:5}}>
        <Typography variant="h4" component="h4" sx={{ display: 'flex', justifyContent: 'center',maxHeight:{md:"600px" },mb:5}}>
          Envie de rejoindre l'équipe ?
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-around',minWidth:400, width:"100%", alignItems:"center",flexDirection:{xs: "column", md: "row"}}}>
          <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" style={{maxWidth:"400px",width:"100%"}} />
          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@epicgardening/video/7055411162212633903" data-video-id="7055411162212633903" id="v88922974113346340" style={{ height: "625px", width: "323px", margin: "0" }}>
  <iframe
    title="TikTok Video"
    name="__tt_embed__v88922974113346340"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
    src="https://www.tiktok.com/embed/v2/7055411162212633903"
    style={{ "visibility": "unset" }}
  ></iframe>
</blockquote>

        </Box>
      </Container>
    </div>
  );
};

export default Home;
