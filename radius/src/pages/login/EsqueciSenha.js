import React, { Component } from 'react';
import styles from "./EsqueciSenha.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import {faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class EsqueciSenha extends Component {
    render() {
        return (
            <div className={styles.esqueciSenha}>
                <header className={styles.header}>
                    <p className={styles.title}>Esqueci minha senha</p>
                    <p className={styles.subtitle}>Insira seus dados nos campos abaixo.</p>
                </header>
                <div className={styles.body}>
                        <label className={styles.label}>Nome:</label>
                        <input type="text" className={styles.input} />
                        <label className={styles.label}>Email:</label>
                        <input type="text" />
                        <label className={styles.label}>CNPJ:</label>
                        <input type="text" />
                        <button className={styles.btnEntrar}>REQUISITAR NOVA SENHA</button>
                </div>
            </div>
        )
    }
}
