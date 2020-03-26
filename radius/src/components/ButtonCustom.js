import React from "react";
import styles from "./ButtonCustom.module.scss";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonCustom(props) {
  return (
    <div className={styles.conteudoButton}>
      <Card className={styles.header}>
        <Card.Header as="h5" className={styles.headerTitle}>
          {props.title}
        </Card.Header>
        <Card.Body className={styles.body}>
          <div
            className={styles.button}
            onClick={() => {
              props.onClick();
            }}
          >
            <FontAwesomeIcon icon={props.icon} className={styles.icon} />
            <div className={styles.desc}>
              <span>{props.desc}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ButtonCustom;
