import React, {useState} from 'react';
import CommonDatePicker from "../CommonDatePicker/CommonDatePicker";

import styles from "./InboxFilter.module.scss"

export default function InboxFilter() {
  const [documentNumber, setDocumentNumber] = useState("");
  const [status, setStatus] = useState("");
  const [counter, setCounter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState(1);

  const onClear = () => {
    setDocumentNumber("");
    setStatus("");
    setCounter("");
  }
  const onSelectFromDate = date => {
    page !== 1 && setPage(1);
    setFromDate(date);
  };

  const onSelectToDate = date => {
    page !== 1 && setPage(1);
    setToDate(date);
  };

  return (
    <div className={styles.container}>
      <div className={styles["filter-header"]}>
        <p>Фильтр</p>
        <p onClick={onClear}>Сбросить фильтр</p>
      </div>
      <div className={styles["filter-content"]}>
        <div className={styles["input-wrapper"]}>
          <label>
            Номер документа
          </label>
          <input
            onChange={e => setDocumentNumber(e.target.value)}
            placeholder="Номер документа"
            value={documentNumber}
            type="text"
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <label>
            Статус документа
          </label>
          <select
            onChange={e => setStatus(e.target.value)}
            value={status}
            className={styles["select-button"]}
          >
            <option className={styles.option} value="default">
              Статус документа
            </option>
            <option className={styles.option} value="cancel">
              Отменен
            </option>
            <option className={styles.option} value="follow">
              Подписано
            </option>
            <option className={styles.option} value="mute">
              В ожидании
            </option>
            <option className={styles.option} value="trash">
              Черновик
            </option>
          </select>
          </div>
        <div className={styles["input-wrapper"]}>
          <label>
            Поиск по контрагенту
          </label>
          <input
            onChange={e => setCounter(e.target.value)}
            placeholder="Номер документа"
            type="text"
            value={counter}
          />
        </div>
        <div className={styles["date-wrapper"]}>
          <label>
            Дата с
          </label>

          <CommonDatePicker
            startDate={fromDate}
            setDate={onSelectFromDate}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="dd.MM.yyyy"
          />
        </div>
        <div className={styles["date-wrapper"]}>
          <label>
            Дата до
          </label>

          <CommonDatePicker
            startDate={toDate}
            setDate={onSelectToDate}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="dd.MM.yyyy"
          />
        </div>
      </div>
    </div>
  );
};
