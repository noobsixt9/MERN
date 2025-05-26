import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Navbar from "../../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  // data coming from the fetch is an arrya [] so we initialized an empty array in useState([])

  const fetchbooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books");
    setBooks(res.data.data);
  };

  useEffect(() => {
    fetchbooks();
  }, []);

  console.log(books);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap pt-30 px-32 ">
        {books.map((book) => {
          return <Cards book={book} key={book.id} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
