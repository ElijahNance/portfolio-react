import {React, createContext, useState} from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {

  return (

      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <Navbar />
        <Footer />
      </div>
     
  );
}

export default App;
