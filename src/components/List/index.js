import { useState } from "react";
import "./style.css";

function List({ names }) {
  console.log("re-rendered");
  const [isHappy, setIsHappy] = useState();

  function handleClick(person) {
    console.log(person.isHappy, person.name);
    person.isHappy = !person.isHappy;
    setIsHappy(person.isHappy);
  }

  return (
    <div>
      {names.map((name) => (
        <div className="border-me" key={Math.random()}>
          <div className="person-div">
            <div>{name.name}</div>
            {"   "}
            <div
              {...(name.isHappy
                ? { style: { color: "#eeee00" } }
                : { style: { color: "#cc0000" } })}
            >
              {name.isHappy ? "is happy" : "is not happy"}
            </div>
          </div>

          <button id={name.name} onClick={() => handleClick(name)}>
            Toggle happiness
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
