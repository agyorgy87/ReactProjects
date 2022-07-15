import React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
import { GiBrain } from "react-icons/gi";

function Home() {

    let navigate = useNavigate();

  return (
      <div className="mainPage">
          <h1 className="quizText">Állati Kvíz</h1>
              <div className="buttonBox">
                <button 
                className="startButton" 
                onClick={() => {navigate("/game");}}>
                  START
                    <GiBrain className="brainIcon"/>
                </button>
              </div>
      </div>
  )
}

export default Home;