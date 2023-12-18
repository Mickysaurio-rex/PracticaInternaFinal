import React, { useState, useEffect } from 'react';

const Login = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const backgrounds = ['background1.jpg', 'background2.jpeg', 'background3.jpeg']; // Nombres de tus imágenes de fondo

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundImage(randomIndex);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/${backgrounds[backgroundImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    backdropFilter: 'blur(10px)', 
    borderRadius: '40px', 
    width: '550px', 
    height: '550px',
    padding: '50px 40px 30px',
    display: 'flex',
    flexDirection: 'column', // Cambio a disposición de columna para que los elementos estén uno debajo del otro
    alignItems: 'center',
    justifyContent: 'center',

  };

  const imageStyle = {
    width: '312px', 
    height: '86px', 
    position: 'absolute', 
    top: '90px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.30)', 
    borderRadius: '15px', // Bordes redondeados
    width: '450px', // Ancho 
    height: '50px', // Altura
    padding: '20px, 10px, 20px,10px',
    border: 'none',
    marginBottom: '40px',
  };

  const buttonStyle = {
    background: 'rgba(255, 255, 255, 0.6)', // Fondo blanco con opacidad al 70%
    borderRadius: '15px', // Bordes redondeados
    padding: '10px',
    border: 'none',
    marginBottom: '10px',
    width: '450px',
    height: '50px',
  };


  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
      <img
          src={`${process.env.PUBLIC_URL}/logo_upb.png`} 
          alt="Imagen Personalizada"
          style={imageStyle}
        /><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="login-container">
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <input 
                type="text"
                id="username"
                placeholder='Codigo de Acceso'
                className="custom-input"
                style={inputStyle}
                />
          
            <input
              type="password"
              id="password"
              placeholder='Contraseña'
              style={inputStyle}
            />

            <br/><br/>
          <button 
          type="submit"
          style={buttonStyle}
          >Acceder
          </button>
        </form>
      </div>
 
      </div>
         </div>
  );
};

export default Login;
