// 8th June, 2024
// React Asssignment 4 = User Management using useEffect and Axios
// Mohaymenul Islam

import React, { useState, useEffect } from 'react';

import Users from './components/Users';
import axios from 'axios';

const App = () => {
  // step1 : declare three states here : users, isLoading, error

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  // https://jsonplaceholder.typicode.com/users

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    userData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading Users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      {!isLoading && !error && <Users users={users} />}
    </div>
  );
};

export default App;
