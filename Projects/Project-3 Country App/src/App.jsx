import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import "./App.module.css";

// 9th June, 2024 
// 10th June, 2024

const App = () => {
  // const url =
  //   "https://countryapi.io/api/all?apikey=Kj3ip2kN3QvRxzdkFXJOlolvqWXyIBigJaDbQ73X";

  const url = "https://countryapi.io/api/all?apikey=Kj3ip2kN3QvRxzdkFXJOlolvqWXyIBigJaDbQ73X";

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      const countriesArray = Object.values(data);
      setCountries(countriesArray);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) =>{
    alert(`Removing ${name};`);
  }

  return (
    <main>
      <h1>Country App</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {countries && <Countries countries={countries} onRemoveCountry={handleRemoveCountry} />}
    </main>
  );
};

export default App;
