import React, { useState } from 'react';
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

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        style={calendarioStyle}
        onChange={setDate}
        value={date}
      />
    </div>
  );
};

export default Calendario;
