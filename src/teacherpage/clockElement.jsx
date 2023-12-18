import React from "react";

const divClock = {
    width: '500px',
    height: '400px',
    maxWidth: '100%',
    background: '#FFFFFF',
    border: 'none',
    borderBottomLeftRadius: '20px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',      
    lineHeight: '1.125em',
    paddingTop: '40px',
    boxShadow: '10px 8px 8px 0px rgba(0, 0, 0, 0.25)',
}

const divNameCalendar = {
    display: 'flex',
    width: '160px',
    height: '30px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    backgroundColor: '#FFFFFF',
    padding: '10px 0px 0px 20px',
    flexDirection: 'row',
    gap: '30px'
    
}

const txtFecha = {
  fontSize: '20px'
}

const logoFecha ={
  width: '30px',
  height: '30px'
}

const ClockSelector = () => {
    return(
        <div>
            <div style={divNameCalendar}>
                <label style={txtFecha}>Hora</label>
                <img src = 'logo192.png' style={logoFecha}/>
            </div>
            <div style={divClock}>

            </div>
        </div>

    )
}

export default ClockSelector;
