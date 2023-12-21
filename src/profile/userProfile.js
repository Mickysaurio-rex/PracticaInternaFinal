import React, { useState, useEffect, useContext } from 'react';
import Header from '../bars/headerBar';
import ProfileInfo from './profileInfo';
import LateralBar from '../bars/lateralBar';
const studentInfo = {
  nombre: "Juan Perez Perez",
  telefono: "65144565",
  correo: "juanperez@gmail.com",
  domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
  carnet: "889380",
  codigo: '56197'
};

const teacherInfo = {
  nombre: "Jose Mamani Mamani",
  telefono: "78940294",
  correo: "josemamani@gmail.com",
  domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
  carnet: "9874324",
  codigo: '48925'
};



const UserProfile = () => {
  

  const divStyle = {
    display: 'flex',       
  
  };
  return (
      <div>
        <div>
          <Header nombreApellido = {studentInfo.nombre}/>
        </div>
        <div style={divStyle} >
          <LateralBar/>
          <ProfileInfo listaInfor={studentInfo}/>
        </div>
      </div>
  );
};

export default UserProfile;
