import React from "react";

const divElement = {
    display: 'flex',
    width: '1180px',
    height: '162px',
    backgroundColor: '#FFFFFF',
    boxShadow: '10px 8px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    padding: '30px 40px 0px 30px',
}

const divInfo = {
    width: '900px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 0px 0px 20px',
    gap: '10px',
    flex: 1,
}

const imageLogo = {
    width: '129px',
    height: '129px'
}

const textHour = {
    fontSize: '20px'
}

const textSchedule = {
    fontSize: '40px'
}

const divBtnCancel = {
    padding: '40px 20px 0px 20px'
}

const btnCancel = {
    width: '219px',
    height: '67px',
    borderRadius: '20px',
    border: 'none',
    fontSize: '20px',
    backgroundColor: '#AD4747',
    color: '#FFFFFF'
}

const ElementReserva = () => {
    return (
        <div style={divElement}> 
                <img src='logo192.png' style={imageLogo}/>
                <div style={divInfo}>
                    <label style={textHour}>9:00 - 10:00</label>
                    <label style={textSchedule}>Ingenieria de Sistemas Computacionales</label>
                    <label style={textHour}>12/09/2023</label>
                </div>
                <div style={divBtnCancel}>
                    <button style={btnCancel}>
                        Cancelar
                    </button>
                </div>
        </div>
    );
}

export default ElementReserva;