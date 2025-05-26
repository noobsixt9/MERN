import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Buttons";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards";

const SinglePage = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const bookid = useParams();

  const fetchsinglebook = async () => {
    const res = await axios.get("http://localhost:3000/api/books/" + bookid.id);
    setBook(res.data.datas);
  };

  useEffect(() => {
    fetchsinglebook();
  }, []);

  const deletebook = async () => {
    const res = await axios.delete(
      "http://localhost:3000/api/books/" + bookid.id
    );
    if (res.status == 200) {
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap pt-30 px-32 ">
        <Cards book={book} />
      </div>
      <div className="flex flex-wrap gap-4 px-40 py-4">
        <button
          onClick={deletebook}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Delete
        </button>

        <Link to={`/edit-page/${bookid.id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Edit
          </button>
        </Link>
      </div>
    </>
  );
};

export default SinglePage;
