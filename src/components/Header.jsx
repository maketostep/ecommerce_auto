import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Stack } from '@mui/material';
import { NavLink } from 'react-router';

const navItems = [
  { label: 'Главная', to: '/' },
  { label: 'Контакты', to: '/contacts' },
  { label: 'Личный кабинет', to: '/cabinet' },
];

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        mb: 4,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Business Car
        </Typography>

        <Stack direction="row" spacing={2}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={NavLink}
              to={item.to}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: 500,
                '&.active': {
                  fontWeight: 'bold',
                  borderBottom: '2px solid black',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
