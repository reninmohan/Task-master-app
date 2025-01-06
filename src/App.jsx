import { useEffect, useState } from "react";
import Header from "./feature/Header";
import Settings from "./feature/Settings";
import Summary from "./feature/Summary";
import NotesSection from "./feature/NotesSection";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header onTaskAdd={addTask} />
      <Settings />
      <Summary tasks={tasks} />
      <NotesSection onUpdateTask={updateTask} onDeleteTask={deleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
