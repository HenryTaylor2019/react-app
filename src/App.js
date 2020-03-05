import React from 'react';
import Stuff from './Stuff.js';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// This renders the components passed in on in Stuff.js
  const App = () => (

    <Stuff square={true}/>

  );

export default App;
