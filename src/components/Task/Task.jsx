import "./index.css";

const Task = ({ id, taskName, completed, checkTask, removeTask }) => {
  return (
    <div className="task">
      <div className="inline">
        <p
          className={completed ? "task--taskName completed" : "task--taskName"}
        >
          {taskName}
        </p>
        {completed && <span className="task--check">✅</span>}
      </div>
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
