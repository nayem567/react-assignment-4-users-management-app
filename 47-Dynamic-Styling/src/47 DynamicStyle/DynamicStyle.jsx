import React from "react";
import { useEffect, useState } from "react";

const DynamicStyle = () => {
  // const error = false;
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="DynamicStyle">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className={`${validInput ? "valid" : "invalid"}`}
      />
    </div>
  );
};

export default DynamicStyle;
