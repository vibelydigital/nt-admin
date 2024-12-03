function AddCategoryModal() {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-70"></div>
      <form className="absolute top-1/4 z-10 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {/* {isAdd ? "Add New Task" : "Edit Task"} */}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              //   value={task.title}
              //   onChange={handleChange}
              required
            />
          </div>

        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            className="bg-red-600 rounded px-4 py-2 text-white transition-all hover:opacity-80"
            // onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            // onClick={() => onSave(task, isAdd)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AddCategoryModal;
