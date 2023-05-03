import React from "react";
import List from "./components/List";
import "./App.css";

function App() {
  // make an array of fake names and isHappy boolean
  const names = [
    { name: "John", isHappy: true, id: "1" },
    { name: "Jane", isHappy: false, id: "2" },
    { name: "Joe", isHappy: true, id: "3" },
    { name: "Jill", isHappy: false, id: "4" },
  ];

  return (
    <div className="App">
      <List names={names} />
    </div>
  );
}

export default App;
