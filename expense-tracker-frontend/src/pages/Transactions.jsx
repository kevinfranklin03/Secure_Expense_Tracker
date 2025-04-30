import { useState, useEffect } from 'react';
import transactionService from '../services/transactionService';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTransaction = {
        title: title.trim(),
        amount: parseFloat(amount),
        date: new Date().toISOString().split('T')[0],
      };
      await transactionService.create(newTransaction);
      setTitle('');
      setAmount('');
      fetchTransactions();
    } catch (error) {
      console.error('Failed to create transaction:', error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const data = await transactionService.getAll();
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await transactionService.delete(id);
      fetchTransactions();
    } catch (error) {
      console.error('Failed to delete transaction:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Expense Tracker</h1>

      {/* Add Transaction Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md rounded p-6 space-y-4">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Title</label>
          <input
            type="text"
            placeholder="e.g., Coffee, Rent"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Amount ($)</label>
          <input
            type="number"
            step="0.01"
            placeholder="e.g., 4.99"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
        >
          Add Transaction
        </button>
      </form>

      {/* Transaction List */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Transaction History</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions yet!</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{transaction.title || 'Untitled'}</p>
                  <p className="text-sm text-gray-500">${transaction.amount.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleDelete(transaction.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Transactions;
