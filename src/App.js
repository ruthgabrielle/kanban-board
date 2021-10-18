import { TaskProvider } from "./hooks/TaskContext";
import KanbanBoard from "./pages/kanbanBoard";

function App() {
  return (
    <TaskProvider>
      <h2> Kanban Board </h2>
      <KanbanBoard />
    </TaskProvider>
  );
}

export default App;
