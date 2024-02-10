// App.js
import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [showAddTask, setShowAddTask] = useState(false);
  const [showCheckedTasks, setShowCheckedTasks] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const toggleShow = () => setShowAddTask(!showAddTask);

  const deleteAllTasks = () => setTasks([]);

  const handleTaskDrop = (taskId) => {
    const draggedTask = tasks.find((task) => task.id.toString() === taskId);
    const updatedTasks = tasks.filter((task) => task.id.toString() !== taskId);
    const dropIndex = tasks.length;
    setTasks([
      ...updatedTasks.slice(0, dropIndex),
      draggedTask,
      ...updatedTasks.slice(dropIndex),
    ]);
  };

  const handleFilterChecked = () => {
    setShowCheckedTasks(true);
  };

  const handleFilterUnchecked = () => {
    setShowCheckedTasks(false);
  };

  const handleShowAllTasks = () => {
    setShowCheckedTasks(null);
  };

  let filteredTasks = tasks;
  if (showCheckedTasks !== null) {
    filteredTasks = showCheckedTasks
      ? tasks.filter(task => task.isDone)
      : tasks.filter(task => !task.isDone);
  }

  return (
    <div className="container">
      <Header
        title="REACT TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {filteredTasks.length > 0 ? (
        <Tasks
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
          onTaskDrop={handleTaskDrop}
        />
      ) : (
        <h2 style={{ textAlign: "center", color: "white" }}>NO TASK TO SHOW</h2>
      )}
      <div className="deleteAll">
        <button className="btn" onClick={handleFilterChecked}>Completed</button>
        <button className="btn" onClick={handleFilterUnchecked}>Pending</button>
        <button className="btn" onClick={handleShowAllTasks}>All Tasks</button>
        <button className="btn" onClick={deleteAllTasks}>Delete All</button>
      </div>
    </div>
  );
}

export default App;
