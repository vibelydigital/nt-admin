import React from "react";

type CategoryType = {
  task: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    priority: string;
    isFavorite: boolean;
  };
  index: number;
  handleDeleteCategory: (categoryId:string) => void;
};

function CategoryList({ task, index, handleDeleteCategory }: CategoryType) {
  return (
    <tr
      key={task.id}
      className="[&>td]:px- border-b border-[#2E3443] [&>td]:py-2 [&>td]:align-baseline"
    >
      <td>{index + 1}</td>
      <td>{task.title}</td>

      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            className="text-red-500"
            onClick={() => handleDeleteCategory(task.id)}
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
