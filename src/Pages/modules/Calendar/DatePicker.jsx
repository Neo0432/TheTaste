import { useState } from "react";
import * as calendar from "./calendar";
import styles from "./DatePicker.module.css";

const standartProps = {
  date: new Date(),
  years: [2024, 2025],
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  weekDaysNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  onChange: Function.prototype,
};

export function DatePicker({ setBookingDate }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());
  const monthDate = calendar.getMonthDate(selectedYear, selectedMonth);

  let state = {
    date: standartProps.date,
    curentDate: new Date(),
    selectedDate: selectedDate,
    selectedMonth: selectedMonth,
  };

  setBookingDate(state.selectedDate);

  let dateMonthYear =
    standartProps.monthNames[selectedMonth] + ", " + selectedYear.toString();
  let prevMonthButtonClick = () => {
    if (selectedMonth == 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else setSelectedMonth(selectedMonth - 1);
    console.log(
      "prev: " +
        `${standartProps.monthNames[selectedMonth]}` +
        ":" +
        `${selectedMonth}`
    );
  };
  let nextMonthButtonClick = () => {
    if (selectedMonth == 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else setSelectedMonth(selectedMonth + 1);
    console.log(
      "next: " +
        `${standartProps.monthNames[selectedMonth]}` +
        ":" +
        `${selectedMonth}`
    );
  };
  let dayClick = (date) => {
    setSelectedDate(date);
    standartProps.onChange(state.date);
    state.selectedDate = selectedDate;
    console.log(`${date.getDate()}.${date.getMonth()}`);
    console.log(
      `${state.selectedDate.getDate()}.${state.selectedDate.getMonth()}`
    );
    console.log(selectedMonth);
  };

  return (
    <article className={styles.datePicker}>
      <section className={styles.datepicker_header}>
        <p className={styles.datepicker_header_month}>{dateMonthYear}</p>
        <section className={styles.datepicker_header_monthChanger}>
          <p
            id="datepicker_header_monthAgo"
            className={styles.datepicker_header_monthAgo}
            onClick={() => prevMonthButtonClick()}
          >
            {"<"}
          </p>
          <p
            id="datepicker_header_monthAfter"
            className={styles.datepicker_header_monthAfter}
            onClick={() => nextMonthButtonClick()}
          >
            {">"}
          </p>
        </section>
      </section>
      <section className={styles.datePicker_dates_row_weekDays}>
        {standartProps.weekDaysNames.map((day) => (
          <p key={day}>{day}</p>
        ))}
      </section>
      <section className={styles.datePicker_dates}>
        {monthDate.map((week, index) => (
          <section key={index} className={styles.datePicker_dates_row}>
            {week.map((date, index) =>
              date ? (
                <p
                  key={index}
                  className={
                    `${date.getDate()}.${date.getMonth()}` ==
                    `${state.selectedDate.getDate()}.${state.selectedDate.getMonth()}`
                      ? [styles.datePicker_dates_el, styles.selected].join(" ")
                      : styles.datePicker_dates_el
                  }
                  onClick={() => dayClick(date)}
                >
                  {date.getDate()}
                </p>
              ) : (
                <p key={index}></p>
              )
            )}
          </section>
        ))}
      </section>
    </article>
  );
}
