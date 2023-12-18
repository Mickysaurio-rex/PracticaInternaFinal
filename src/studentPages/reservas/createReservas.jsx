import React from 'react';
import Header from '../../bars/headerBar';
import LateralBar from '../../bars/lateralBar';
import Calendario from './calendar';
import ListaMaterias from './listaMaterias';
import BtnSaveAndRestart from './buttonsSaveAndRestart';
import ListaHorarios from './listaHorarios';

const studentInfo = {
    nombre: "Juan Perez Perez",
    telefono: "65144565",
    correo: "juanperez@gmail.com",
    domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
    carnet: "889380",
    codigo: '56197'
  }

  const divStyle = {
    display: 'flex',       
  };

  const divElements = {
    display: 'flex',
    flexDirection: 'row',
    padding: '30px 0px 0px 100px',
    gap: '30px'
  }

  const divLists = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px'
  }

  const divCalendarAndBtn = {
    display: 'flex',
    flexDirection: 'column',
    gap: '120px',
    padding: '0px 0px 0px 80px'

  }

  const divAbsolute = {
    backgroundColor: "#DFDFDF"
  }

const CreateReservas = () => {
    return(
    <div style={divAbsolute}>
        <div>
            <Header nombreApellido = {studentInfo.nombre}/>
        </div>
        <div style={divStyle}> 
            <LateralBar/>
            <div style={divElements}>
              <div style={divLists}>
                <ListaMaterias/>
                <ListaHorarios/>
              </div>
              <div style={divCalendarAndBtn}>
                <Calendario/>
                <BtnSaveAndRestart/>
              </div>
            </div>
            
            
        </div>
    </div>
    );
}

export default CreateReservas;