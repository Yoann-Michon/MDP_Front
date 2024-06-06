import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { TextField, Button, Box, Typography } from "@mui/material";

const CheckoutForm = () => {
  // Utilisation des hooks de Stripe
  const stripe = useStripe();
  const elements = useElements();

  // États pour stocker les données du formulaire et les messages d'erreur et de succès
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fonction de gestion de la saisie utilisateur dans les champs de formulaire
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour gérer les clics sur les boutons de montant
  const handleButtonClick = (amount) => {
    setFormData({
      ...formData,
      amount: amount,
    });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Vérification de la disponibilité de Stripe et des éléments
    if (!stripe || !elements) {
      return;
    }

    try {
      // Création d'une méthode de paiement avec Stripe
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        },
      });

      // Gestion des erreurs
      if (error) {
        setErrorMessage(error.message);
        return;
      }

      // Envoi des données de paiement au serveur
      const response = await fetch(`${process.env.REACT_APP_BACK_URL}/stripe/donation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: formData.amount * 100, // Conversion en centimes
          currency: "eur",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      });

      // Traitement de la réponse
      if (response.ok) {
          setSuccessMessage("Paiement réussi ! Merci pour votre don.");
        } else {
          setErrorMessage("Erreur lors de la transaction. Veuillez réessayer.");
        }

    } catch (error) {
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  // Rendu du formulaire de paiement
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}>
      <TextField
        label="Montant du don (EUR)"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
        margin="normal"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
        <Button variant="contained" style={{ backgroundColor: "#7ED957", color: "#FFFFFF" }} onClick={() => handleButtonClick(10)}>
          10 EUR
        </Button>
        <Button variant="contained" style={{ backgroundColor: "#7ED957", color: "#FFFFFF" }} onClick={() => handleButtonClick(5)}>
          5 EUR
        </Button>
        <Button variant="contained" style={{ backgroundColor: "#7ED957", color: "#FFFFFF" }} onClick={() => handleButtonClick(15)}>
          15 EUR
        </Button>
      </Box>
      <CardElement options={{ hidePostalCode: true }} />
      <TextField
        label="Prénom"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        label="Nom"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        margin="normal"
      />
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      {successMessage && <Typography color="primary">{successMessage}</Typography>}
      <Button variant="contained" color="primary" type="submit" style={{ marginTop: "16px" }}>
        Faire un don
      </Button>
    </form>
  );
};

export default CheckoutForm;
