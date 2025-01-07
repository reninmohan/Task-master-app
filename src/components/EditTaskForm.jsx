import { useState } from "react";
import CustomModal from "./CustomModal";
import { format, parse } from "date-fns";
function EditTaskForm({ onUpdateTask, modalid, task, onToggleEditModal }) {
  const formattedDate = task.date.split("-").reverse().join("-");
  const formattedTime = format(parse(task.time, "hh:mm a", new Date()), "HH:mm");
  const [editTask, setEditTask] = useState({
    id: task.id,
    completed: task.completed,
    title: task.title,
    description: task.description,
    time: formattedTime,
    date: formattedDate,
  });

  const formatTime = (time) => {
    const parsedTime = parse(time, "HH:mm", new Date());
    return format(parsedTime, "hh:mm a");
  };

  function handleForm(e) {
    e.preventDefault();
    const newTask = {
      ...editTask,
      time: formatTime(editTask.time),
      date: format(editTask.date, "dd-MM-yyyy"),
    };
    onUpdateTask(newTask);
    onToggleEditModal();
  }

  function handleChange(e) {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  }

  return (
    <CustomModal Modalheader="Edit Task" modalid={modalid} onToggleEditModal={onToggleEditModal}>
      <form onSubmit={handleForm} id={modalid}>
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label fw-semibold">
            Title Task
          </label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            placeholder="Add Task Name..."
            value={editTask.title}
            onChange={handleChange}
            required
            name="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="taskdescription" className="form-label fw-semibold">
            Description
          </label>
          <textarea
            className="form-control"
            id="taskdescription"
            rows="3"
            placeholder="Add Description..."
            value={editTask.description}
            onChange={handleChange}
            required
            name="description"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="date-picker" className="form-label fw-semibold">
            Select a Date:
          </label>

          <input
            id="date-picker"
            type="date"
            className="form-control"
            placeholder="dd-mm-yyyy"
            required
            value={editTask.date}
            onChange={handleChange}
            name="date"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time-picker" className="form-label fw-semibold">
            Select a Time:
          </label>
          <input
            id="time-picker"
            type="time"
            className="form-control"
            required
            value={editTask.time}
            onChange={handleChange}
            name="time"
          />
        </div>
        <div className="d-flex justify-content-end align-content-center p-3 border-top gap-2">
          <hr />
          <button type="button" className="btn btn-secondary" onClick={onToggleEditModal}>
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </CustomModal>
  );
}

export default EditTaskForm;
