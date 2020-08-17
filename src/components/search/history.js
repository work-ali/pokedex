import React from "react";

const History = props => {
  const {data} = props;
  return (
    <>
      <div className="history-box">
        <h3>History</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default History;
