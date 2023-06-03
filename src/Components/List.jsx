import React from 'react'

function List({toDoList,handleOnDelete,handleOnComplete}) {
  return (
    <div className="todolist">
    {toDoList.map((task) => {
      return <div className={task.isCompleted ? 'to-do-list-item strike-through':'to-do-list-item'} key={task.id}>{task.name} <span><button onClick={()=>handleOnComplete(task.id)} className={task.isCompleted ? "button completed-task":'button'}>✅</button><button onClick={() => handleOnDelete(task.id)} className='button'>❌</button></span></div>
    })}
  </div>
  )
}

export default List