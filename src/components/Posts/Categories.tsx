"use client";
import { useState } from "react";
import CategoryList from "./CategoryList";

function Categories() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTasks]);
  function handleDeleteTask(taskId:string) {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="w-[48px] p-4 pb-8 text-sm font-semibold capitalize"></th>
            <th className="w-[300px] text-left text-sm font-semibold capitalize">
              {" "}
              Title{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (<CategoryList task={task} index={index} handleDeleteTask={handleDeleteTask} />))}
        </tbody>
      </table>
    </div>
  );
}

export default Categories;
