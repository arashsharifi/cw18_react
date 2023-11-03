import { PropTypes } from "prop-types";
function TaskCard({ task }) {
  return (
    <div className="flex w-full gap-2  ">
      <h2 className="bg-white p-1 flex-1 flex items-center">{task.title}</h2>
      <button className="bg-green-700 text-white p-2">
        <i className="bi bi-check-lg"></i>
      </button>
      <button className="bg-red-700 text-white p-2">
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
