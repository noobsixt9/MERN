const Forms = () => {
  return (
    <>
      <section className="bg-white p-1 xs:p-8">
        <div className=" max-w-96 sm:max-w-4xl mx-auto border border-[#4D7C0F] rounded-lg p-8">
          <h2 className="sm:text-xl text-[12px] font-bold mb-6">Title</h2>
          <form>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="text-xs xs:text-sm font-medium text-gray-700 mb-1 "
                >
                  Job Title{/* */}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    color="#9CA3AF"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-alert inline-block"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} x2={12} y1={8} y2={12} />
                    <line x1={12} x2="12.01" y1={16} y2={16} />
                  </svg>{" "}
                </label>
                <input
                  type="text"
                  id="title"
                  className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
                  name="title"
                  defaultValue
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="category"
                    className="text-xs xs:text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
                  >
                    <option value selected>
                      Select
                    </option>
                    <option value="HR">HR</option>
                    <option value="programming">Programming</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="subcategory"
                    className="text-xs xs:text-sm font-medium text-gray-700 mb-1"
                  >
                    Subcategory
                  </label>
                  <select
                    name="subcategory"
                    id="subcategory"
                    className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
                  >
                    <option value selected>
                      Select
                    </option>
                    <option value="HR-1">HR-1</option>
                    <option value="programming-1">Programming-1</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="text-xs xs:text-sm font-medium text-gray-700 mb-1"
                  >
                    Country <span className="font-light">(Optional)</span>
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"
                  >
                    <option value selected>
                      Select
                    </option>
                    <option value="syria">Syria</option>
                    <option value="turkey">Turkey</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="language"
                    className="text-xs xs:text-sm font-medium text-gray-700 mb-1"
                  >
                    Language
                  </label>
                  <div className="flex flex-wrap items-center border rounded-md xs:p-2 bg-white">
                    <span className="bg-[#D9F99D] text-[#4D7C0F] px-1 py-0 xs:px-2 xs:py-1 rounded m-1 text-xs xs:text-sm flex items-center">
                      Arabic
                      <button
                        className="ml-1 text-[#4D7C0F] focus:outline-none"
                        type="button"
                      >
                        ×
                      </button>
                    </span>
                    <input
                      type="text"
                      placeholder="Add language"
                      className="flex-grow outline-none py-2 w-2/3 text-sm xs:ml-2"
                      defaultValue
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                className=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-[#4D7C0F] rounded-[5px] p-[13px_25px] gap-[10px] text-white"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Forms;
