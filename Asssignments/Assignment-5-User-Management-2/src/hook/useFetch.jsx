import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  // Task 1: complete this custom hook ✅
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states

  // step1: create 3 states: data, isLoading, error ✅
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // step2: fetch data & handle error ✅

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("fetching is not successful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        isLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.messagge);
        setIsLoading(false);
      });
      
  }, [url]);

  // step3: return 3 states ✅
  return { data, isLoading, error };
};

export default useFetch;
