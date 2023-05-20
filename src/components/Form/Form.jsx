import "./index.css";

const Form = ({ handleChange, value, handleSubmit }) => {
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
          />
        </label>
        <button>Add Task</button>
      </form>
    </div>
  );
};
export default Form;
