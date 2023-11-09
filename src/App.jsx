import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import Input from "./components/input/input";
import Select from "./components/select/select";
import TasksContainer from "./components/taskCards/TasksContainer";

const existingTasks = JSON.parse(localStorage.getItem("tasks"));

export const TasksContext = createContext();

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "EDIT_TASK":
      return state.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );
    case "DELETE_TASK":
      state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
};

function App() {
  // const [tasks, setTasks] = useState(existingTasks ?? []);

  const [state, dispatch] = useReducer(taskReducer, existingTasks ?? []);

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
    // setTasks((prevTasks) => [...prevTasks, newTask]);
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const handleDelete = (id) => {
    // setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleEdit = (id) => {
    // setTasks((prevTasks) =>
    //   prevTasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    // );
    dispatch({ type: "EDIT_TASK", payload: id });
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
    <TasksContext.Provider value={{ filteredTasks, handleEdit, handleDelete }}>
      <div className=" w-96 mx-auto  bg-blue-400 h-screen">
        <div className="flex gap-2 mt-10 p-4 ">
          <Input onAddTask={handleAddTask} />
          <Select onSelect={handleSelect} value={category} />
        </div>

        <TasksContainer />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
