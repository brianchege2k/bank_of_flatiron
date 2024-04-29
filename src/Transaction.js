
import React from 'react';

const Transaction = ({ date, description, amount }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
