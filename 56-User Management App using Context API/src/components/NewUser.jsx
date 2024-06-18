import { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const NewUser = () => {
  const { setUserInfo} = useUsersContext();
  const [username, setUserName] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      name: username,
    };
    setUserInfo((prevUsers) => [...prevUsers, newUser]);
    setUserName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>User Registration</h3>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
