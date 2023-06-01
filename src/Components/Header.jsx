import React from 'react'
import Error from './Error'
function Header({handleOnChange,handleOnClick,inputRef,showError}) {
  return (
    <div className="header">
    <h1 className='header-text'>To Do List</h1>
    <div className='task'>
      <input type='text' className='input-task' onChange={handleOnChange} ref={inputRef} />
      <button className='add-task' onClick={handleOnClick} >Add Task</button>
    </div>
      {showError && <Error/>}
  </div>
  )
}

export default Header