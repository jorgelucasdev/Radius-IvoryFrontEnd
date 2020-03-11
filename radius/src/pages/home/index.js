import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTable, useSortBy } from 'react-table';
import UltimosChamados from './UltimosChamados'
import BuscarChamados from "./BuscarChamados";
const Home = () => {
  return (
    <div>
      
        <Col>
          <h5>Home</h5>
          <BuscarChamados />  
          <UltimosChamados/>
        </Col>
   
   
      
    </div>
  );
};

export default Home;
