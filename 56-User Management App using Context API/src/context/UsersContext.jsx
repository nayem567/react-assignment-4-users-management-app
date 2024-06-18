// === useContext ====
// 1. Create Context - createContext()
// 2. Provide Context
// 3. Use the Context

import React, { useState, createContext } from "react";

export const UsersContext = createContext({});

//

const UsersProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([
    { id: 1, name: "Nayem Islam" },
    { id: 2, name: "John Wick" },
  ]);

  return (
    <UsersContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;