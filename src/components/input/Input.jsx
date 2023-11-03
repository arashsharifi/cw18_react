import { useRef } from "react";
import { PropTypes } from "prop-types";

function Input({ onAddTask }) {
  const inputRef = useRef(null);

  function handleSubmit() {
    inputRef.current.value;
    if (inputRef.current.value) {
      onAddTask(inputRef.current.value);
    } else {
      inputRef.current.focus();
      inputRef.current.classList.add("invalid-input");
    }
  }

  return (
    <div className="flex justify-between  bg-white flex-1 p-2">
      <input
        className="outline-none border-none flex-1 "
        type="text"
        placeholder="addd..note"
        ref={inputRef}
      />
      <button onClick={handleSubmit} className="bg-red-600 text-white p-1">
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  );
}

Input.propTypes = {
  onAddTask: PropTypes.func,
};

export default Input;
