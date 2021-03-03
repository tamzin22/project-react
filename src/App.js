import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Welcome from './components/Button'
import Tasks from './components/Tasks'
import { useState } from 'react'


const  App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id   : 1,
            text : 'Doctors appointment',
            day  : 'Feb 5th at 2:30pm',
            remainder : true,
        },
    
        {
            id   : 2,
            text : 'Meeting at School',
            day  : 'Feb 6th at 1:30pm',
            remainder : true,
        },
    
        {
            id   : 3,
            text : 'Food Shopping',
            day  : 'Feb 5th at 2:30pm',
            remainder : false,
        }
    ]
)


//Delete task

const deleteTask = (id) => {

  setTasks(tasks.filter((task) => task.id !== id))
}
  
  return (
    <div className="container">

      <Header/>
      <Tasks  tasks={tasks} onDelete = {deleteTask}/>

    </div>
  );
}


export default App;
