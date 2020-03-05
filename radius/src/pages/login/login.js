import React from "react";
import styles from "./login.module.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className={styles.loginbox}>
            <div className={styles.text}>
                <p className={styles.title}>Seja bem-vindo ao Radius</p>
                <p className={styles.insira}>Insira seus dados nos campor abaixo.</p>
            </div>
            <div className={styles.form}>
                <label className={styles.labelUser}>Usuário:</label>
                <input className={styles.inputUser} />
                <label className={styles.labelSenha}>Senha:</label>
                <input className={styles.inputSenha} />
                <button className={styles.btnEntrar}>ENTRAR</button>
                <Row className={styles.textEnd}>
                    <Col className={styles.textEsqueceu}><Link to={'/esquecisenha'}>Esqueceu sua senha?</Link></Col>
                    <Col className={styles.textFale}><Link to={'/faleconosco'}>Fale conosco</Link></Col>
                </Row>
            </div>
        </div>
    )
}

export default Login;