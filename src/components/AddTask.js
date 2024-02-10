import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import the format function from date-fns

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    // Format the date before passing it to addTask
    const formattedDate = format(day, "MMMM d, yyyy HH:mm");
    addTask({ text, day: formattedDate, isDone: false });
    setText("");
    setDay(new Date());
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="Add Task"
          required
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <DatePicker
          id="day"
          selected={day}
          onChange={(date) => setDay(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          className="date-picker"
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
