import React from 'react';

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

  return (
    <div>
      <div style={headerStyle}>
        <div style={logoStyle}>Reservas UPB</div>
        <div style={userInfoStyle}>
          <div style={iconStyle}>
            {/* Aquí coloca tu icono */}
            🌟
          </div>
          <div>
            <label style={{ margin: '0' }}>{nombreApellido}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
