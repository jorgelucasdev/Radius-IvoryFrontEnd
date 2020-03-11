import React from "react";
import styles from "./BuscarChamados.module.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function BuscarChamados() {
    return (
        <div className={styles.home}>

            <Card className={styles.busca}>
                <Card.Header as="h5" className={styles.headerBusca}>Buscar Chamados</Card.Header>
                <Card.Body className={styles.bodyBusca}>

                    <Row className={styles.rowBusca}>

                        <Col className={styles.info}>
                            <p>Nº Chamado</p>
                            <input className={styles.input} />
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