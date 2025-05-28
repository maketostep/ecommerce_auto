import React from 'react';
import MapInit from '../src/components/MapInit';
import {
  Box,
  Typography,
  Stack,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Схема валидации
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .matches(/^[A-ZА-ЯЁ][a-zа-яё]+$/, 'Имя должно начинаться с заглавной буквы и содержать только буквы'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/, 'Введите корректный номер телефона'),
  email: yup
    .string()
    .required('Почта обязательна')
    .email('Введите корректную почту'),
});

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Данные отправлены:', data);
    reset(); // очистить форму
  };

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
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          textAlign: 'center',
          maxWidth: 400,
          width: '100%',
        }}
      >
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
            <Typography variant="body1">
              МКАД 26 километр, 5 ст3
            </Typography>
          </Stack>
        </Stack>
      </Paper>
      <Box>
        <MapInit/>
      </Box>
      {/* Форма */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Запрос на консультацию
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Имя"
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
            />
            <TextField
              label="Телефон"
              {...register('phone')}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              fullWidth
            />
            <TextField
              label="Почта"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
            <Button type="submit" variant="contained" color="inherit">
              Отправить
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
