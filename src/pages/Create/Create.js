import React from 'react';
import { useNavigate } from "react-router-dom";

import {InputField, MinInput} from "../../Components/CommonInput/InputField";

import Switch from "../../assets/dashboard/switch.svg"
import Table from "../../assets/dashboard/table.jpg"
import Add from "../../assets/dashboard/add-icon.svg"
import Cancel from "../../assets/dashboard/cancel-icon.svg"
import Check from "../../assets/dashboard/check-icon.svg"

import styles from "../../styles/Create.module.scss"

export default function Create() {
  const navigate = useNavigate();

  const onSave = () => {
    navigate("/create/invoice")
  }

  return (
    <div className={styles.container}>
      <div className={styles["create-header"]}>
        <h2>Создание документа: Счёт-фактура</h2>
        <button>Назад/Отменить</button>
      </div>

      <div className={styles["create-document"]}>
        <div className={styles.select}>
          <div className={styles["input-wrapper"]}>
            <label>
              Тип счета
            </label>
            <select
              className={styles["select-button"]}
            >
              <option className={styles.option} value="default">
                Стандарт
              </option>
              <option className={styles.option} value="default">
                Стандарт
              </option>

            </select>
          </div>
        </div>

        <div className={styles.input}>
          <InputField
            type="text"
            placeholder="Номер счет-фактуры "
            label="Номер счет-фактуры "
          />

          <div className={styles["input-wrapper"]}>
            <label>
              Дата документ
            </label>
            <input
              placeholder="Дата документа"
              type="text"
            />
          </div>

          <InputField
            type="text"
            placeholder="Введите номер контракта "
            label="Введите номер контракта "
          />
          <div className={styles["input-wrapper"]}>
            <label>
              Дата до
            </label>
            <input
              placeholder="Дата контракта"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className={styles.information}>
        <div className={styles.left}>
          <h2>Ваша информация</h2>

          <div className={styles.input}>
            <div className={styles.select}>
              <div className={styles["input-wrapper"]}>
                <label>
                  ИНН
                </label>
                <select
                  className={styles["select-button"]}
                >
                  <option className={styles.option} value="default">
                    Стандарт
                  </option>
                  <option className={styles.option} value="default">
                    Стандарт
                  </option>
                </select>
              </div>
            </div>

            <InputField
              type="text"
              placeholder="Введите данные"
              label="НДС регистрационный номер "
            />

            <div className={styles["min-input"]}>
              <div className={styles.first}>
                <MinInput
                  type="text"
                  placeholder="Введите данные"
                  label="Номер счета "
                />
              </div>
              <MinInput
                type="text"
                placeholder="Введите данные"
                label="Номер счета"
              />
            </div>

            <InputField
              type="text"
              placeholder="Введите данные"
              label="Адрес"
            />

            <div className={styles["min-input"]}>
              <div className={styles.first}>
                <MinInput
                  type="text"
                  placeholder="Введите данные"
                  label="Директор"
                />
              </div>
              <MinInput
                type="text"
                placeholder="Введите данные"
                label="Главный бухгалтер"
              />
            </div>
          </div>

        </div>
        <div className={styles.right}>
          <h2>Информация о подрядчике</h2>

          <div className={styles.input}>
           <div className={styles.first}>
             <div className={styles["input-wrapper"]}>
               <label>Номер счета <span>*</span></label>

               <input
                 type="text"
                 placeholder="Обязательное поле"
               />
             </div>

             <div className={styles.radio}>
               <p>Односторонний счет? <img  alt="img" src={Switch}/></p>
             </div>
           </div>

            <InputField
              type="text"
              placeholder="Введите данные"
              label="Компания-партнер"
            />

            <div className={styles["min-input"]}>
              <div className={styles.first}>
                <MinInput
                  type="text"
                  placeholder="Введите данные"
                  label="Номер счета "
                />
              </div>
              <MinInput
                type="text"
                placeholder="Введите данные"
                label="МФО"
              />
            </div>

            <InputField
              type="text"
              placeholder="Введите данные"
              label="Адрес"
            />

            <div className={styles["min-input"]}>
              <div className={styles.first}>
                <MinInput
                  type="text"
                  placeholder="Введите данные"
                  label="Номер счета "
                />
              </div>
              <MinInput
                type="text"
                placeholder="Введите данные"
                label="МФО"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["table-wrapper"]}>
        <div className={styles["table-header"]}>
          <p><ion-icon name="arrow-down-outline"/>Загрузить из Excel</p>
          <p><ion-icon name="arrow-down-outline"/>Скачать шаблон</p>
        </div>

        <div className={styles["table-content"]}>
          <img  alt="img" src={Table}/>
        </div>

        <div className={styles.scroll}><p></p></div>

        <div className={styles["table-footer"]}>
          <p className={styles.all}>Итого: 0.00</p>
          <p className={styles.add}>Добавить строку <img  alt="img" src={Add}/></p>
        </div>
      </div>

      <div className={styles.attorney}>
        <div className={styles["attorney-header"]}>
          <h2>Доверенность</h2>

          <div className={styles["input-wrapper"]}>
            <select className={styles["select-button"]}>
              <option className={styles.option} value="default">
                Выберите доверенность
              </option>
              <option className={styles.option} value="default">
                Отменен
              </option>
            </select>
          </div>
        </div>

        <div className={styles["attorney-content"]}>
          <MinInput
            type="text"
            label="Номер доверенности"
            placeholder="Введите данные"
          />

          <MinInput
            type="text"
            label="Дата доверенности"
            placeholder="Введите данные"
          />

          <MinInput
            type="text"
            label="ИНН"
            placeholder="Введите данные"
          />

          <MinInput
            type="text"
            label="Ответственное лицо ФИО"
            placeholder="Введите данные"
          />
        </div>
      </div>

      <div className={styles["create-footer"]}>
        <div className={styles.left}>
          <button className={styles.cancel}> <img  alt="img" src={Cancel}/>Отменить</button>
          <button className={styles.check}> <img  alt="img" src={Check}/>Показать документ</button>
        </div>
        <div className={styles.right}>
          <button onClick={onSave} className={styles.save}>Сохранить</button>
          <button className={styles.follow}>Подписать</button>
        </div>
      </div>

    </div>
  );
}