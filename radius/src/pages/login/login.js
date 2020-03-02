import React from "react";
import styles from "./login.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Login() {
    return(
        <Container className={styles.loginbox}>
            <Row>
                <h3>Seja bem-vindo ao Radius</h3>
            </Row>
        </Container>
    )
}

export default Login;