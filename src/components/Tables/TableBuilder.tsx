const TableBuilder = ({
  title,
  heading,
  tableData,
}: {
  title: string;
  heading: string[];
  tableData: object[];
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {title}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {heading.map((head, index) => (
            <div key={index}>
              <h5 className="nt-table-head">{head}</h5>
            </div>
          ))}
        </div>
        <div>
          
          {/* {tableData.map((data, key) => {
            // {console.log(data.title)}
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === tableData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <input type="checkbox" name="" id="" />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                {console.log(data.title)}
                  {data.title}

                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{data.author}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{data.categories}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                {data.tags.map((tag, index) => (
                  <p key={index} className="text-black dark:text-white">
                    {tag}{" "}
                  </p>
                ))}
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{data.date}</p>
              </div>
            </div>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default TableBuilder;
