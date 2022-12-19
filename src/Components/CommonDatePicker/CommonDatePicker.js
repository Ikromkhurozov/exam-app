import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CommonDatePicker() {
  const [date, setDate] = useState()

  return (
    <DatePicker selected={date} className="common-datepicker" onChange={date => setDate(date)} />
  );
}