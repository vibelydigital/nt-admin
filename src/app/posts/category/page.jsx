"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";

function CategoryPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  return (
    <DefaultLayout>
      <div>
        <form>
          <h3 className="mb-11 font-medium text-black dark:text-white">
            Add New Category
          </h3>
          <label
            htmlFor="text"
            className="mb-3 block text-sm font-medium text-black dark:text-white"
          >
            Name
          </label>

          <input
            id="text"
            type="text"
            placeholder="Add your post title"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <div className="mt-5.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Description:
                </label>
                <textarea
                  rows={6}
                  placeholder="Add your post description"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
            </div>
          </div>
          <button className="mt-5.5  flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
            Pusblish post
          </button>
          <label className="mb-3 mt-5.5 block text-sm font-medium text-black dark:text-white">
            Parent Category
          </label>
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              changeTextColor();
            }}
            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
              isOptionSelected ? "text-black dark:text-white" : ""
            }`}
          >
            <option value="" disabled className="text-body dark:text-bodydark">
              None
            </option>
            <option value="USA" className="text-body dark:text-bodydark">
              Web Development
            </option>
            <option value="UK" className="text-body dark:text-bodydark">
              Seo
            </option>
            <option value="Canada" className="text-body dark:text-bodydark">
              Digital Marketin
            </option>
          </select>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default CategoryPage;
