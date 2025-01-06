import Modal from "./Modal";
function EditTaskForm({ onUpdateTask, modalid, task }) {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <Modal Modalheader="Edit Task" action="Edit" onAction={onUpdateTask} modalid={modalid}>
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
            // onChange={handleTimeChange}
            required
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            // onClick={clearAll}
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditTaskForm;
