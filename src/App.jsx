import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Items } from './components/Items';
import { Outlet } from 'react-router';


export default function App() {
  
  return (
      <div className='wrapper'>
        <Header />
          <Outlet />
        <Footer />
      </div>
    )
}
