import React, { useState } from 'react'
import { Todo } from '../modal'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const OneTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)

    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }
    const handleEdit = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleSubmitEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo))
        setEdit(false)
    }
    return (
        <form className='todos__single' onSubmit={(e) => handleSubmitEdit(e, todo.id)} >

            {
                edit ? (
                    <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                ) : (
                    todo.isDone ? (
                        <s className='todos__single--text'>{todo.todo}</s>
                    ) : (
                        <span className='todos__single--text'>{todo.todo}</span>
                    )

                )
            }

            <div>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={() => handleEdit(todo.id)} >
                    <AiFillDelete />
                </span>
                <span className='icon' onClick={() => handleDone(todo.id)} >
                    <MdOutlineDone />
                </span>
            </div>
        </form>
    )
}

export default OneTodo