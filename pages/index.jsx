import React, { useEffect } from "react";
import { getSide, books } from "../utils";
import { useContext } from "react";
import { MobxContext } from "./_app";
import Navbar from "../components/Navbar/index";
import Header from "../components/Header";
import Footer from '../components/Footer/Footer'
import { Button } from "antd";
import Homepage from "./Homepage";
import { Col, Row } from "antd";
import SideComp from "../components/SideComp";
// import { Footer } from "antd/es/layout/layout";
const data = require("../data/data.json");

const IndexPage = () => {
  const { setData } = useContext(MobxContext);
  useEffect(() => {
    setData(data);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="paddingtopbottom"></div>
      <div>
        <Button
          className="headingbutton"
          href="https://www.go2andaman.com/"
          type="link"
        >
          Home{" "}
        </Button>
        {">"}
        <Button
          className="headingbutton"
          href="https://www.go2andaman.com/andaman-nicobar-islands/"
          type="link"
        >
          Andaman{" "}
        </Button>
        {">"}
        <Button className="headingbutton" type="link">
          Havelock
        </Button>
      </div>
      <div className="paddingtopbottom"></div>
      <Header />
        <Row >
                      <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 2 }}>
                        <Homepage />
                       </Col>
                      <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 0 }}>
                           <SideComp></SideComp>
                       </Col>
      </Row>
      <Footer/>
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
        dataStore: {
          data,
        },
      },
    },
  };
};

export default IndexPage;
