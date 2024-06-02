import React, { useContext, useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./../userRole";

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {userRole} = useContext(UserContext)


  //const createUser = async () => {
  //  const response = await fetch('http://localhost:4000/auth/register', {
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/json',
  //    },
  //    body: JSON.stringify({
  //      username: 'test',
  //      password: 'test1234',
  //      role: 'user'  // or 'admin'
  //    }),
  //  });
  //
  //  if (response.ok) {
  //    const data = await response.json();
  //    console.log('Utilisateur créé avec succès:', data);
  //  } else {
  //    console.error('Erreur lors de la création de l\'utilisateur');
  //  }
  //};
  //
  //// Appelez la fonction pour créer un utilisateur
  //createUser();
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        localStorage.setItem('token', token);

        // rediriger vers la page admin ou utilisateur
        const redirection = userRole === 'admin' ? '/dashboard' : '/user';
        navigate(redirection);
      } else {
        setError('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      setError('Erreur lors de la connexion');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 9 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Connexion
        </Typography>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
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
