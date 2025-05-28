import React from 'react'
import MapInit from '../src/components/MapInit'
import { Box, Typography, Stack, Paper } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

export default function Contacts() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center', maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Наши контакты:
        </Typography>

        <Stack spacing={2} alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <CallIcon />
            <Typography variant="body1">+7 (909) 899 9102</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <HomeIcon />
            <Typography variant="body1">МКАД 26 километр, 5 ст3</Typography>
          </Stack>
        </Stack>
      </Paper>

      <Box>
        <MapInit />
      </Box>
    </Box>
  );
}
