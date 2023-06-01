import React from 'react'

function List({toDoList,handleOnDelete}) {
  return (
    <div className="todolist">
    {toDoList.map((task) => {
      return <div className='to-do-list-item' key={task.id}>{task.name} <button onClick={() => handleOnDelete(task.id)}>❌</button></div>
    })}
  </div>
  )
}

export default List