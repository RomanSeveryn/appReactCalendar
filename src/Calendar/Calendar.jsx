import React, { Component } from "react";
import CurrentDay from "./CurrentDay/CurrentDay";
import styles from "./Calendar.module.scss";
import CalendarBody from "./CalendarBody/CalendarBody";

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
        <CalendarBody currentDay={currentDay} />
      </section>
    );
  }
}

export default Calendar;
