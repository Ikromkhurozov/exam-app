import React from 'react';
import CustomTable from 'rc-table';

import Filter from "../../assets/dashboard/filter-icon.svg"
import styles from "./Table.module.scss"

export default function TableContent() {
  const columns = [
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      width: 40,
      render: () => (
        <div className={styles["status-wrapper"]}>
          <input type="checkbox"/>
        </div>
      ),
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      width: 60,
      render: () => (
        <div className={styles.color}>
        </div>
      )
    },
    {
      title: 'Тип документа ',
      dataIndex: 'tip',
      key: 'tip',
      width: 120,
    },
    {
      title: 'Дата обновления ',
      dataIndex: 'date',
      key: 'date',
      width: 140,
    },
    {
      title: 'Контрагент ',
      dataIndex: 'company',
      key: 'company',
      width: 150,
    },
    {
      title: 'Номер и дата документа ',
      dataIndex: 'inn',
      key: 'inn',
      width: 200,
    },
    {
      title: 'Номер и дата договора',
      dataIndex: 'agree',
      key: 'agree',
      width: 200,
    },
    {
      title: 'Стоимость поставки',
      dataIndex: 'offer',
      key: 'offer',
      width: 180,
    },
    ]

  const data = [
    { status: 'Статус', tip: "Счет-фактура (вх.)", date: '09.03.2021', company: "ООО VENKON GROUP", inn: "998998933800", agree: "02-53519 от 28.02.2021", offer: "Публичная оферта от 15.12.2020", key: '1' },
    { status: 'Статус', tip: "Счет-фактура (вх.)", date: '09.03.2021', company: "ООО VENKON GROUP", inn: "998998933800", agree: "02-53519 от 28.02.2021", offer: "Публичная оферта от 15.12.2020", key: '2' },
    { status: 'Статус', tip: "Счет-фактура (вх.)", date: '09.03.2021', company: "ООО VENKON GROUP", inn: "998998933800", agree: "02-53519 от 28.02.2021", offer: "Публичная оферта от 15.12.2020", key: '3' },
    { status: 'Статус', tip: "Счет-фактура (вх.)", date: '09.03.2021', company: "ООО VENKON GROUP", inn: "998998933800", agree: "02-53519 от 28.02.2021", offer: "Публичная оферта от 15.12.2020", key: '4' },
    { status: 'Статус', tip: "Счет-фактура (вх.)", date: '09.03.2021', company: "ООО VENKON GROUP", inn: "998998933800", agree: "02-53519 от 28.02.2021", offer: "Публичная оферта от 15.12.2020", key: '5' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles["table-header"]}>
        <div className={styles.left}>
          <h3>Таблица</h3>
          <p className={styles.red}>Отменен</p>
          <p className={styles.green}>Подписано</p>
          <p className={styles.yellow}>В ожидании</p>
          <p className={styles.grey}>Черновик</p>
        </div>
        <div className={styles.right}>
          <button>Открыть в Exсel</button>
          <button> <img  alt="img" src={Filter}/> Фильтр таблицы</button>
        </div>
      </div>

      <div className={styles.table}>
        <CustomTable columns={columns} data={data} />
      </div>

    </div>
  );
}
