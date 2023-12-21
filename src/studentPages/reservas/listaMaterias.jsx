import React, { useState } from 'react';

const divGeneral = {
    width: "420px",
    height: "300px",
    padding: '0px',
    borderRadius: "20px",
    listStyleType: 'none',
    overflowY: 'auto'

}

const ListaMaterias = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  const elementos = [
    { id: 1, nombre: 'Ingenieria de Sistemas Computacionales', imagen: 'dti.png' },
    { id: 2, nombre: 'Comunicacion', imagen: 'comunicacion.png' },
    { id: 3, nombre: 'Administracion', imagen: 'administracion.png' },
    { id: 4, nombre: 'Ingenieria Financiera', imagen: 'ingenieria_financiera.png' },
    { id: 5, nombre: 'Ingenieria de Sistemas Computacionales', imagen: 'dti.png' },
    ];

  const seleccionarElemento = (id) => {
    setSeleccionado(id);
  };

  const iconoMateria = {
    width: '45px',
    height: '45px',
  }

  const divNombreMateria = {
    padding: '10px 0px 10px 30px'
  }

  const txtNombreMateria ={
    fontSize: '15px'
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
                height: '60px',
                border: 'none',
                display: 'flex',
                padding: '10px 0px 10px 20px',
              }}
            >
              <img src={elemento.imagen} style={iconoMateria} />
              <div style={divNombreMateria}>
                <label style={txtNombreMateria}>{elemento.nombre}</label>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaMaterias;
