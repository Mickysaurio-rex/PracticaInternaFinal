import React, { useState } from 'react';

const divGeneral = {
    width: "420px",
    height: "250px",
    padding: '0px',
    borderRadius: "20px",
    listStyleType: 'none',
    overflowY: 'auto'

}

const ListaHorarios = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  const elementos = [
    { id: 1, nombre: 'Horario 1:', hora: '9:00 - 10:00' },
    { id: 2, nombre: 'Horario 2:', hora: '10:00 - 11:00' },
    { id: 3, nombre: 'Horario 3:', hora: '11:00 - 12:00' },
    { id: 4, nombre: 'Horario 4:', hora: '13:00 - 14:00' },
    { id: 5, nombre: 'Horario 5:', hora: '15:00 - 16:00' },
    ];

  const seleccionarElemento = (id) => {
    setSeleccionado(id);
  };


  const divHora = {
    padding: '20px 0px 10px 60px'
  }

  const divNombreHorario = {
    padding: '20px 0px 10px 30px'
  }

  const txtHora ={
    fontSize: '15px'
  }

  const textHorario ={
    fontSize: '15px',
    fontWeight: 'bold'
  }
  return (
    <div>
      <ul style={divGeneral}>
        {elementos.map((elemento) => (
          <li key={elemento.id}>
            <button
              onClick={() => seleccionarElemento(elemento.id)}
              style={{
                backgroundColor: seleccionado === elemento.id ? 'lightblue' : 'white',
                width: '100%',
                height: '50px',
                border: 'none',
                display: 'flex',
                padding: '0px 0px 10px 20px',
              }}
            >
              <div style={divNombreHorario}>
                <label style={textHorario}>{elemento.nombre}</label>
              </div>
              <div style={divHora}>
                <label style={txtHora}>{elemento.hora}</label>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaHorarios;
