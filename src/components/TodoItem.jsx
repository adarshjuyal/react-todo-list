import { TiDelete } from "react-icons/ti";
export default function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row nrow">
        <div className="col-6">{todoName} </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            <TiDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
