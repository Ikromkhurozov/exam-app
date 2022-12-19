import React from 'react';

import InboxFilter from "../../Components/Filters/InboxFilter";
import Table from "../../Components/Table/TableContent";

import Check from "../../assets/dashboard/check-icon.svg"
import Cancel from "../../assets/dashboard/cancel-icon.svg"

import styles from "../../styles/Inbox.module.scss"

export default function Inbox() {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Документы</h2>

      <div className={styles.tapbar}>
        <p>Договора</p>
        <p>Счет фактуры</p>
        <p>Акт</p>
        <p>Доверенность</p>
        <p>ТТН</p>
      </div>

      <InboxFilter/>
      <Table/>

      <div className={styles["inbox-footer"]}>
        <div className={styles["inbox-sort"]}>
          <button className={styles.check}><img alt="image" src={Check}/>Подписать</button>
          <button className={styles.cancel}><img alt="image" src={Cancel}/>Отменить</button>

          <div className={styles["footer-filter"]}>
            <div className={styles.select}>
              <p>Показать по: </p>
              <select>
                <option>12</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>
            <div className={styles.sort}>
              <p>Синхронизация с ГНК</p>
              <p>Реестр <ion-icon name="arrow-down-circle-outline"/> </p>
            </div>
          </div>
        </div>

        <div className={styles.pagination}>
          <button className={styles.back}><ion-icon name="chevron-back-outline"/>Назад</button>
          <div className={styles.pages}>
            <p className={styles["selected-number"]}>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>16</p>
          </div>
          <button className={styles.next}>Следующая<ion-icon name="chevron-forward-outline"/></button>
        </div>
      </div>
    </div>
  );
}
