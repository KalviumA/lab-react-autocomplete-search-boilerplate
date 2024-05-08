import data from "./resources/countryData.json";
import "./App.css";
import { useState } from "react";

function App() {
  // console.log(data);
  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (term) => {
    setvalue(term);
  };

  const handleDrop = (e) => {
    if (e.key === "Escape") {
      console.log(e.key);
      document.getElementById("dropdown").style.display = "none";
    } else {
      document.getElementById("dropdown").style.display = "inline";
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Search here"
          onChange={handleChange}
          onKeyDown={handleDrop}
        />
        <button onClick={() => handleSubmit(value)}>Submit</button>
      </div>

      <div id="dropdown">
        {data.filter((ele) => {
          const term = value.toLowerCase();
          const name = ele.name.toLowerCase();

          return (
            term && 
          name.startsWith(term) && 
          name !== term
        );

        }).slice(0,10)
        .map((item)=>(
          <div key={item.name} onClick={()=> handleSubmit(item.name)}>{item.name}</div>
        ))
        
        }
      </div>
    </>
  );
}

export default App;
