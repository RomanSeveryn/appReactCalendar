import React from "react";
import { format } from "date-fns";
import Week from "../Week/Week";
import Month from "../Month/Month";
import styles from "./CalendarBody.module.scss";
const DaysOfWeek = () => {
  return (
    <tr className={styles.calendarBodyTitleWeek}>
      <td>S</td>
      <td>M</td>
      <td>T</td>
      <td>W</td>
      <td>T</td>
      <td>F</td>
      <td>S</td>
    </tr>
  );
};
const CalendarBody = (props) => {
  const { currentDay } = props;
  return (
    <div className={styles.containerCalendarBody}>
      
      <div className={styles.calendarBodyCurrentMonthAndYear}>
      <div className={styles.currentMonth}>{format(currentDay, "MMMM")}</div>
      <div className={styles.currentYear}>{format(currentDay, "R")}</div>

      </div>
      <table className={styles.table}>
        <thead>
          <DaysOfWeek />
        </thead>
        <tbody>

          <Month year={2021} month={1} week={6}/>

        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
