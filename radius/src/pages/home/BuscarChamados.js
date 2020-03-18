import React, { useState } from "react";
import styles from "./BuscarChamados.module.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import styled from 'styled-components';
import './AuxStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSort,
    faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

export default function BuscarChamados() {
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    
    const DropdownIndicator = props => {
        return (
            <FontAwesomeIcon icon={faSort} className={styles.arrow} />
        );
    };

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: state.selectProps.menuColor,
            padding: 20,
        }),

        control: (_, { selectProps: { width } }) => ({
            width: width
        }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    const [startDate, setStartDate] = useState(new Date());

    const formik = useFormik({
        initialValues: {
           dataInicial: "",
           dataFinal: "",
        }
    });

    return (
        <div className={styles.home}>

            <Card className={styles.busca}>
                <Card.Header as="h5" className={styles.headerBusca}>Buscar Chamados</Card.Header>
                <Card.Body className={styles.bodyBusca}>

                    <Row className={styles.rowBusca}>

                        <Col className={styles.info}>
                            <label>Nº Chamado</label>
                            <input className={styles.input} />
                        </Col>

                        <Col className={styles.infoData}>
                            <label className={styles.labelData}>Data inicial</label>
                            <DatePicker
                                name="dataInicial"
                                dateFormat="dd/MM/yyyy"
                                selected={formik.values.dataInicial}
                                locale="pt-BR"
                                onChange={date => {
                                    formik.setFieldValue("dataInicial", date);
                                }}
                                className={styles.data}
                            />
                             <i className={'icon-calendario'}></i>
                        </Col>

                        <Col className={styles.infoData}>
                            <label className={styles.labelData}>Data final</label>
                            <DatePicker
                                name="dataFinal"
                                dateFormat="dd/MM/yyyy"
                                selected={formik.values.dataFinal}
                                locale="pt-BR"
                                onChange={date => {
                                    formik.setFieldValue("dataFinal", date);
                                }}
                                className={styles.data}               
                            />
                             <i className={'icon-calendario'}></i>
                        </Col>

                        <Col className={styles.info}>
                            <label>Status</label>
                            <Select placeholder="" classNamePrefix={'select'}
                                options={options} styles={customStyles}
                                components={{ DropdownIndicator }} 
                            />
                        </Col>

                        <Col className={styles.info}>
                            <label>Empresa</label>
                            <Select placeholder="" classNamePrefix={'select'}
                                options={options} styles={customStyles}
                                components={{ DropdownIndicator }} 
                            />
                        </Col>

                        <Col className={styles.info}>
                            <label>Projeto</label>
                            <Select placeholder="" classNamePrefix={'select'}
                                options={options} styles={customStyles}
                                components={{ DropdownIndicator }} />
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