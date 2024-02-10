// Tasks.js
import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleDone, onTaskDrop }) => {
  const handleDrop = (e, index) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    onTaskDrop(taskId, index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={task.id}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
        >
          <Duty
            duty={task}
            deleteTask={deleteTask}
            toggleDone={toggleDone}
          />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
