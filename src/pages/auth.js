import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })});

      if (response.ok) {
        // Connexion réussie
        navigate('/blog'); // Rediriger vers le blog
      } else {
        // Gestion de l'échec de connexion
        console.log('identifiants incorrects');
      }
    };

  return (
    <Container maxWidth="sm" sx={{ my: 9 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Nom d'utilisateur"
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Mot de passe"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Connexion
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
