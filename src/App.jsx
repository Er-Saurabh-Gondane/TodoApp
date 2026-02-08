import React from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import ToDoItem from './components/ToDoItem'

const App = () => {
  return (
    <div className='bg-stone-900 h-screen'>
        <Header/>
        <ToDoList/>
    </div>
  )
}

export default App