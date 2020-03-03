import React from "react";
import styles from "./login.module.scss";
import { Container, Row, Col, Grid } from "react-bootstrap";

function Login() {
    return(
        <Container className={styles.loginbox}>
            <div className={styles.text}>
                <Row>
                    <p className={styles.title}>Seja bem-vindo ao Radius</p>
                </Row>
                <Row>
                    <p className={styles.insira}>Insira seus dados nos campor abaixo.</p>
                </Row>
            </div>
            <Container className={styles.form}>
                <Row><label className={styles.labelUser}>Usuário:</label></Row>
                <Row><input className={styles.inputUser}></input></Row>
                <Row><label className={styles.labelSenha}>Senha:</label></Row>
                <Row><input className={styles.inputSenha}></input></Row>
                <Row>
                    <button className={styles.btnEntrar}>ENTRAR</button>
                </Row>
                <Row className={styles.textEnd}>
                    <Col className={styles.textEsqueceu}><a>Esqueceu sua senha?</a></Col>
                    <Col className={styles.textFale}><a>Fale conosco</a></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Login;