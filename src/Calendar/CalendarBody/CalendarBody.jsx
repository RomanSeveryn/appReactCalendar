import React from "react";
import { format } from "date-fns";
import Week from "../Week/Week";
import Month from "../Month/Month";

const DaysOfWeek = () => {
  return (
    <tr>
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
    <div>
      <div>{format(currentDay, "MMMM")}</div>
      <div>{format(currentDay, "R")}</div>
      <table>
        <thead>
          <DaysOfWeek />
        </thead>
        <tbody>
          <Month year={2021} month={1}/>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
