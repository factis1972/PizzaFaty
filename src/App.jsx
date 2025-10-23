import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import MailSender from './MailSender';
import EnviarEMail from './EnviarEmail';

function App() {
  return (
    <div className="App">
      <EnviarEMail />
   </div>
  );
}

export default App;

/*
      <MailSender
        patente= "JLT453"
        caso="Hola, este es un mensaje enviado desde React usando EmailJS."
        email="foa1972@hotmail.com"
      />
 
*/