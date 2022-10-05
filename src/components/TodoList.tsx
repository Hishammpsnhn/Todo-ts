import React from 'react'
import { Todo } from '../modal'
import OneTodo from './OneTodo';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
        {todos.map((todo) =>(
            <>
            <OneTodo 
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            />
            </>
        ))}
    </div>
  )
}

export default TodoList