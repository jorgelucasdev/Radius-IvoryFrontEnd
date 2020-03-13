import React, { Component } from "react";
import styles from "./BuscarChamados.module.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import styled from 'styled-components';
import './SelectStyles.css';

export default function BuscarChamados() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
          borderBottom: '1px dotted pink',
          color: state.selectProps.menuColor,
          padding: 20,
        }),
      
        control: (_, { selectProps: { width }}) => ({
          width: width
        }),
      
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
    }
    
    return (
        <div className={styles.home}>

            <Card className={styles.busca}>
                <Card.Header as="h5" className={styles.headerBusca}>Buscar Chamados</Card.Header>
                <Card.Body className={styles.bodyBusca}>

                    <Row className={styles.rowBusca}>

                        <Col className={styles.info}>
                            <p>Nº Chamado</p>
                            <Select placeholder="" classNamePrefix={'select'}
                                options={options} styles={customStyles} />
                        </Col>

                        <Col className={styles.info}>
                            <p>Data inicial</p>
                            <input className={styles.input} />
                        </Col>

                        <Col className={styles.info}>
                            <p>Data final</p>
                            <input className={styles.input} />
                        </Col>

                        <Col className={styles.info}>
                            <p>Status</p>
                            <input className={styles.input} />
                        </Col>

                        <Col className={styles.info}>
                            <p>Empresa</p>
                            <input className={styles.input} />
                        </Col>

                        <Col className={styles.info}>
                            <p>Projeto</p>
                            <input className={styles.input} />
                        </Col>

                        <Col className={styles.infoBtn}>
                            <Button variant="primary" className={styles.btnFiltrar}>FILTRAR</Button>
                        </Col>

                    </Row>

                </Card.Body>
            </Card>
        </div>
    )
}