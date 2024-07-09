import { useState, useEffect } from 'react';
import { fetchTransactionsByEmployee } from '@utils';
import { Transaction } from '@types';

export const useTransactionsByEmployee = (employeeId: string | null) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      setLoading(true);
      const newTransactions = await fetchTransactionsByEmployee(employeeId);
      setTransactions(newTransactions);
      setLoading(false);
    };

    loadTransactions();
  }, [employeeId]);

  const toggleTransactionApproval = (id: string, approved: boolean) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, approved } : transaction
      )
    );
  };

  return { transactions, loading, toggleTransactionApproval };
};