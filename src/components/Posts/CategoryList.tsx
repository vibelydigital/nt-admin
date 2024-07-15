import React from "react";

type TaskType = {
  task: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    priority: string;
    isFavorite: boolean;
  };
  index: number;
};

function CategoryList({ task, index, handleDeleteTask }: TaskType) {
  return (
    <tr
      key={task.id}
      className="[&>td]:px- border-b border-[#2E3443] [&>td]:py-2 [&>td]:align-baseline"
    >
      <td>{index + 1}</td>
      <td>{task.title}</td>
      {/* {console.log(task[0])} */}

      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            className="text-red-500"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
          <button className="text-blue-500" onClick={() => onEdit(task)}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CategoryList;
