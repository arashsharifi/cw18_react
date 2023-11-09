import { useContext } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { TasksContext } from "../../App";

const TasksContainer = () => {
  const { filteredTasks, handleDelete, handleEdit } = useContext(TasksContext);
  return (
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
  );
};

export default TasksContainer;
