import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({nombreApellido}) => {
  const headerStyle = {
    backgroundColor: '#09184D',
    color: '#FFF',
    height: "50px",
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '35px',
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
    
    // Agrega estilos para tu icono (puedes usar una imagen o un ícono de biblioteca como FontAwesome)
  };

  const imgUser = {
    width: '46px',
    height: '46px',

  };

  const buttonName = {
    backgroundColor: '#09184D',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '20px' 

  }
  return (
    <div>
      <div style={headerStyle}>
        <div style={logoStyle}>Reservas UPB</div>
        <div style={userInfoStyle}>
          <div style={iconStyle}>
            <img src = 'icons8-usuario-masculino-en-círculo-24.png'/>
          </div>
          <div>
            <Link to = '/userprofile'>
              <button style={buttonName}>
                {nombreApellido}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
