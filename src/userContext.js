import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

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

export const UserProvider = ({ children }) => {
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
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

