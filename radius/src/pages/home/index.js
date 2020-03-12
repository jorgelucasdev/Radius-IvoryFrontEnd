import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTable, useSortBy } from 'react-table';
import UltimosChamados from './UltimosChamados'
import BuscarChamados from "./BuscarChamados";
import styles from './index.module.scss';
const Home = () => {
  return (
    <div>
      
        <Col>
          <h1>Home</h1>
          <BuscarChamados />  
          <UltimosChamados/>
        </Col>
  
   
      
    </div>
  );
};

export default Home;
