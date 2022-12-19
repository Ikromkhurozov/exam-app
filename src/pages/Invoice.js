import React from 'react';
import { useNavigate } from "react-router-dom";


import Download from "../assets/dashboard/download-icon.svg"
import Print from "../assets/dashboard/print-icon.svg"
import Upload from "../assets/dashboard/upload-outlined.svg"
import Check from "../assets/dashboard/check-icon.svg"
import Cancel from "../assets/dashboard/cancel-icon.svg"
import InvoiceImage from "../assets/dashboard/invoice-image.jpg"

import styles from "../styles/Invoice.module.scss"

export default function Invoice() {
  const navigate = useNavigate();

  const onNavigate = () =>{
    navigate("/create")
  }

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <p onClick={onNavigate} className={styles.name}>Счёт-фактура</p>
        <ion-icon name="chevron-forward-outline"/>
        <p className={styles.info}>Счет-фактура №03-60378 от 31.03.2021</p>
      </div>
      <div className={styles["cards"]}>
        <div className={styles.left}>
          <header>
            <h2>Счет-фактура</h2>
            <p>Статус документа в ГНК</p>
          </header>
          <div className={styles["invoice-content"]}>
            <p className={styles.number}>№03-60378 от 31.03.2021</p>
            <p className={styles.mfo}>566800736</p>
            <div className={styles.info}>
              <p className={styles.send}>Отправитель:</p>
              <p className={styles.content}> ОБЩЕСТВО С ОГРАНИЧЕННОЙ<br/> ОТВЕТСТВЕННОСТЬЮ <br/> "VENKON GROUP"</p>
            </div>
          </div>
          <div className={styles["card-footer"]}>
            <div className={styles["footer-left"]}>
              <p>Дата:</p>
              <p className={styles.date}>2021-04-09 12:40:13</p>
            </div>
            <div className={styles["footer-right"]}>
              <button><img alt="img" src={Download}/>Скачать</button>
              <button className={styles.print}><img  alt="img" src={Print}/>Печать </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <header>
            <h2>Статус:</h2>
            <p><img  alt="img" src={Upload}/>Прикрепить файл</p>
          </header>
          <p className={styles.content}>ОЖИДАЕТ ВАШЕЙ ПОДПИСИ </p>
          <div className={styles.btns}>
            <button className={styles.follow}><img  alt="img" src={Check}/>Подписать</button>
            <button className={styles.cancel}><img  alt="img" src={Cancel}/>Отказаться</button>
          </div>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <img  alt="img" src={InvoiceImage}/>
      </div>
    </div>
  );
}
