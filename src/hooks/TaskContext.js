import { createContext } from "react";
import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";

export const TaskContext = createContext([]);

export function TaskProvider(props) {
  const [tasks, setTasks] = useState([])

  const fetchTasks = useCallback(() => {
    api.get('/tasks')
      .then((response) => {
        setTasks(response.data.tasks)
      })
  }, [])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  async function createTask(content) {

    const data = { content }

    const response = await api.post('/tasks', data)
    const { task } = response.data

    setTasks([
      ...tasks,
      task
    ])
  }
  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}
