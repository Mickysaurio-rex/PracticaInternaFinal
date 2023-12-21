import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const divGeneral = {
    display: 'flex',
    gap: '30px'
}

const btnSave = {
    width: "250px",
    height: "68px",
    padding: '0px',
    borderRadius: "20px",
    backgroundColor: "#F5EC2B",
    alignItemas: "center",
    display: "cover",
    border: "none",
    boxShadow: '10px 8px 10px 0px rgba(0, 0, 0, 0.25)'

}

const btnRestart = {
    width: "250px",
    height: "68px",
    padding: '0px',
    borderRadius: "20px",
    backgroundColor: "#09184D",
    alignItemas: "center",
    display: "cover",
    border: "none",
    boxShadow: '10px 8px 10px 0px rgba(0, 0, 0, 0.25)'
}

const txtSave = {
    color: "#000000",
    fontSize: '20px',
}

const txtRestart = {
    color: "#FFFFFF",
    fontSize: '20px',
}
const BtnSaveAndRestart = () => {
    return(
        <div style = {divGeneral}>
            <Link to = '/createReservas'>
                <button style={btnSave}>
                    <label style={txtSave}>GUARDAR</label>
                </button>
            </Link>
            <Link to = '/createReservas'>
                <button style={btnRestart}>
                    <label style={txtRestart}>REINICIAR</label>
                </button>
            </Link>
        </div>
    );
}

export default BtnSaveAndRestart;