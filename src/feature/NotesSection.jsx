import NotePerDate from "../components/NotePerDate";
function NotesSection({ onUpdateTask, onDeleteTask, sortedDates, tasks }) {
  return (
    <div className="vh-100">
      {tasks.length === 0 ? (
        <div className="alert alert-primary text-center w-75 mt-5 mx-auto" role="alert">
          No tasks available. Add some tasks!
        </div>
      ) : (
        sortedDates.map((date) => (
          <NotePerDate date={date} key={date} tasks={tasks} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
        ))
      )}
    </div>
  );
}

export default NotesSection;
