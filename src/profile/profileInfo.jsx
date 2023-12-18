import React from 'react';
import BoxInfo from './boxInfo.jsx';
import EndSessionBtn from './endSessionBtn.jsx';

  const imagenStyle = {
    width: '272px', 
    height: '272px', 
    objectFit: 'cover', 
  };

  const text1 = {
    fontSize: '45px',
  }

  const text2 = {
    fontSize: '32px',
    
  }

  const generalDiv = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px'
  };

  const subDiv = {
    display: 'flex',
    flexDirection: 'row'
  }

  const divFirst = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '70px 100px 0px 100px',
    alignItems: 'center',
  };

  const seccionStyle = {
    border: '1px solid #000',       // Borde para visualizar las secciones
  };

  const divSecond = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px'
  };

  const divBtn = {
    padding: '10px 0px 0px 520px'
  }
  
  const divSectores = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0px 10px 160px',
    gap: '30px',
        
  };


const ProfileInfo = ({listaInfor}) => {
return (
  <div style={generalDiv}>
    <div style={subDiv}>
    <div style={divFirst}>
      <img
          src="foto_perfil.png" // Reemplaza con la ruta de tu imagen
          alt="Imagen Circular"
          style={imagenStyle}
        />
      <div style={divSecond}>
        <label style={text1}>{listaInfor.nombre}</label>
        <label style={text2}>{listaInfor.codigo}</label>
      </div>
    </div>
    <div style={divSectores}>
      <BoxInfo description='Telefono' information={listaInfor.telefono}/>
      <BoxInfo description='Correo-e' information={listaInfor.correo}/>
      <BoxInfo description='Domicilio' information={listaInfor.domicilio}/>
      <BoxInfo description='Doc.Identidad' information={listaInfor.carnet}/>
    </div>
    </div>
    <div style={divBtn}>
      <EndSessionBtn/>
    </div>
  </div>
  );
};

export default ProfileInfo;