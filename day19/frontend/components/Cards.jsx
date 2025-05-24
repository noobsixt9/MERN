import { Link } from "react-router-dom";

const Cards = ({ book }) => {
  console.log(book);
  return (
    <>
      <Link to={`/single-page/${book.id}`}>
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-400">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"></div>
              <p className="text-gray-700 text-base">
                Book Name: {book.bookName}
              </p>
              <p className="text-gray-700 text-base">
                Book Author: {book.bookAuthor}
              </p>
              <p className="text-gray-700 text-base">
                Book Price: {book.bookPrice}
              </p>
              <p className="text-gray-700 text-base">
                Book Genre: {book.bookGenre}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
