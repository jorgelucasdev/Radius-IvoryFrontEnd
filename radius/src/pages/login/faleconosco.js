import React from "react";
import styles from "./faleconosco.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function FaleConosco()
{
    return(
    <Container className={styles.Faleconosco}>
        <Row className={styles.Header}>
        <p className={styles.title1}>Fale conosco</p>
        <p className={styles.title2}>Insira seus dados nos campos abaixo.</p>
        </Row>
    </Container>
    );
}
export default FaleConosco;