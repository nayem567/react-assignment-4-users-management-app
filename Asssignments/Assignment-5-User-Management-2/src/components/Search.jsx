import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Search = ({ onHandleSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onHandleSearch(search);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search Country"
        value={search}
        onChange={handleChange}
        style={{padding:'1rem 2rem'}}
      />
    </div>
  );
};

Search.propTypes = {
  onHandleSearch: PropTypes.func,
};

export default Search;
