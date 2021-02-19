import React from "react";
import Week from "../Week/Week";

const Month = (props) => {
  const {year, month} = props;
  
  //чтобы 
  return (
    <>
      <Week year={2021} week={2} />
      <Week year={2021} week={3} />
      <Week year={2021} week={4} />
      <Week year={2021} week={5} />
    </>
  );
};

export default Month;
