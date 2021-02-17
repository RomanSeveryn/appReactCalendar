import React, { Component } from "react";

const date = new Date();
console.log(date);

const day = date.getDate();
console.log(day);

const month = date.getMonth();
console.log(month);

const currentYear = date.getFullYear();
console.log(currentYear);

const temp = new Date(currentYear, month + 1, 0);
const lastDayMonth = temp.getDate();
console.log(lastDayMonth);

class Days extends Component {

  dayOfMonth() {
    const daysArray = [];
    for (let i = 1; i <= lastDayMonth; i++) {
      daysArray.push(<td key={i}>{i}</td>);
    
    }
    return daysArray;
  }
  render() {
    const daysArray = this.dayOfMonth();
    return <tr>{daysArray}</tr>;
  }
}

export default Days;
