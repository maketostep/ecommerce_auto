import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router';
export default function Login() {
  const navigate = useNavigate();
  const [errorOpen, setErrorOpen] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('auth');
    if (isLoggedIn) navigate('/cabinet');
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (email === 'admin@example.com' && password === '123456') {
      localStorage.setItem('auth', 'true');
      navigate('/cabinet');
    } else {
      setErrorOpen(true);
    }
  };

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setErrorOpen(false);
  };

  return (
    <Box
      sx={{
        height: '50vh',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: 350,
          bgcolor: '#fff',
          textAlign: 'center',
        }}
        elevation={6}
      >
        <Typography variant="h5" gutterBottom>
          Вход в кабинет
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              required
            />
            <TextField
              name="password"
              label="Пароль"
              type="password"
              fullWidth
              required
            />
            <Button type="submit" variant="contained" color="inherit">
              Войти
            </Button>
          </Stack>
        </form>
      </Paper>

      {/* Уведомление об ошибке */}
      <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Неверный логин или пароль
        </Alert>
      </Snackbar>
    </Box>
  );
}