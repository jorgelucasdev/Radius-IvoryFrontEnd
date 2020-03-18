import React from 'react'
import styles from "./FooterBtn.module.scss"
export default function FooterBtn() {
    return (
        <div className= {styles.footerBtn}>
            <button className={styles.btn}><i className={'icon-novochamado'}><p>NOVO<br/>CHAMADO</p></i></button>
            <button className={styles.btn}><i className={'icon-graficos'}><p>GRÁFICOS</p></i></button>
            <button className={styles.btn}><i className={'icon-baseconhecimento'}><p>BASE DE CONHECIMENTO</p></i></button> 
        </div>
    )
}
