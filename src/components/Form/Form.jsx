/* eslint-disable react/display-name */
import "./index.css";

const Form = ({ handleChange, value, handleSubmit }, ref) => {
  return (
    <div className="form">
      <form className="form--form" onSubmit={handleSubmit}>
        <label>
          Enter a task
          <input
            type="text"
            className="form--input"
            value={value}
            onChange={handleChange}
            ref={ref}
          />
        </label>
        <button>Add Task</button>
      </form>
    </div>
  );
};
export default Form;
