import React from "react";
import styles from "./Pagination.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination() {
  return (
    <div className={styles.pageNumbers}>
      <button>
        <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
      </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
      </button>
    </div>
  );
}
