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
            <Container className={styles.form}>
                <Row><label className={styles.labelUser}>Usuário:</label></Row>
                <Row><input className={styles.inputUser}></input></Row>
                <Row><label className={styles.labelSenha}>Senha:</label></Row>
                <Row><input className={styles.inputSenha}></input></Row>
                <Row>
                    <button className={styles.btnEntrar}>ENTRAR</button>
                </Row>
                <Row>
                    <Col><a>Esqueceu sua senha?</a></Col><Col><a>Fale conosco</a></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Login;