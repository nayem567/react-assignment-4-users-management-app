
import React, { useState } from 'react'
import User from './User'

const Users = () => {

    const [userName, setUserName] = useState("Nayem");
    const [userId, setUserId] = useState(101);
    const [userObject, setUserObject] = useState({
        name: "Mohaymenul",
        id: 20130
    })

  return (
    <>
       <User userName={userName} userId={userId} userObject={userObject} />
    </>
  )
}

export default Users