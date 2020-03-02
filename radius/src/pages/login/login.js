import React from "react";
import styles from "./login.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Login() {
    return(
        <Container className={styles.loginbox}>
            <Row className={styles.text}>
                <p className={styles.title}>Seja bem-vindo ao Radius</p>
                <p>insira seus dados nos campor abaixo.</p>
            </Row>
            <Row><label>Usuário:</label></Row>
            <Row><input></input></Row>
            <Row><label>Senha:</label></Row>
            <Row><input></input></Row>
        </Container>
    )
}

export default Login;