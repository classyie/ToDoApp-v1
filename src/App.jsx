// import React from 'react';
import TodoAdd from './Components/TodoAdd';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoItems from './Components/TodoItems';
function App() {
  const todoItems = [
    {
      name:"Buy Milk",
      dueDate:"09/07/2024"
    },
    {
      name:"Prepare Oats",
      dueDate:"09/07/2024"
    },
    {
      name:"Eat A lot",
      dueDate:"09/07/2024"
    }
  ]
  return (
      <div className="container text-center ">
        <h1>ToDo App</h1>
        <div className="todoContent">
          <TodoAdd />
          <TodoItems items = {todoItems}/>
        </div>
      </div>
  )
}

export default App;
