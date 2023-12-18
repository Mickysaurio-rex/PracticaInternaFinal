import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/UPB_30Anios.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Link to="/login">
        <button
          style={{
            padding: '20px 50px',
            fontSize: '45px',
            fontFamily: './public/fuentes/InriaSans-Regular.ttf', 
            backgroundColor: 'rgba(119, 131, 245, 100)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            marginBottom: '50px',
            width: '469px', 
            height: '91px', 
            boxShadow: 'inset 0px 4px 30px 0px rgba(0, 82, 179, 100)',
            textAlign: 'right',
          }}
        >
          <span
            style={{
              width: '128px', // Ancho del círculo
              height: '128px', // Alto del círculo
              backgroundColor: 'white',
              borderRadius: '50%',
              position: 'absolute',
              left: '430px', // Posición a la izquierda 
              top: '50%', // Posición vertical centrada
              transform: 'translateY(160%)', // Centra verticalmente
              opacity: 0.8,
            }}
          ></span>
          EMPECEMOS
        </button>
      </Link>
    </div>
  );
};

export default Home;
