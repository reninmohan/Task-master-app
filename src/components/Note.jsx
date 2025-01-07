import { MdOutlineEditCalendar } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaClock } from "react-icons/fa";

function Note({ task, onUpdateTask, onDeleteTask, setCurrentTodo, onToggleEditModal }) {
  const handleToggleComplete = () => {
    onUpdateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header position-relative" id={`heading-${task.id}`}>
        <button
          type="button"
          className="btn  btn-md  position-absolute xs-editbtn "
          style={{ zIndex: "100", right: "6rem", top: "0.6rem", border: "1px solid #d9d9d9" }}
          onClick={() => {
            setCurrentTodo(task);
            onToggleEditModal();
          }}
        >
          <MdOutlineEditCalendar />
        </button>
        <button
          className="btn btn-md position-absolute xs-deletebtn"
          style={{ zIndex: "100", right: "3rem", top: "0.6rem", border: "1px solid #d9d9d9" }}
          onClick={() => onDeleteTask(task.id)}
        >
          <AiOutlineDelete />
        </button>

        <input
          type="checkbox"
          className="form-check-input position-absolute"
          checked={task.completed}
          onChange={handleToggleComplete}
          style={{ zIndex: "100", top: "0.9rem", left: "0.3rem" }}
        />
        <div
          className="position-absolute d-flex align-items-center gap-2 xs-time"
          style={{ zIndex: "100", top: "1rem", right: "9.5rem" }}
        >
          <FaClock /> {task.time}
        </div>
        <h2
          className="accordion-button collapsed position-relative"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${task.id}-${task.date}`}
          aria-controls={`collapse-${task.id}`}
        >
          <span
            className={`ms-2  xs-title text-truncate form-check-label form-check-label ${task.completed ? "text-decoration-line-through" : ""}`}
          >
            {task.title}
          </span>
        </h2>
      </div>
      <div
        id={`collapse-${task.id}-${task.date}`}
        className="accordion-collapse collapse "
        aria-labelledby={`heading-${task.id}`}
      >
        <div className="accordion-body">{task.description}</div>
      </div>
    </div>
  );
}

export default Note;
