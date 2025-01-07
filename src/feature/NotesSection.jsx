import { useState } from "react";
import EditTaskForm from "../components/EditTaskForm";
import NotePerDate from "../components/NotePerDate";

function NotesSection({ onUpdateTask, onDeleteTask, sortedDates, tasks }) {
  const [currentTodo, setCurrentTodo] = useState({});
  const [IsEditModal, setIsEditModal] = useState(false);

  function handleToggleEditModal() {
    setIsEditModal((Is) => !Is);
  }

  return (
    <div>
      {tasks.length === 0 ? (
        <div className="alert alert-primary text-center w-75 mt-5 mx-auto" role="alert">
          No tasks available. Add some tasks!
        </div>
      ) : (
        sortedDates.map((date) => (
          <NotePerDate
            date={date}
            key={date}
            tasks={tasks}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            onToggleEditModal={handleToggleEditModal}
            setCurrentTodo={setCurrentTodo}
          />
        ))
      )}

      {IsEditModal && (
        <EditTaskForm
          onUpdateTask={onUpdateTask}
          modalid="modal-edit-task"
          task={currentTodo}
          onToggleEditModal={handleToggleEditModal}
        />
      )}
    </div>
  );
}

export default NotesSection;
