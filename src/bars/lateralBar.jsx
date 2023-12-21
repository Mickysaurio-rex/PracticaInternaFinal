import React from 'react';
import { Link } from 'react-router-dom';

const LateralBar = () => {
    const lateralStyle = {
        backgroundColor: '#09184D',
        color: '#FFF',
        height: "630px",
        width: "40px",
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      };

      const buttonCreateStyle = {
        height: "40px",
        width: "40px",
        backgroundImage: 'url("icons8-calendario-más-24.png")', // Reemplaza con la ruta de tu imagen
        backgroundSize: 'cover',
        backgroundColor: '#09184D',
        margin: '10px 0', // Ajuste de margen arriba y abajo
        border: 'none',
      }

      const buttonDatesStyle = {
        height: "40px",
        width: "40px",
        backgroundImage: 'url("icons8-135-grados-48.png")', 
        backgroundSize: 'cover',
        backgroundColor: '#09184D',
        margin: '10px 0', 
        border: 'none',
      }

      return(
        <div style={lateralStyle}>
            <Link to = "/createReservas">
            <button style={buttonCreateStyle}></button>
            </Link>
            <Link to = "/misReservas">
            <button style={buttonDatesStyle}></button>
            </Link>
        </div>
      );
}

export default LateralBar;