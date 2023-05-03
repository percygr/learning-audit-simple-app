import { useState } from "react";
import "./style.css";
import { act } from "react-dom/test-utils";

function List({ names }) {
  // changed the state name just to stop me being confused with the object key isHappy
  const [happiness, setHappiness] = useState(names); // pass in the names array as the initial state

  function handleClick(name) {
    name.isHappy = !name.isHappy; // toggle the isHappy boolean
    act(() => {
      setHappiness([...happiness]); // the spread operator returns a new array so the state knows it needs to update
    });
  }

  return (
    <div>
      {/* map through the state array */}
      {happiness.map((name) => (
        <div className="border-me" key={name.id}>
          <div className="person-div">
            <div
              {...(name.isHappy
                ? { style: { color: "#eeee00" } }
                : { style: { color: "#cc0000" } })}
            >
              {name.name + " " + (name.isHappy ? "is happy" : "is not happy")}
            </div>
          </div>
          <button data-testid={name.name} onClick={() => handleClick(name)}>
            Toggle happiness of {name.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
