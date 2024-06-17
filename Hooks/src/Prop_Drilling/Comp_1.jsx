import React, { useState } from "react";
import Comp_2 from "./Comp_2";
import { UserContext } from "./UserContext";

const Comp_1 = () => {
  const [user, setUser] = useState({
    id: 101,
    name: "Mohaymenul Islam",
  });
  const [text, setText] = useState("Hello, I'm text");

  return (
    <div>
      <UserContext.Provider value={{user, text}}> 
        <Comp_2 user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default Comp_1;

// comp_1 -> comp_2 -> comp_3 -> comp_4
