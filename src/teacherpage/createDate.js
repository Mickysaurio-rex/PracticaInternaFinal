import React from "react";
import Header from "../bars/headerBar";
import LateralBar from "../bars/lateralBar";
import Calendario from "./calendar";
import ClockSelector from "./clockElement";
import BtnSaveAndRestart from "../studentPages/reservas/buttonsSaveAndRestart";

const studentInfo = {
    nombre: "Juan Perez Perez",
    telefono: "65144565",
    correo: "juanperez@gmail.com",
    domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
    carnet: "889380",
    codigo: '56197'
}

const divAbsolute = {
backgroundColor: "#DFDFDF"
}

const divStyle = {
    display: 'flex',         
};

const divElements = {
    display: 'flex',
    flexDirection: 'column'
}

const divClockCalendar = {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px 0px 0px 110px',
    gap: '60px'
}

const divButton = {
    padding: '40px 0px 0px 660px',
}

const CreateDate = () =>{
    return(
    <div style={divAbsolute}>
        <div>
            <Header nombreApellido = {studentInfo.nombre}/>
        </div>
        <div style={divStyle}> 
            <LateralBar/>
            <div style={divElements}>
                <div style={divClockCalendar}>
                    <ClockSelector/>
                    <Calendario/>
                </div>
                <div style={divButton}>
                    <BtnSaveAndRestart/>
                </div>
            </div>   
        </div>
    </div>
    )
}

export default CreateDate;
