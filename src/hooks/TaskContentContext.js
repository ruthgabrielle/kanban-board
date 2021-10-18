import { createContext, useContext } from "react";
import { TaskContext } from "../hooks/TaskContext";

export const TaskContentContext = createContext([]);

export function TaskContentProvider() {
    const { tasks } = useContext(TaskContext);

    return tasks
}