import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Items } from './components/Items';
import { Outlet } from 'react-router';
import { Container } from '@mui/material';
import LogoCar from './img/logo.png'

export default function App() {
  
  return (
      <Container className='wrapper' sx={{alignItems: 'center'}}>
        <img src={LogoCar} style={{width: '50%', height:'50%', margin: '0 auto'}}></img>
        <Header />
          <Outlet />
        <Footer />
      </Container>
    )
}
