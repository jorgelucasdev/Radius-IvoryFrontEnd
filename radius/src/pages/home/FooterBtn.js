import React from 'react'
import styles from "./FooterBtn.module.scss"
export default function FooterBtn() {
    return (
        <div className= {styles.footerBtn}>
            <button className={styles.btn}><i className={[styles.icon ,'icon-novochamado'].join(' ')}><p>NOVO<br/>CHAMADO</p></i></button>
            <button className={styles.btn}><i className={[styles.icon,'icon-graficos'].join(' ')}><p>GRÁFICOS</p></i></button>
            <button className={styles.btn}><i className={[styles.icon,'icon-baseconhecimento'].join(' ')}><p>BASE DE CONHECIMENTO</p></i></button> 
        </div>
    )
}
