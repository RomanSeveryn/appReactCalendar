import React, { Component } from 'react';
import styles from './Week.modules.css';
const week = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

class Week extends Component {
  render() {
    let weekDays = week.map((day, index) => {
      return <th className={styles.accentColorRed} key={index}>{day}</th>
    })
    return (
      <tr>
        {weekDays}
      </tr>
    );
  }
}

export default Week;
