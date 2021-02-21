import React from "react";
import Week from "../Week/Week";
import { addWeeks, startOfMonth, parse } from "date-fns";

const Month = (props) => {
  const { year, month, week } = props;

  const startMonth = parse(`${year} ${month + 1}`, "y M", new Date());

  console.log(startMonth);
  const buildMonth = () =>
    new Array(6).fill(1).map((_, index) => {
      return (
        <Week
          key={`${year}-${month}-${week}`}
          week={addWeeks(startMonth, index)}
        />
      );
    });

  return <>{buildMonth()}</>;
};

export default Month;
