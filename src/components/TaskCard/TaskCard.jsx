import { PropTypes } from "prop-types";

function TaskCard({ task, onDelete, onEdit }) {
  return (
    <div className="flex w-full gap-2  ">
      <h2
        className={`bg-white p-1 flex-1 flex items-center ${
          task.done ? "line-through" : ""
        }`}
      >
        {task.title}
      </h2>
      <button
        onClick={() => onEdit(task.id)}
        className={`${
          task.done ? "bg-green-500" : "bg-green-900"
        } text-white p-2`}
      >
        <i className="bi bi-check-lg"></i>
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-700 text-white p-2"
      >
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
