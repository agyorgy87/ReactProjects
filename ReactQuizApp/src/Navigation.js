import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import './Navigation.css';
import Home from "./components/Home";
import Game from "./components/Game";
import TimeisUp from "./components/TimeIsUp";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="game" element={<Game />} />
            <Route path="timeisup" element={<TimeisUp />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
