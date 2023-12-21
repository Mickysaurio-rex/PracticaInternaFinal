import React, { useState } from "react";
import Select from 'react-select';

const options = [
    { value: 'am', label: 'am' },
    { value: 'pm', label: 'pm' },
  ];

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
    gap: '30px',
    flexDirection: 'column',
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

const divReloj = {
    display: "flex",
    flexDirection: 'column',
}

const inputHourMinute ={
    width: '93px',
    height: '93px',
    borderRadius: '20px',
    fontSize: '40px',
    padding: '0px 0px 0px 20px'
}

const labelClock = {
    fontSize:'25px'
}

const divInputHour = {
    padding: '20px 0px 0px 75px',
    display: "flex",
    flexDirection: 'row',
    gap: '30px'   
}

const ClockSelector = () => {
    
      const clockContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      };
    
      const clockStyle = {
        display: 'flex',
        gap: '20px',
      };
    
      const numbersContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '10px',
      };
    
      const numberStyle = {
        width: '64px',
        height: '64px',
        border: '1px solid #000',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      };
    
      const selectedTimeStyle = {
        marginTop: '20px',
        fontSize: '24px',
      };

      const customStyles = {
        control: (provided) => ({
          ...provided,
          width: '93px',
          height: '93px', 
        }),
      };

    return(
        <div>
            <div style={divNameCalendar}>
                <label style={txtFecha}>Hora</label>
                <img src = 'logo192.png' style={logoFecha}/>
            </div>
            <div style={divClock}>
                <div style={divReloj}>
                    <label style={labelClock}>Hora Inicio</label>
                    <div style={divInputHour}>
                        <input type="number" style={inputHourMinute}></input>
                        <input type="number" style={inputHourMinute}></input>
                        <Select
                        options={options}
                        styles={customStyles}
                        />
                    </div>
                </div>
                <br/><br/><br/>
                <div style={divReloj}>
                    <label style={labelClock}>Hora Finalizacion</label>
                    <div style={divInputHour}>
                        <input type="number" style={inputHourMinute}></input>
                        <input type="number" style={inputHourMinute}></input>
                        <Select
                        options={options}
                        styles={customStyles}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ClockSelector;
