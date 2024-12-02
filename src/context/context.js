import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const PedidosContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const PedidosProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState(null);

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos }}>
      {children}
    </PedidosContext.Provider>
  );
};