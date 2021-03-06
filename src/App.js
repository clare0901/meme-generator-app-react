// import logo from './logo.svg';
// https://api.imgflip.com/get_memes

import React from "react";
import './App.css';
import MemeGenerator from "./components/MemeGenerator";
import Header from "./components/Header"

function App(){
  return(
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  )
}

export default App;
