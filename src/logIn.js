import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './App';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const user = useContext(UserContext)

  const [backgroundImage, setBackgroundImage] = useState(0);
  const backgrounds = ['background1.jpg', 'background2.jpeg', 'background3.jpeg']; // Nombres de tus imágenes de fondo
  const navigate = useNavigate(); 

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
    flexDirection: 'column', 
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
    borderRadius: '15px', 
    width: '450px',  
    height: '50px', 
    padding: '20px, 10px, 20px,10px',
    border: 'none',
    marginBottom: '40px',
  };
  
  const buttonStyle = {
    background: 'rgba(255, 255, 255, 0.6)', 
    borderRadius: '15px', 
    padding: '10px',
    border: 'none',
    marginBottom: '10px',
    width: '450px',
    height: '50px',
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Lógica de autenticación
    if (username === '22222' && password === '11111') {
      //user.login(username, password);
      navigate('/createReservas'); // Redirigir al usuario a /createReservas
    } else if (username === '33333' && password === '44444') {
      //user.login(username, password);
      navigate('/createDate'); // Redirigir al usuario a /createDate
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundImage(randomIndex);
  }, []);

  

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
          onClick={handleLogin}
          >Acceder
          </button>
        </form>
      </div>
 
      </div>
         </div>
  );
};

export default Login;
