import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import logo from "./../assets/img/Ujdp_Logo.svg";

const Form = () => {
  const [reason, setReason] = React.useState("");
  const [orderNumber, setOrderNumber] = React.useState("");
  const isOrderSelected = reason === "commande";

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  const handleOrderNumberChange = (event) => {
    setOrderNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="div" sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Typography variant="h4" position={"relative"} sx={{
      my:5
    }}>
      Formulaire de Contact</Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#cfe8fc",
            p: 2,
            mb: { xs: 4, md: 0 },
            width: { xs: "100%", md: 500 },
            height: 500,
          }}
        >
          <img src={logo} alt="logo" style={{ width: 200, height: 200 }} />
          <Typography variant="h6" component="div" sx={{ mt: 2 }}>
            123 Rue de l'Exemple, 75000 Paris, France
          </Typography>
          <Typography variant="body1" component="div" sx={{ mt: 1 }}>
            contact@association.com
          </Typography>
          <Typography variant="body1" component="div" sx={{ mt: 1 }}>
            +33 1 23 45 67 89
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            flexGrow: 1,
            p: 2,
            alignItems: "center",
            justifyContent: "center",
            height: 400,
            width: { xs: "100%", md: 500 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField id="name" label="Nom" variant="standard" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="email" label="Mail" variant="standard" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="reason-label">Raison</InputLabel>
                <Select
                  labelId="reason-label"
                  id="reason"
                  value={reason}
                  onChange={handleChange}
                  label="Raison"
                >
                  <MenuItem value="question">Question</MenuItem>
                  <MenuItem value="feedback">Feedback</MenuItem>
                  <MenuItem value="support">Support</MenuItem>
                  <MenuItem value="commande">Commande</MenuItem>
                  <MenuItem value="other">Autre</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {isOrderSelected && (
              <Grid item xs={12} md={6}>
                <TextField
                  id="orderNumber"
                  label="Numéro de commande"
                  variant="standard"
                  value={orderNumber}
                  onChange={handleOrderNumberChange}
                  fullWidth
                />
              </Grid>
            )}
            <Grid item xs={12} md={12}>
              <TextField
                id="message"
                label="Message"
                variant="standard"
                multiline
                rows={5}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default Form;
