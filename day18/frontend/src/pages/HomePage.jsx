import { useEffect } from "react";
import Cards from "../../components/Cards";
import Navbar from "../../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const fetchbooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books");
    console.log(res);
  };

  useEffect(() => {
    fetchbooks();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap pt-30 px-32 ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default HomePage;
