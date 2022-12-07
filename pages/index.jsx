import { getSide, books } from "../utils";
import { useContext } from "react";
import { MobxContext } from "./_app";
import BookCard from "../components/BookCard";
import Navbar from '../components/Navbar/index'
import { observer } from "mobx-react-lite";

const IndexPage = () => {
  const {
    totalBooks, 
    filteredBooks,
    setSearchParam,
    fetchAndSetBooksOnClient
  } = useContext(MobxContext);
  console.log("hello from Page component ", getSide());

  const handleOnInputChange = (e) => {
    setSearchParam(e.target.value);
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1>Books:</h1>
      <h3>TotalBooks: {totalBooks}</h3>
      <button onClick={fetchAndSetBooksOnClient}>Fetch on Client</button>
      <input placeholder="search" type="text" onChange={handleOnInputChange} />
      <hr />
      <div style={{ display: "flex" }}>
        {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  console.log("making server request before app", getSide());
  // here could be any async request for fetching data
  // const books = BooksAgent.getAll();
  return {
    props: {
      initialState: {
        booksStore: {
          books
        }
      }
    }
  };
};

export default observer(IndexPage);
