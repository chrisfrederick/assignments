import React from 'react'
import Header from './components/Header' 
import Todo from './components/Todo' 
import List from './components/List' 

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
      <List></List>
    </div>
  );
}

export default App;
