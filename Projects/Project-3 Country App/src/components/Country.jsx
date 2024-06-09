import React from "react";
import "./country.module.css";


const Country = (props) => {
  const { name, capital, population, region, flag } = props.country;

  const handleRemoveButton = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article>
      <img src={flag.large} alt={name} />
      <h3>Country : {name}</h3>
      <p>Capital : {capital}</p>
      <p>Population : {population}</p>
      <p>Region : {region}</p>
      <button
        onClick={() => {
          handleRemoveButton(name);
        }}
      >
        Remove Country
      </button>
    </article>
  );
};

export default Country;
