// src/MailSender.js
// src/MailSender.js
import React from 'react';
import emailjs from 'emailjs-com';

const MailSender = ({ patente, caso, email }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      patente: patente,
      caso: caso,
      email: email,
    };

    emailjs
      .send(
        'service_zn6ed7d',    // <-- Reemplaza esto
        'template_tootoo',   // <-- Reemplaza esto
        templateParams,
        'MDpxkQyNjiltWlUo-'     // <-- Reemplaza esto
      )
      .then(
        (response) => {
          console.log('Correo enviado:', response.status, response.text);
          alert('Correo enviado con éxito');
        },
        (err) => {
          console.error('Error al enviar correo:', err);
          console.log({email}, {patente}, {caso});
          alert('Error al enviar correo');
        }
      );
  };

  return (
    <div>
      <h3>Enviar mensaje</h3>
      <p><strong>Para:</strong> {email}</p>
      <p><strong>Patente:</strong> {patente}</p>
      <p><strong>Mensaje:</strong> {caso}</p>
      <button onClick={sendEmail}>Enviar</button>
    </div>
  );
};

export default MailSender;