import { useEffect, useState } from "react";
import Header from "./feature/Header";
import Settings from "./feature/Settings";
import Summary from "./feature/Summary";
import NotesSection from "./feature/NotesSection";
import { compareAsc, format, parse } from "date-fns";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const dates = [...new Set(tasks.map((item) => item.date))];
  const formattedSortedDates = dates.map((dateStr) => parse(dateStr, "dd-MM-yyyy", new Date())).sort(compareAsc);
  const sortedDates = formattedSortedDates.map((date) => format(date, "dd-MM-yyyy"));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header onTaskAdd={addTask} />
      <Settings sortedDates={sortedDates} />
      <Summary sortedDates={sortedDates} />
      <NotesSection onUpdateTask={updateTask} onDeleteTask={deleteTask} sortedDates={sortedDates} tasks={tasks} />
    </div>
  );
}

export default App;
