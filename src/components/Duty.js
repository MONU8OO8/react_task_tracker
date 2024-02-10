// Duty.js
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Duty = ({ duty, deleteTask, toggleDone }) => {
  const [isChecked, setIsChecked] = useState(duty.isDone);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleDone(duty.id);
  };

  return (
    <div
      className={`task ${isChecked ? "done" : "notdone"}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("taskId", duty.id);
      }}
    >
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h3>{duty.text}</h3>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <p>{duty.day}</p>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(duty.id)}
        />
      </div>
    </div>
  );
};

export default Duty;

