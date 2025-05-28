import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button, Box, Typography } from '@mui/material';

export default function Cabinet() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('auth');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        color: '#000',
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Кабинет пользователя
      </Typography>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Выйти
      </Button>
    </Box>
  );
}