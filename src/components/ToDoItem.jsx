import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icom from "../assets/delete.png";

function ToDoItem({text,deleteTodo,id}) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 cursor-pointer items-center ">
        <div className="w-6 h-6 rounded-full bg-transparent flex items-center justify-center border border-green-700">
            <i className="fa-solid fa-check text-green-500 m-3 "></i>
        </div>
        
        <p className="text-slate-700 text-xl ml-4">
            {text}
        </p>
      </div>
      <i className="fa-solid fa-trash text-red-600 cursor-pointer" onClick={()=>deleteTodo(id)}></i>
    </div>
  );
}

export default ToDoItem;
