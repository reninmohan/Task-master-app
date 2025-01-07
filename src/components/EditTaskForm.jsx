import CustomModal from "./CustomModal";
function EditTaskForm({ onUpdateTask, modalid, task, onToggleEditModal }) {
  console.log(task);
  const formattedDate = task.date.split("-").reverse().join("-");
  const [hours, minutes, period] = task.time.split(/[:\s]/); // Split the time into hours, minutes, and period (AM/PM)
  let hour24 = parseInt(hours);
  if (period === "PM" && hour24 !== 12) {
    hour24 += 12;
  } else if (period === "AM" && hour24 === 12) {
    hour24 = 0;
  }
  const formattedTime = `${hour24.toString().padStart(2, "0")}:${minutes}`;

  function handleForm(e) {
    e.preventDefault();
    // onUpdateTask();
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
            defaultValue={task.title}
            // onChange={(e) => setTitle(e.target.value)}
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
            defaultValue={task.description}
            // onChange={(e) => setDescription(e.target.value)}
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
            defaultValue={formattedDate}
            // onChange={(e) => setSelectedDate(e.target.value)}
            // min={minDate}
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
            defaultValue={formattedTime}
            // onChange={handleTimeChange}
            required
          />
        </div>
        <div className="d-flex justify-content-end align-content-center p-3 border-top gap-2">
          <hr />
          <button type="button" className="btn btn-secondary" onClick={onToggleEditModal}>
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </div>
      </form>
    </CustomModal>
  );
}

export default EditTaskForm;
