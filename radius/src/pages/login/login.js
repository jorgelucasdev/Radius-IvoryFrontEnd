import React from "react";
import styles from "./login.module.scss";
import { Container, Row, Col, Grid } from "react-bootstrap";

function Login() {
    return(
<<<<<<< HEAD
        <Container className={styles.loginbox}>
            <div className={styles.text}>
                <Row>
                    <p className={styles.title}>Seja bem-vindo ao Radius</p>
                </Row>
                <Row>
                    <p className={styles.insira}>insira seus dados nos campor abaixo.</p>
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
                    <Col><a className={styles.textEsqueceu}>Esqueceu sua senha?</a></Col>
                    <Col><a className={styles.textFale}>Fale conosco</a></Col>
                </Row>
            </Container>
=======
        <Container className={styles.form}>
            <Row className={styles.text}>
                <p className={styles.title}>Seja bem-vindo ao Radius</p>
                <p>insira seus dados nos campor abaixo.</p>
            </Row>
            <Row><label>Usuário:</label></Row>
            <Row><input className={styles.inputUser}></input></Row>
            <Row><label>Senha:</label></Row>
            <Row><input className={styles.inputSenha}></input></Row>
>>>>>>> faleconosco
        </Container>
    )
}

export default Login;