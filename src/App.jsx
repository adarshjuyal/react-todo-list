import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import TodoItem from "./components/TodoItem";
import './App.css';
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  // const Items = [
  //   { name: "buy milk", dueDate: "12/12/23", },
  //   { name: "Go class", dueDate: "11/12/23", },
  //   { name: "do Dsa", dueDate: "14/12/23", },
  // ];
  const [todoItems,setItems]=useState([]);
   
  const handleNewItem=(itemName,itemDueDate)=>{
    
    const newTodoItems=[...todoItems,{name: itemName, dueDate:itemDueDate}];
    setItems(newTodoItems);
  }
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item => item.name!== todoItemName);
    setItems(newTodoItems);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo  handleNewItem={handleNewItem}/>
      {todoItems.length===0  && <Welcome />}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    </center>
  );
}

export default App;
