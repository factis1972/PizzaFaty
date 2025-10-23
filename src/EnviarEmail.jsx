import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EnviarMail = ({ patente = '', caso = '', mail = '' }) => {
  const [formData, setFormData] = useState({ patente, caso, mail });
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    const templateParams = {
      patente: formData.patente,
      caso: formData.caso,
      email: formData.mail,
    };

    emailjs.send(
        'service_zn6ed7d',    // <-- Reemplaza esto
        'template_tootoo',   // <-- Reemplaza esto
        templateParams,
        'MDpxkQyNjiltWlUo-'     // <-- Reemplaza esto
     )
    .then(() => {
      setMensaje(`Correo enviado correctamente a ${formData.mail}`);
      setEnviando(false);
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      setMensaje('Error al enviar el correo.');
      setEnviando(false);
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Enviar alerta por correo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patente:
          <input
            type="text"
            name="patente"
            value={formData.patente}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Caso:
          <input
            type="text"
            name="caso"
            value={formData.caso}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Correo destino:
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar correo'}
        </button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default EnviarMail;
