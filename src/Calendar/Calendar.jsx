import React, { Component } from "react";
import CurrentDay from "./CurrentDay/CurrentDay";
import styles from './Calendar.module.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: new Date(),
    };
  }
  render() {
    const { currentDay } = this.state;
    return (
      <section className={styles.calendarContainer}>
        <CurrentDay currentDay={currentDay} />
      </section>
    );
  }
}

export default Calendar;
