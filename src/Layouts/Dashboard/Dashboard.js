import React from 'react';
import { NavLink, Outlet } from "react-router-dom";


import Logo from "../../assets/sidebar/logo.svg";
import Add from "../../assets/sidebar/add-icon.svg"
import Down from "../../assets/sidebar/arrow-downward.svg"
import Upp from "../../assets/sidebar/arrow-upward.svg"
import Save from "../../assets/sidebar/save-outlined.svg"
import Trash from "../../assets/sidebar/remove-icon.svg"
import Support from "../../assets/sidebar/support.svg"
import Settings from "../../assets/sidebar/settings-outlined.svg"
import Exit from "../../assets/sidebar/exit-icon.svg"
import Balance from "../../assets/header/balance.svg"
import Notify from "../../assets/header/notify.svg"
import Info from "../../assets/header/question-mark.svg"
import SupportIcon from "../../assets/sidebar/support-icon.svg"

import styles from "./Dashboard.module.scss"

export default function Dashboard() {
  return (
    <div className={`${styles.container} light`}>
      <div className={styles["side-menu"]}>
        <div className={styles["logo-wrapper"]}>
          <img alt="image" src={Logo}/>
          <p className={styles.text}>Online <br/> faktura</p>
        </div>
        <hr className={styles.hr}/>
        <ul className={styles.nav}>
          <NavLink to="/create"><li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Add}/><p>Создать</p></li></NavLink>
          <NavLink to="/inbox"><li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Down}/><p>Входящие (2)</p>
          </li></NavLink>
          <li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Upp}/><p>Исходящие (3)</p>
          </li>
          <li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Save}/><p>Сохраненные (0)</p>
          </li>
          <li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Trash}/><p>Сохраненные (0)</p>
          </li>
          <li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Support}/><p>Тех поддержка : <br/> +998 99 999 99 99</p>
          </li>
          <li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Settings}/><p>Настройки</p>
          </li>
          <li className={styles["nav-item"]}>
            <img alt="image" className={styles.img} src={Exit}/><p>Выйти</p>
          </li>
          <li className={styles["nav-logo"]}>
            <img alt="image" className={styles.img} src={SupportIcon}/><p>1C support</p>
          </li>
        </ul>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles["left-side"]}>Yatt sobirov jamshid davron o'g'li <br/> <span>566800736</span> </p>

          <div className={styles["right-side"]}>
            <img alt="image" src={Balance}/>
            <p className={styles.balance}>
              Ваш баланс: <br/>
              <span>150.000 сум</span>
            </p>
            <button className={styles["tariff-btn"]}>Активировать тариф</button>
            <div className={styles["header-icons"]}>
              <img alt="image" className={styles.notify} src={Notify}/>
              <img alt="image" src={Info}/>
              <ion-icon name="build-outline"/>
            </div>
          </div>
        </div>
        <hr style={{margin: 0}}/>

        <div className={styles.content}> <Outlet /></div>
      </div>
    </div>
  );
}
