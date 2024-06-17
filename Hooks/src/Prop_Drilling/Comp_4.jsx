import React from "react"
import { useContext } from "react"
import { UserContext } from "./UserContext"

const Comp_4 = () => {

    const {user, text} = useContext(UserContext);
    console.log(user);
    console.log(text);
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.id}</p>
        <p>{text}</p>
    </div>
  )
}

export default Comp_4