import React from "react";
import { parse, addDays, getYear } from "date-fns";
import Day from "../Day/Day";

const currentYear = getYear(new Date());
console.log(currentYear);

const Week = (props) => {
  const { year, week } = props;

  // const startOfWeek = parse(`${year} ${week}`, "Y w", new Date());
  // console.dir(startOfWeek);

  const buildWeek = () =>
    new Array(7).fill(null).map((_, index) => {
      return (
        <Day
          key={`${year}-${week}-${index}`}
          day={addDays(week, index)}
        />
      );
    });
  return <tr>{buildWeek()}</tr>;

  // const dayArray = [];
  // for(let i = 0; i< 7; i++) {
  //   dayArray.push(<Day key={`${year}-${week}-${i}`} day={addDays(startOfWeek, i)} />);
  // }
};

export default Week;
