import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { Todo } from './modal';

const App:React.FC = () => {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
  console.log(todos)
  return (
    <div className='App'>
      <span className="heading" >Taskify</span>
      <Input todo={todo} setTodo={setTodo} handleSumbit={handleSubmit} />
    </div>
  )
}

export default App