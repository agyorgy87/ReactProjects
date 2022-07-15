import './Game.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import quizData from '../quizData.json';
import { ImHome } from "react-icons/im";
import goat from '../images/goat.jpg';
import hedgehog from '../images/hedgehog.jpg';
import horse from '../images/horse.jpg';
import lion from '../images/lion.jpg';
import penguin from '../images/penguin.jpg';
import shark from '../images/shark.jpg';
import spider from '../images/spider.jpg';
import turtle from '../images/turtle.jpg';


function Game() {

  let navigate = useNavigate();

  const [allQuizData, setAllQuizData] = useState(quizData)

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [result, setResult] = useState(false);

  const [scores, setScores] = useState(0);

  const [seconds, setSeconds] = useState(60);

  const [finalText, setFinalText] = useState("string")

  const [textColor,setTextColor] = useState('black');

  const [color1,setColor1 ]= useState('#e6e6e6');

  const [color2,setColor2 ]= useState('#e6e6e6');

  const [color3,setColor3 ]= useState('#e6e6e6');

  const [color4,setColor4 ]= useState('#e6e6e6');

  const [hoverDisabled, setHoverDisabled]= useState('visible');

  const picturesOfAnimals = [
    {image: shark},
    {image: turtle},
    {image: hedgehog},
    {image: horse},
    {image: lion},
    {image: goat},
    {image: spider},
    {image: penguin},
  ]

  useEffect (() => {
	let myTimeout;
		if(seconds > 0) {
			 myTimeout = setTimeout(() => setSeconds(seconds - 1), 1000);			
		}else{
			 navigate('/timeisup')
		}
	
		return () => {
			    clearTimeout(myTimeout);			
		}
  }, [seconds, navigate]);

  const handleAnswerButtonClick = (isCorrect, e) => {

	setSeconds(5);

	if(e.target.id === 'button1' && isCorrect === true){
		setColor1('green');
		setHoverDisabled('none')
	} else if(e.target.id === 'button1' && isCorrect === false){
		setColor1('red');
		setHoverDisabled('none')
	} else if(e.target.id === 'button2' && isCorrect === true){
		setColor2('green');
		setHoverDisabled('none')
	} else if(e.target.id === "button2" && isCorrect === false){
		setColor2("red");
		setHoverDisabled('none')
	} else if(e.target.id === "button3" && isCorrect === true){
		setColor3("green");
		setHoverDisabled('none')
	} else if(e.target.id === "button3" && isCorrect === false){
		setColor3("red");
		setHoverDisabled('none')
	} else if(e.target.id === "button4" && isCorrect === true){
		setColor4("green");
		setHoverDisabled('none')
	} else if(e.target.id === "button4" && isCorrect === false){
		setColor4("red");
		setHoverDisabled('none')
	}

	resultPage();

    setTimeout(() => {
        if(isCorrect) {
            setScores(scores + 1)
            setSeconds(60);
			setHoverDisabled('visible');
        }else{
            setSeconds(60);
			setHoverDisabled('visible');
        }
          
        const nextQuestion = currentQuestion + 1;
          
        if(nextQuestion < allQuizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setResult(true);		
        }
        setColor1("#e6e6e6");
        setColor2("#e6e6e6");
        setColor3("#e6e6e6");
		setColor4("#e6e6e6");	
        }, 5000);
  }

  const resultPage = () => {
	if(scores === 0) {
		setFinalText("0 pontot értél el :( Próbáld meg újra!")
	} else if(scores > 0 && scores < 4) {
		setFinalText("Nem rossz, de próbáld meg újra :)")
	} else if(scores > 4 && scores < 6) {
		setFinalText("Gratulálok! Ez szép volt :)")
	} else if(scores > 6) {
		setFinalText("Lenyűgöző! te tényleg mindent tudsz az állatokról!")
	}
  }


  return (
      <div className='app'>
			    {result ? (
			        <div className='scoreBox'>
				          <div className="finalText1">{finalText}</div>
					            <div className="finalText2">{allQuizData.length}-ból {scores} Pontszámot értél el.</div>
				          <div className="backBox">
					            <button className="backToMainMenuButton" onClick={()=> navigate("/")}>VISSZA A FŐMENÜBE<ImHome className="MainMenuHouse"/></button>
				          </div>
			        </div>		 
			    ) : (
				      <div>
					        <div className='questionCountAndCounterBox'>
						          <div className="questionCountBox">
							            <span> {currentQuestion + 1}</span>/{allQuizData.length}
						          </div>
					 	          <div className="questionCounterBox">
							            {seconds}
						          </div>
					        </div>
					        <div>
						          <img className="Images" src={picturesOfAnimals[currentQuestion].image} alt="QuizImage" />
					        </div>
					        <div className="questionTextBox">
						          <div className='onlyQuestionText'>{allQuizData[currentQuestion].questionText}</div>
					        </div>
					        <div className="answerBox">
                      			  <button id="button1" className="allButtons" style={{background:color1,color:textColor,pointerEvents:hoverDisabled}} onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[0].isCorrect, e)}>{allQuizData[currentQuestion].answerOptions[0].answerText}</button>	
						          <button id="button2" className="allButtons" style={{background:color2,color:textColor,pointerEvents:hoverDisabled}} onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[1].isCorrect, e)}>{allQuizData[currentQuestion].answerOptions[1].answerText}</button>
						          <button id="button3" className="allButtons" style={{background:color3,color:textColor,pointerEvents:hoverDisabled}} onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[2].isCorrect, e)}>{allQuizData[currentQuestion].answerOptions[2].answerText}</button>
						          <button id="button4" className="allButtons" style={{background:color4,color:textColor,pointerEvents:hoverDisabled}} onClick={(e) => handleAnswerButtonClick(allQuizData[currentQuestion].answerOptions[3].isCorrect, e)}>{allQuizData[currentQuestion].answerOptions[3].answerText}</button>
					        </div>						   
				      </div>
			    )}	
		</div>
    )    
}
export default Game;
