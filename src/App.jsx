import React from "react";
import './App.css'
import Card from "./component/cards";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 >Product List</h1>
      <Card />
    </div>
  );
};

export default App;
