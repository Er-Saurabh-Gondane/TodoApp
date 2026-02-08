import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import ToDoItem from './ToDoItem';


const ToDoList = () => {
  const [todoList,setToDoList] = useState([]);
  const inputRef = useRef();
  const addTask = ()=>{
      const task = inputRef.current.value.trim();
      if(task === ""){
        return null;
      }
      console.log(task)
      const newTodo = {
        id:Date.now(),
        text:task,
        isComplete:false
      }
      setToDoList((prev)=>[...prev,newTodo]);
      inputRef.current.value = "";
  }
  const deleteTodo = (id)=>{
      setToDoList((prevTodos)=>{
        return prevTodos.filter((todo)=>todo.id !== id)
      })
  }
  return (
      <div className="bg-white place-self-center w-11/12 max-w-md mt-20 flex flex-col p-7 min-h-145 rounded-xl ">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold ">To Do List</h1>
      </div>
      {/* add input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full ">
        <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your task" />
        <button className="border-none rounded-full bg-violet-600 text-white text-lg font-medium w-32 h-14 cursor-pointer" onClick={addTask}>ADD +</button>
      </div>

      {/* todo list */}
      <div>
        {
          todoList.map((item,index)=>(
            <ToDoItem key={index} text={item.text} id={item.id} deleteTodo={deleteTodo} isComplete={item.isComplete}/>
          ))
        }
      </div>
    </div>
  )
}

export default ToDoList