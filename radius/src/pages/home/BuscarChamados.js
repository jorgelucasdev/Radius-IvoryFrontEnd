import React, { useState } from "react";
import styles from "./BuscarChamados.module.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import 'styled-components';
import './AuxStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSort,
    faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

export default function BuscarChamados() {
    
    registerLocale("pt-BR", ptBR);
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    
    const DropdownIndicator = props => {
        return (
            <i className={[styles.arrow ,'icon-setasduplas'].join(' ')}></i>
        );
    };

    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
        }),
      
        control: (_, { selectProps: { width }}) => ({
            
        })
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

                        <Col xs={12} sm={6} md={4} lg={4} xl className={styles.info}>
                            <label>Nº Chamado</label>
                            <input className={styles.input} />
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4} xl className={styles.infoData}>
                            <label className={styles.labelData}>Data inicial</label>
                            <DatePicker
                                name="dataInicial"
                                dateFormat="dd/MM/yyyy"
                                selected={formik.values.dataInicial}
                                locale="pt-BR"
                                showPopperArrow={false}
                                onChange={date => {
                                    formik.setFieldValue("dataInicial", date);
                                }}
                                className={styles.data}
                            />
                             <i className={[styles.calendar ,'icon-calendario'].join(' ')}></i>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4} xl className={styles.infoData}>
                            <label className={styles.labelData}>Data final</label>
                            <DatePicker
                                name="dataFinal"
                                dateFormat="dd/MM/yyyy"
                                selected={formik.values.dataFinal}
                                locale="pt-BR"
                                showPopperArrow={false}
                                onChange={date => {
                                    formik.setFieldValue("dataFinal", date);
                                }}
                                className={styles.data}               
                            />
                             <i className={[styles.calendar ,'icon-calendario'].join(' ')}></i>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4} xl className={styles.info}>
                            <label>Status</label>
                            <Select placeholder="" classNamePrefix={'select'}
                                options={options} styles={customStyles}
                                components={{ DropdownIndicator }} 
                            />
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4} xl className={styles.info}>
                            <label>Empresa</label>
                            <Select placeholder="" classNamePrefix={'select'}
                                options={options} styles={customStyles}
                                components={{ DropdownIndicator }} 
                            />
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4} xl className={styles.info}>
                            <label>Projeto</label>
                            <Select placeholder="" classNamePrefix={'select'}
                                options={options} styles={customStyles}
                                components={{ DropdownIndicator }} />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl className={styles.infoBtn}>
                            <Button variant="primary" className={styles.btnFiltrar}>FILTRAR</Button>
                        </Col>

                    </Row>

                </Card.Body>
            </Card>
        </div>
    )
}