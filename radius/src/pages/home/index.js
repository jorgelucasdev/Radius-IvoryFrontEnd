import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTable, useSortBy } from "react-table";
import UltimosChamados from "./UltimosChamados";
import BuscarChamados from "./BuscarChamados";
import PagesBtn from "./PagesBtn"
import FooterBtn from "./FooterBtn"
import styles from "./index.module.scss";
const Home = () => {
  return (
    <div>
      <h1><span>Home</span></h1>
      <BuscarChamados />
      <UltimosChamados />
      <PagesBtn/> 
      <FooterBtn/>
    </div>
  );
};

export default Home;
