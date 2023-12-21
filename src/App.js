import {Routes, Route} from 'react-router-dom';
import { UserProvider } from './userContext.js';
import Home from './home.js';
import LogIn from './logIn.js';
import UserProfile from './profile/userProfile';
import PaginaPrueba from './PaginaPrueba';
import CreateReservas from './studentPages/reservas/createReservas.jsx';
import MisReservas from './studentPages/programarReserva/misReservas.js';
import CreateDate from './teacherpage/createDate.js';
import React, { createContext, useContext, useState } from 'react';
const studentInfo = {
  nombre: "Juan Perez Perez",
  telefono: "65144565",
  correo: "juanperez@gmail.com",
  domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
  carnet: "889380",
  codigo: '56197'
};

const teacherInfo = {
  nombre: "Jose Mamani Mamani",
  telefono: "78940294",
  correo: "josemamani@gmail.com",
  domicilio: "Zona Lllojeta, El Rosal Calle Petunia Nº 100",
  carnet: "9874324",
  codigo: '48925'
};

export const UserContext = React.createContext();


function App() {
  const [user, setUser] = useState(null);
  const login = (username, password) => {
    if (username === '22222' && password === '11111') {
      setUser(studentInfo);
    } else if (username === '33333' && password === '44444') {
      setUser(teacherInfo);
    } else {
      setUser(null); 
    }
  };

  const logout = () => {
    setUser(null);
  };


  return (
    <div className='App'>
      <UserProvider>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/userprofile' element={<UserProfile/>} />
          <Route path='/pruebapagina' element={<PaginaPrueba/>}/>
          <Route path='/createReservas' element={<CreateReservas/>}/>
          <Route path='/misReservas' element={<MisReservas/>}/>
          <Route path='/createDate' element={<CreateDate/>}/>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;