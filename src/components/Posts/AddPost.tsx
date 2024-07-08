import React from "react";

function AddPost() {
  return (
    <div>
      <form>
        <label htmlFor="text" className="mb-3 block text-sm font-medium text-black dark:text-white">
          Title:
        </label>
        <input
          id="text"
          type="text"
          placeholder="Add your post title"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary mb-5.5"
        />
        <label htmlFor="text" className="mb-3 block text-sm font-medium text-black dark:text-white">
          Slug:
        </label>
        <input
          id="text"
          type="text"
          placeholder="Add your post title"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary mb-5.5"
        />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Description:
              </label>
              <textarea
                rows={6}
                placeholder="Category description"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="flex  justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-5.5">Pusblish post</button>
      </form>
    </div>
  );
}

export default AddPost;
