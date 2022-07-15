import React from 'react';
import './TimeIsUp.css';
import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";

function Home() {

    let navigate = useNavigate();

  return (
      <div className="timeIsUpBox">
          <h1 className="endText">Lejárt az időd!</h1>
              <div className="buttonBox">
                  <button 
                    className="backToMain" 
                    onClick={()=> navigate("/")}>
                      VISSZA A FŐMENÜBE
                        <ImHome className="houseIcon"/>
                  </button>
              </div>
      </div>
  )
}

export default Home;