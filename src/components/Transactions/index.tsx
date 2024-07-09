import React, { useState, useEffect } from 'react';
import { Transaction } from '@types';
import { InputCheckbox } from '@components';

const Transactions = ({ initialTransactions, totalTransactions }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [showViewMore, setShowViewMore] = useState(true);

  const toggleApproval = (id, approved) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, approved } : transaction
      )
    );
  };

  const handleViewMore = async () => {
    const newTransactions = await fetchMoreTransactions(); // Fetch additional transactions
    if (newTransactions.length === 0) {
      setShowViewMore(false);
    } else {
      setTransactions((prevTransactions) => [...prevTransactions, ...newTransactions]);
    }
  };

  useEffect(() => {
    if (transactions.length >= totalTransactions) {
      setShowViewMore(false);
    }
  }, [transactions, totalTransactions]);

  return (
    <div>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          onToggleApprove={toggleApproval}
        />
      ))}
      {showViewMore && <button onClick={handleViewMore}>View More</button>}
    </div>
  );
};

export default Transactions;
