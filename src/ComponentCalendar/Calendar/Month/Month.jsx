import React, { Component } from "react";

const arrMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class Month extends Component {
  currentMonth() {
    const currentMonth = new Date().getMonth();
    return arrMonth[currentMonth];
  }
  render() {
    return <></>;
  }
}

export default Month;
