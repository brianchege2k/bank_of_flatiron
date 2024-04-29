
import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  const handleAddTransaction = formData => {
    // Generate a unique ID for the new transaction
    const newTransaction = { id: Date.now(), ...formData };
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

  const handleSearch = searchTerm => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
