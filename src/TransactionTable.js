
import React from 'react';
import Transaction from './Transaction';

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
