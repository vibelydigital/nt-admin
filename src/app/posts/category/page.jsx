"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CategoryList from "@/components/Posts/Categories";
import React, { useState } from "react";

function CategoryPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  return (
    <DefaultLayout>
      <CategoryList />
    </DefaultLayout>
  );
}

export default CategoryPage;
