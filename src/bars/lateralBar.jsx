import React from 'react';

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

      const buttonStyle = {
        height: "40px",
        width: "40px",
        backgroundImage: 'url("C:/Users/micky/PracticaInterna/proyecto_interna/public/icons8-calendario-más-24.png")', // Reemplaza con la ruta de tu imagen
        backgroundSize: 'cover',
        backgroundColor: 'black',
        margin: '10px 0', // Ajuste de margen arriba y abajo
        border: 'none',
      }

      return(
        <div style={lateralStyle}>
            <button style={buttonStyle}></button>
            <button style={buttonStyle}></button>
        </div>
      );
}

export default LateralBar;