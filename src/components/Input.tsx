import React, { useRef } from 'react'
import './styles.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSumbit: (e: React.FormEvent) => void;
}

const Input = ({ todo, setTodo, handleSumbit }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleSumbit(e);
      inputRef.current?.blur();
    }}>
      <input type='input'
        ref={inputRef}
        value={todo}
        placeholder='Enter a task'
        className="input__box"
        onChange={(e) => setTodo(e.target.value)} />
      <button type='submit' className='input_submit' >Go</button>
    </form>
  )
}

export default Input