"use client";
import { useState } from "react";
import CategoryList from "./CategoryList";

function Categories() {
  const defaultCategory = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [categories, setcategories] = useState([defaultCategory]);
  function handleDeleteCategory(categoryId:string) {
    const categoriesAfterDelete = categories.filter((categorie) => categorie.id !== categoryId);
    setcategories(categoriesAfterDelete);
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
          {categories.map((category, index) => (<CategoryList task={category} key={category.id} index={index} handleDeleteCategory={handleDeleteCategory} />))}
        </tbody>
      </table>
    </div>
  );
}

export default Categories;
