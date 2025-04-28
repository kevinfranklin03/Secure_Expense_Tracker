import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/transactionService';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions', error);
    }
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((txn) => (
          <li key={txn.id} className="py-2 flex justify-between">
            <span>{txn.title}</span>
            <span className="text-green-500">${txn.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
