import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { TextField, Button } from "@mui/material";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = (amount) => {
    setFormData({
      ...formData,
      amount: amount
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.error("Error creating PaymentMethod:", error);
        return;
      }

      const response = await fetch("https://mdp-back.onrender.com/stripe/donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: formData.amount * 100, 
          currency: "eur",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#7ED957", color: "#FFFFFF" }}
          onClick={() => handleButtonClick(10)}
        >
          10 EUR
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#7ED957", color: "#FFFFFF" }}
          onClick={() => handleButtonClick(5)}
        >
          5 EUR
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#7ED957", color: "#FFFFFF" }}
          onClick={() => handleButtonClick(15)}
        >
          15 EUR
        </Button>
      </div>
      <CardElement
        options={{
          hidePostalCode: true,
          appearance: {
            theme: 'stripe',
            variables: {
              colorPrimary: '#0570de',
              colorBackground: '#ffffff',
              colorText: '#30313d',
              colorDanger: '#df1b41',
              fontFamily: 'Ideal Sans, system-ui, sans-serif',
              spacingUnit: '2px',
              borderRadius: '4px',
            },
            rules: {
              '.Input': {
                borderRadius: '4px',
                border: '1px solid #e0e0e0',
                padding: '10px',
              },
              '.Label': {
                fontSize: '16px',
                fontWeight: '500',
              },
            },
          },
        }}
      />
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
      
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginTop: "16px" }}
      >
        Faire un don
      </Button>
    </form>
  );
};

export default CheckoutForm;
