import React from 'react';
import classes from './App.css';
import {Route, Router, BrowserRouter} from "react-router-dom";
import HeroesContainer from './components/Heroes/HeroesContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="mainWrapper">
          <HeroesContainer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
