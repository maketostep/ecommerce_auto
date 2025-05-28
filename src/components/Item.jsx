import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal,
  Box
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function Item({ item }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ width: 280, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image={`img/${item.img}`}
          alt={item.title}
          sx={{ height: 180, objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc.slice(0, 120)}...
          </Typography>
          <Typography variant="h6" color="inherit" sx={{ mt: 1 }}>
            {item.price.toLocaleString()} ₽
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button color="inherit" size="small" onClick={handleOpen}>Подробнее</Button>
          <Button color="inherit" size="small" startIcon={<AddShoppingCartIcon />}>
            В корзину
          </Button>
        </CardActions>
      </Card>

      {/* Модалка с полным описанием */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {item.desc}
          </Typography>
          <Button color="inherit" onClick={handleClose} variant="contained" fullWidth>
            Закрыть
          </Button>
        </Box>
      </Modal>
    </>
  );
}
