import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function AddTodo({handleNewItem}){

  const todoNameElement= useRef();
  const todoDueDateElement=useRef();

 
  const handleAddButtonClicked=(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const todoDate=todoDueDateElement.current.value;
    todoNameElement.current.value="";
    todoDueDateElement.current.value="";
    handleNewItem(todoName,todoDate);
   
  }
    return (
      <div className="container text-center">
        <form className="row nrow" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              
              placeholder="Enter Todo here"
             
            />
          </div>
          <div className="col-4">
            <input type="date"  ref={todoDueDateElement} />
          </div>
          <div className="col-2">
            <button  className="btn btn-success my-btn">
              <IoIosAddCircle />
            </button>
          </div>
        </form>
      </div>
    );
}