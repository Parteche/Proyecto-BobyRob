import React from "react";
import './App.css';
import Producto1 from "./Components/Producto1";
import Producto2 from "./Components/Producto2";
import Producto3 from "./Components/Producto3";
import navBar from "./Components/navBar";


function App() {
  return (
    <div className="App">
      <Producto1 />
      <Producto2 />
      <Producto3 />
      <navBar />
    </div>
  );
}


export default App;
