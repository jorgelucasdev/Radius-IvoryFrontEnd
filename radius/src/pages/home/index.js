import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTable, useSortBy } from 'react-table';
import UltimosChamados from './UltimosChamados'
const Home = () => {
  return (
    <div>
      <h5>Home</h5>
        <Col>
        
          <UltimosChamados/>
        </Col>
   
   
      
    </div>
  );
};

export default Home;
