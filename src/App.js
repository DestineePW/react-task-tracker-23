import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from "react";


const App = () => {
  const [tasks, setTasks] = useState([{
    id:1,
    text: 'Work Meeting',
    day: 'April 7th',
    reminder: false,
  },
  {
    id:2,
    text: 'Lunch Date',
    day: 'April 7th',
    reminder: false,
  },
  {
    id:3,
    text: 'Roller Skating',
    day: 'April 7th',
    reminder: false,
  }])

  return (
    <div className="container">
    <Header/>
    <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
