import React from 'react';
import Item from './Item';
import { Box } from '@mui/material';

export function Items({ items }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        justifyContent: 'center',
        mt: 4,
      }}
    >
      {items.map((el) => (
        <Item key={el.id} item={el} />
      ))}
    </Box>
  );
}
