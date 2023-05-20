import "./index.css";

const Task = ({ id, taskName, completed, checkTask, removeTask }) => {
  return (
    <div className="task">
      <p className={completed ? "task--taskName completed" : "task--taskName"}>
        {taskName}
      </p>
      <button className="task--button" onClick={() => checkTask(id)}>
        {completed ? "Undo" : "Complete Task"}
      </button>
      <span>
        <button className="task--button" onClick={() => removeTask(id)}>
          Remove
        </button>
      </span>
    </div>
  );
};
export default Task;
