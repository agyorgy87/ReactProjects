
import './Navigation.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import Game  from "./components/Game";
import TimeLeft from "./components/TimeLeft";
import ErrorPage from "./components/ErrorPage";
import YouWon from "./components/YouWon";
import YouLose from "./components/YouLose";


function Navigation() {
  return (
    <Router>
      {/*
      ha egy felső navbar kellene a főoldalnak
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/profile">PROFILE</Link>
      </nav>
      */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="timeleft" element={<TimeLeft />} />
          <Route path="won" element={<YouWon />} />
          <Route path="lose" element={<YouLose />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  );
}

export default App;
