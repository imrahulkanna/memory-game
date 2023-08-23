import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Select() {
  const [value, setValue] = useState(6);
  // localStorage.setItem("size", value);

  useEffect(() => {
    localStorage.setItem('size',value);
    console.log(value);
  }, [value])

  function handleClick(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <div>
        <h2 style={{ display: "inline-block" }}>
          Select number of card pairs: &nbsp;
        </h2>
        <select
          name="number"
          id="number"
          defaultValue={value}
          className="dropDown"
          onClick={handleClick}
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>
      <Link to="/game" state={{ size: value }}>
        <button className="startButton playButton">Start</button>
      </Link>
    </>
  );
}

export default Select;