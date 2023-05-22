import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer/Footer";

function App() {
  // responsible for holding all of the tasks entered so far
  const [taskList, setTaskList] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  // saves tasks even after refresh
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  // represents a task object that we push to taskList
  const [task, setTask] = useState({
    id: "",
    taskName: "",
    completed: false,
  });

  // complete task function
  function checkTask(id) {
    setTaskList((prevTasks) => {
      return prevTasks.map((currTask) => {
        return currTask.id === id
          ? { ...currTask, completed: !currTask.completed }
          : currTask;
      });
    });
  }

  // remove task from list
  function removeTask(id) {
    const remainingTasks = taskList.filter((currTask) => currTask.id !== id);
    setTaskList(remainingTasks);
  }
  // renders our current taskComponents
  const renderedTasks = taskList.map((currTask) => {
    return (
      <ul key={currTask.id}>
        <li>
          <Task
            id={currTask.id}
            taskName={currTask.taskName}
            completed={currTask.completed}
            checkTask={checkTask}
            removeTask={removeTask}
          />
        </li>
      </ul>
    );
  });

  // dynamically updates our task state whenever we type in input
  function handleChange(e) {
    const value = e.target.value;
    setTask(() => ({
      taskName: value,
    }));
  }

  // adds our current task into our tasklist
  function handleSubmit(e) {
    e.preventDefault();

    if (task.taskName === "") {
      window.alert("Text field is empty!");
    } else {
      setTaskList((prev) => {
        return [
          ...prev,
          {
            id: uuidv4(),
            taskName: task.taskName,
            completed: false,
          },
        ];
      });
    }
  }

  return (
    <>
      <Header />
      <Form
        handleChange={handleChange}
        value={task.taskName}
        handleSubmit={handleSubmit}
      />
      {renderedTasks};
      <h3>
        You have{" "}
        {taskList.length > 0
          ? `${taskList.length} task(s) remaining!`
          : "no task"}
      </h3>
      <Footer />
    </>
  );
}

export default App;
