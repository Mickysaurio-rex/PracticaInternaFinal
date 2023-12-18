import React , { useState }from "react";

import Calendar from 'react-calendar';
import './CalendarStyle.css';


const calendarioStyle = {
    width: '700px',
    height: '571px',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
};

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

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div style={divNameCalendar}>
        <label style={txtFecha}>Fecha</label>
        <img src = 'logo192.png' style={logoFecha}/>
      </div>
      <Calendar 
        className='calendar-teacher'
        style={calendarioStyle}
        onChange={setDate}
        value={date}
      />
    </div>
  );
};

export default Calendario;
