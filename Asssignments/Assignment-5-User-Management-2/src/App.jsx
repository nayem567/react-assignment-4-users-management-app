import React, { useEffect, useState } from "react";

import "./App.css";
import Search from "./components/Search";
import Users from "./components/Users";
import useFetch from "./hook/useFetch";

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  // Task 2: use custom hook ✅
  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [usersCopy, setUsersCopy] = useState([]);

  useEffect(() => {
    if (data) {
      setUsersCopy(data);
    }
  }, [data]);

  // Task 3: delete user ✅
  // get the id from User.js ✅
  const handleDeleteUser = (id) => {
    setUsersCopy((filteredUsers) =>
      filteredUsers.filter((user) => user.id !== id)
    );
  };

  // Task 4: search user ✅
  // get the text from Search.js
  const handleSearch = (searchText) => {
    if (data) {
      const filteredUsers = data.filter((user) => 
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setUsersCopy(filteredUsers);
    }
  };

  

  const users = () => {};

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {usersCopy.length > 0 && (
        <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />
      )}
    </div>
  );
};

export default App;
