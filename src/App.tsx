import React from 'react';
import './App.css';
import Input from './components/Input';

const App:React.FC = () => {
  return (
    <div className='App'>
      <span className="heading" >Taskify</span>
      <Input/>
    </div>
  )
}

export default App