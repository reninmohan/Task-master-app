import Note from "./Note";
import formatDate from "../utils/formatDate";
function NotePerDate({ date, tasks, onUpdateTask, onDeleteTask, setCurrentTodo, onToggleEditModal }) {
  const allTasksPerDate = tasks.filter((task) => task.date === date);
  return (
    <div className="accordion" id={`accordion-${date}`}>
      <div className=" p-4  my-4 mx-auto rounded-3 w-sm-90 " style={{ backgroundColor: "#d9d6d6" }}>
        <h5 style={{ fontWeight: "bold" }}>{formatDate(date)}</h5>
        {allTasksPerDate.map((task) => (
          <Note
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            setCurrentTodo={setCurrentTodo}
            onToggleEditModal={onToggleEditModal}
          />
        ))}
      </div>
    </div>
  );
}

export default NotePerDate;
