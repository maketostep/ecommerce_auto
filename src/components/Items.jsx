import React from 'react';
import Item from './Item';
import { Typography, Grid, Container } from '@mui/material';

export function Items({ items }) {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {items.map((el) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
            <Item item={el} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
