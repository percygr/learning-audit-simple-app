import React from "react";
import List from "./components/List";
import "./App.css";

function App() {
  // make an array of fake names and isHappy boolean
  const names = [
    { name: "John", isHappy: true },
    { name: "Jane", isHappy: false },
    { name: "Joe", isHappy: true },
    { name: "Jill", isHappy: false },
  ];

  return (
    <div className="App">
      <List names={names} />
    </div>
  );
}

export default App;
