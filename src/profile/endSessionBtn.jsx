import React from 'react';
const bntStyle = {
  width: '200px', 
  height: '55px', 
  borderRadius: '20px',
  border: '3px solid #AD4646' 
};
const textClose = {
  fontSize: '15px',
  color: '#AD4646'
};

const EndSessionBtn = () => {
  return(
    <button style = {bntStyle}>
      <label style = {textClose}>
        Cerrar Sesion
      </label>
    </button>
  )
}

export default EndSessionBtn;