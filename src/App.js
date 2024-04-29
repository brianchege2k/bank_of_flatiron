
import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
