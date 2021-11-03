
import './App.css';
import React, {useState} from 'react'
import Todo from './Components/Todo'

function App() {
  const [newToDo, setNewToDo] = useState("")
  const [todos, setTodos] = useState([])



  const handleNewTodoSubmit =(e)=>{
    e.preventDefault();
    if(newToDo.length === 0){
      return
    }
    const todoitem = {
      text: newToDo,
      complete: false
    }
    console.log(newToDo)
    setTodos([...todos, todoitem])
    setNewToDo("")
  }

  const handleToDoDelete = (delIdx)=>{
    const filteredTodos = todos.filter((todo, i)=>{
      return i !== delIdx;
    });

    setTodos(filteredTodos)
  }

  const handleCheckToggle = (idx)=>{
    const updatedToDos = todos.map((todo, i)=>{
      if(idx === i){
        todo.complete = !todo.complete;
        // const updatedToDos = {...todo, complete: !todo.complete};
        // return updatedToDos;
      }
      return todo
    })
    setTodos(updatedToDos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e)=>{
          handleNewTodoSubmit(e)
        }}>
          <input onChange={(e)=>{setNewToDo(e.target.value)}} type="text" value={newToDo}></input>
          <div>
            <button>Add</button>
          </div>
        </form>

        <hr />

      {
        todos.map((todo, i)=>{
          return (<Todo key={i} todo={todo} 
            handleCheckToggle={handleCheckToggle} i={i} 
            handleToDoDelete={handleToDoDelete}/>)
        })}
      </header>
    </div>
  );
}

export default App;
