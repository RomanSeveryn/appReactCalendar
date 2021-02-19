import React, { Component } from "react";
import { format } from "date-fns";
import styles from './CurrentDay.module.scss';
const CurrentDay = (props) => {
  const { currentDay } = props;
  return (
    <div className={styles.containerCurrentDay}>
      <div className={styles.dayOfWeek}>{format(currentDay, "EEEE")}</div>
      <div className={styles.dayOfMonth}>{format(currentDay, "d")}</div>
    </div>
  );
};

export default CurrentDay;
