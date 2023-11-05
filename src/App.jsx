import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input/input";
import Select from "./components/select/select";
import TaskCard from "./components/TaskCard/TaskCard";

const existingTasks = JSON.parse(localStorage.getItem("tasks"));
function App() {
  const [tasks, setTasks] = useState(existingTasks ?? []);

  const [category, setCategory] = useState("done");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      done: false,
      id: Date.now(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleSelect = (value) => {
    setCategory(value);
  };

  /* const filteredTasks = () => {
    if (category !== "all") {
      return tasks.filter((t) => (category === "done" ? t.done : !t.done));
    } else return tasks;
  };*/

  const filteredTasks =
    category !== "all"
      ? tasks.filter((t) => (category === "done" ? t.done : !t.done))
      : tasks;

  return (
    <>
      <div className=" w-96 mx-auto  bg-blue-400 h-screen">
        <div className="flex gap-2 mt-10 p-4 ">
          <Input onAddTask={handleAddTask} />
          <Select onSelect={handleSelect} value={category} />
        </div>

        <div className=" flex flex-col gap-5 w-full p-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
