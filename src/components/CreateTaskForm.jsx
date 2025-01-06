import { useState } from "react";
import { format, parse } from "date-fns";
import Modal from "./Modal";

function CreateTaskForm({ onTaskAdd, modalid }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const minDate = new Date().toISOString().split("T")[0];
  console.log(minDate);

  const handleTimeChange = (e) => {
    const timeString = e.target.value;
    const time = parse(timeString, "HH:mm", new Date()); // Parse time into a Date object
    setSelectedTime(format(time, "hh:mm a")); // Format it as hh:mm AM/PM
  };

  function handleForm(e) {
    e.preventDefault();
    createTask();
    clearAll();
  }

  function clearAll() {
    setTitle("");
    setDescription("");
    setSelectedDate("");
  }

  function createTask() {
    const newTask = {
      id: Date.now(),
      title,
      description,
      date: format(selectedDate, "dd-MM-yyyy"),
      time: selectedTime,
      completed: false,
    };
    console.log(newTask);
    onTaskAdd(newTask);
  }

  return (
    <Modal Modalheader="Create Task" onClose={clearAll} action="Create" onAction={createTask} modalid={modalid}>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label fw-semibold">
            Title Task
          </label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            placeholder="Add Task Name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={30}
            required
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
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
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={minDate}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time-picker" className="form-label fw-semibold">
            Select a Time:
          </label>
          <input id="time-picker" type="time" className="form-control" onChange={handleTimeChange} required />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearAll}>
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default CreateTaskForm;
