import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';
import ListBeer from './components/ListBeer';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';



function App() {



  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ListBeer />} />
      <Route path="/beer" element={<SingleBeer />} />
      <Route path="/random" element={<RandomBeer />} />
      <Route path="/new" element={<NewBeer />} />
    </Routes>
     
    </div>
  );
}

export default App;
