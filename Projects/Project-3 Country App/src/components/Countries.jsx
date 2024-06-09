import {v4 as uuidv4} from "uuid";
import Country from "./Country.jsx";
import "./countries.module.css";

const Countries = (props) => { 
  return (
    <section>
      {props.countries.map((country) => {
        const countrySingle = {...country, id:uuidv4()};
        return <Country key={countrySingle.id} country={countrySingle} handleRemove={props.handleRemoveCountry}/>
      })}
    </section>
  );
};

export default Countries;
