import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  // Стейт для модалок
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  const handleOpenPrivacy = (e) => {
    e.preventDefault();
    setOpenPrivacy(true);
  };

  const handleClosePrivacy = () => {
    setOpenPrivacy(false);
  };

  const handleOpenTerms = (e) => {
    e.preventDefault();
    setOpenTerms(true);
  };

  const handleCloseTerms = () => {
    setOpenTerms(false);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        mt: 'auto',
        mb: 0,
        pb: 0,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" component="p">
            &copy; {new Date().getFullYear()} Business Car. Все права защищены.
          </Typography>

          <Stack direction="row" spacing={1}>
            <Link href="#" color="inherit" underline="hover" onClick={handleOpenPrivacy}>
              Политика конфиденциальности
            </Link>
            <Link href="#" color="inherit" underline="hover" onClick={handleOpenTerms}>
              Условия использования
            </Link>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton aria-label="Instagram" href="https://www.instagram.com/business_car_service/" sx={{ color: '#fff' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Telegram" href="https://t.me/businesscar_proexpert" sx={{ color: '#fff' }}>
              <TelegramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      {/* Модальное окно Политики конфиденциальности */}
      <Dialog open={openPrivacy} onClose={handleClosePrivacy} fullWidth maxWidth="sm">
        <DialogTitle>Политика конфиденциальности компании Business Car</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">
            Условия использования сервиса Business Car
          </Typography>
          {`            Мы в Business Car серьезно относимся к защите вашей личной информации. В этой Политике конфиденциальности описывается, какие данные мы собираем, как используем и защищаем их при продаже автомобилей и оказании связанных услуг.\n\n

            1. Сбор информации\n
            Мы можем собирать следующие данные:\n\n

              ФИО, контактные данные (телефон, email)\n\n

              Информация о вашем автомобиле (при обмене/выкупе)\n\n

              История заказов и взаимодействий с нашим сервисом\n\n

              Данные для оформления договора купли-продажи\n\n

            2. Использование информации\n
            Данные используются для:\n\n

              Оформления и выполнения заказа\n\n

              Связи с клиентом по вопросам покупки и сервиса\n\n

              Улучшения качества обслуживания\n\n

              Выполнения юридических и налоговых требований\n\n

            3. Защита данных\n
            Мы применяем технические и организационные меры для защиты вашей информации от несанкционированного доступа, изменения или уничтожения. Доступ к данным имеют только уполномоченные сотрудники.\n\n

            4. Передача третьим лицам
            Ваши данные не передаются третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом (например, налоговые органы).\n\n

            5. Хранение данных
            Информация хранится в течение срока, необходимого для выполнения целей, описанных в данной политике, а также в соответствии с законодательством.\n\n

            6. Ваши права
            Вы имеете право запросить доступ, изменение или удаление своих персональных данных. Для этого свяжитесь с нашей службой поддержки.\n\n`}`
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePrivacy} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>

      {/* Модальное окно Условий использования */}
      <Dialog open={openTerms} onClose={handleCloseTerms} fullWidth maxWidth="sm">
        <DialogTitle>Условия использования</DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" gutterBottom>
            Условия использования сервиса Business Car
          </Typography>
                    {`Настоящие Условия использования регулируют порядок покупки автомобилей и пользования сервисами Business Car. Пожалуйста, внимательно ознакомьтесь с ними перед оформлением заказа.

          1. Общие положения
          Пользуясь нашими услугами, вы соглашаетесь соблюдать данные условия и применимые законы.

          2. Оформление заказа
          Вы можете выбрать автомобиль и оформить заказ через наш сайт или офис. Все цены и характеристики автомобилей указаны на момент публикации и могут изменяться.

          3. Оплата и доставка
          Оплата осуществляется удобным для вас способом. Доставка и передача автомобиля происходят согласно договору купли-продажи.

          4. Ответственность
          Business Car не несет ответственности за ущерб, возникший вследствие неправильного использования автомобиля. Все споры решаются в соответствии с законодательством.

          5. Интеллектуальная собственность
          Весь контент сайта и маркетинговые материалы являются собственностью Business Car и защищены законом.

          6. Изменения условий
          Мы можем изменять эти условия, уведомляя пользователей на сайте. Рекомендуем регулярно их проверять.`}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTerms} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;
