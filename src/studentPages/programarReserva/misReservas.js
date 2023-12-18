import React from "react";
import Header from "../../bars/headerBar";
import LateralBar from "../../bars/lateralBar";
import ElementReserva from "./elementReserva";

const divStyle = {
    display: 'flex',       
};

const divAbsolute = {
    backgroundColor: '#DFDFDF' 
};

const divElementos = {
    display: 'flex',
    padding: '30px 0px 0px 20px',
    flexDirection: 'column',
    gap: '20px'
}; 

const studentInfo = {
nombre: "Juan Perez Perez",
telefono: "65144565",
correo: "juanperez@gmail.com",
domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
carnet: "889380",
codigo: '56197'
}

const MisReservas = () => {
    return (
        <div style={divAbsolute}>
          <div>
            <Header nombreApellido = {studentInfo.nombre}/>
          </div>
          <div style={divStyle} >
            <LateralBar/>
            <div style={divElementos}>
                <ElementReserva/>
                <ElementReserva/>
                <ElementReserva/>
            </div>
          </div>
        </div>
    );
}

export default MisReservas