import React from 'react';
import { format } from "date-fns";
import styles from './Day.module.scss';
const Day = (props) => {
  const {day} = props;
  return (
    <td className={styles.dayOfMonth}>
      {format(day, 'd')}
    </td>
  );
}

export default Day;
