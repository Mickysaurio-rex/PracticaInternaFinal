import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './home.js';
import LogIn from './logIn.js';
import UserProfile from './profile/userProfile';
import PaginaPrueba from './PaginaPrueba';
import CreateReservas from './studentPages/reservas/createReservas.jsx';
import MisReservas from './studentPages/programarReserva/misReservas.js';
import CreateDate from './teacherpage/createDate.js';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/userprofile' element={<UserProfile/>} />
          <Route path='/pruebapagina' element={<PaginaPrueba/>}/>
          <Route path='/createReservas' element={<CreateReservas/>}/>
          <Route path='/misReservas' element={<MisReservas/>}/>
          <Route path='/createDate' element={<CreateDate/>}/>
      </Routes>
    </div>
  );
}

export default App;