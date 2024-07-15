function AddCategory({ onHandle }: {onHandle:() => void}) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white"
          onClick={onHandle}
        >
          Add Category
        </button>
      </div>
    </div>
  );
}

export default AddCategory;
