import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const EditPage = () => {
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchsinglebook = async () => {
    const res = await axios.get("http://localhost:3000/api/books/" + id);
    setBook(res.data.datas);
  };

  useEffect(() => {
    fetchsinglebook();
  }, []);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const editBook = async (event) => {
    event.preventDefault();
    const response = await axios.patch(
      "http://localhost:3000/api/books/" + id,
      book
    );
    if (response.status == 200) {
      alert("Edited Sucessfully!!");
      navigate("/");
    } else {
      alert("Something went Wrong!!");
    }
  };
  return (
    <>
      <Navbar />
      <div className="pt-25">
        <div className="bg-white border border-4 rounded-lg shadow relative m-10">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">Edit Book</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="product-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form onSubmit={editBook}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product-name"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Book Name
                  </label>
                  <input
                    type="text"
                    name="bookName"
                    id="product-name"
                    value={book.bookName}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="JavaScript"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Book Author
                  </label>
                  <input
                    type="text"
                    name="bookAuthor"
                    id="category"
                    value={book.bookAuthor}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Book Genre
                  </label>
                  <input
                    type="text"
                    name="bookGenre"
                    id="brand"
                    value={book.bookGenre}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Programming"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Book Price
                  </label>
                  <input
                    type="number"
                    name="bookPrice"
                    id="price"
                    value={book.bookPrice}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="$230"
                    required
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
                  type="submit"
                >
                  Edit all
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
