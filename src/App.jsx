import { useRef, useState } from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import List from './Components/List';
import Footer from './Components/Footer';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showError,setShowError] = useState(false);
  const inputRef = useRef(null);

  const handleOnClick = () => {
    inputRef.current.value = ""
    inputRef.current.focus();
    let task;
    task = newTask ?
    {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1]["id"] + 1,
      name: newTask
    }:undefined;
    setNewTask("");
    if(task){
      setShowError(false)
      setToDoList([...toDoList, task]);
    }
    else
      setShowError(true)
  }

  const handleOnChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleOnDelete = (id) => {
    const newToDoList = toDoList.filter((task) => task.id !== id)
    setToDoList(newToDoList);
  }
  return (
    <div className='main-container'>
     <Header showError={showError} handleOnChange={handleOnChange} handleOnClick={handleOnClick} inputRef={inputRef}/>
      <List toDoList={toDoList} handleOnDelete={handleOnDelete}/>
      <Footer />
    </div>
  );
}

export default App;
