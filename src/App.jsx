import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input/input";
import Select from "./components/select/select";
import TaskCard from "./components/TaskCard/TaskCard";

const existingTasks = JSON.parse(localStorage.getItem("tasks"));
function App() {
  const [tasks, setTasks] = useState(existingTasks ?? []);
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleAddTask = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      id: Date.now(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
      <div className=" w-96 mx-auto  bg-blue-400 h-screen">
        <div className="flex gap-2 mt-10 p-4 ">
          <Input onAddTask={handleAddTask} />
          <Select />
        </div>

        <div className=" flex flex-col gap-5 w-full p-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
