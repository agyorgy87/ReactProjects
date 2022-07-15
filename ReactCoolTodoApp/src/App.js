import './App.scss';
import React, {useState} from 'react';
import { BsX, BsCheck, BsPlus, BsFillTrashFill} from "react-icons/bs";

function App() {

  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  } 
 
  const AddTodo= () => {
    if(inputValue !== "") {
      const todo = {
        id: Math.floor(Math.random()*1000),
        value: inputValue,
        isCompleted: false,
    } 
          
    setTodoList([...todoList, todo]);
    setInputValue('');
    }else{
      alert("Please enter something")
    }     
  };

  const deleteTodo = (e, id) => {
    e.preventDefault();
    setTodoList(todoList.filter(t => t.id !== id));
  };

  const deleteAll = (e) => {
    e.preventDefault();
    setTodoList([]);
  }

  const todoCompleted = (e, id) => {
      e.preventDefault();
      const elementIndex = todoList.findIndex(elem => elem.id === id);
      const newTodoList = [...todoList];
      const ElementToComplete = newTodoList[elementIndex];
      console.log(ElementToComplete);
      ElementToComplete.isCompleted = true
      newTodoList[elementIndex] = ElementToComplete;
      setTodoList(newTodoList);
  }

  return (
      <div className="App">
        <p style={{fontFamily: 'Georama'}}>My Cool TO-DO List</p>
          <input 
          style={{fontFamily: 'Georama'}}
          className="form-group"
          type="text"
          name="text"
          id="text"
          placeholder="what do you want to do?"
          onChange={(e) => handleChange(e)} 
          value={inputValue}
          autoFocus
          />
          <button
          className="AddButton ml-2"
          onClick={AddTodo}
          ><BsPlus/>
          </button>
          <br/>
           {todoList !== [] ? (
           <ul>
            {todoList.map((t) => ( 
              <li style={{fontFamily: 'Georama'}} className={t.isCompleted ? "crossText mb-2" : "listitem mb-2"}>{t.value}
                <button className="CompletedButton ml-2 mr-2" onClick={(e) => todoCompleted(e, t.id)}><BsCheck/></button>
                <button className="DeleteButton" onClick={(e) => deleteTodo(e, t.id)}><BsX/></button>
              </li>  
            ))}
          </ul>   
          ) : null } 
            <button className="deleteAll" onClick={deleteAll}><BsFillTrashFill/></button>
      </div>
  );
}

export default App;

