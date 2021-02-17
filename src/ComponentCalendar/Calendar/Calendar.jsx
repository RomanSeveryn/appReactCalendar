import React, { Component } from "react";
import Days from "./Day/Days";
import Month from "./Month/Month";
import Week from "./Week/Week";
import Year from "./Year/Year";



// const day = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];


class Calendar extends Component {
  
  render() {
    // const date = new Date();
    // console.log(date);

    // const day = date.getDate();
    // console.log(day);

    // const month = date.getMonth();
    // console.log(month);

    // const currentYear = date.getFullYear();
    // console.log(currentYear);

    // const temp = new Date(currentYear, month+1, 0);
    // const lastDayMonth = temp.getDate();
    // console.log(lastDayMonth);

    // for(let i = 1; i <= lastDayMonth; i++) {
    //   return <td>{i}</td>
    // }

    return <table>
      <tbody>
        {/* <Month/> */}
        {/* <Year/> */}
        <Week/>
        <Days/>
      </tbody>
      
    </table>;
  }
}

export default Calendar;
