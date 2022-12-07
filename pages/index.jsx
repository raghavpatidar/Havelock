import { getSide, books } from "../utils";
import { useContext } from "react";
import { MobxContext } from "./_app";
import BookCard from "../components/BookCard";
import Navbar from '../components/Navbar/index'
import Header from '../components/Header'
import { observer } from "mobx-react-lite";
import {Button } from 'antd';
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
      <div className="paddingtopbottom"></div>
      <div>
            <Button className="headingbutton"  href="https://www.go2andaman.com/" type="link">Home </Button>{">"}
            <Button className="headingbutton"  href="https://www.go2andaman.com/andaman-nicobar-islands/" type="link">Andaman </Button>{">"} 
              <Button className="headingbutton" type="link">Havelock</Button>
      </div>
      <Header></Header>
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
