import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from 'react-icons/ri' 
import { complete, deleteTask } from "../redux/actions";
import EditTask from "./EditTast";

const TaskItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div className={todo.isDone ? "done" : null}>{todo.task}</div>
      <div>
        <button onClick={() => dispatch(complete(todo.id))}>
          {todo.isDone ? "Not Done" : "Done"}
        </button>
        <EditTask todo={todo}/>
       
        <RiDeleteBin6Line onClick={() => dispatch(deleteTask(todo.id))}  style={{width:40 , height:40}}/>
      </div>
    </div>
  );
};

export default TaskItem;
