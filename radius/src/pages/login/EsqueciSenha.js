import React, { Component } from 'react';
import styles from "./EsqueciSenha.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import {faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class EsqueciSenha extends Component {
    render() {
        return (
            <Container className={styles.esqueciSenha}>
                <header className={styles.header}>
                    <FontAwesomeIcon icon={faAngleLeft} className={styles.leftAngle}/>
                    <p className={styles.title}>Esqueci minha senha</p>
                    <p className={styles.subtitle}>Insira seus dados nos campos abaixo.</p>
                </header>
                <Container className={styles.body}>
                        <label className={styles.label}>Nome:</label>
                        <input type="text" className={styles.input} />
                        <label className={styles.label}>Email:</label>
                        <input type="text" />
                        <label className={styles.label}>CNPJ:</label>
                        <input type="text" />
                        {/* <button>REQUISITAR NOVA SENHA</button> */}
                </Container>
            </Container>
        )
    }
}
