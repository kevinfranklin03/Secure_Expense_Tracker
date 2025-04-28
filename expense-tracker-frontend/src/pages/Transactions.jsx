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
        date: new Date().toISOString(),
      };
      console.log('Sending transaction to backend:', newTransaction); // DEBUG LOG
      await transactionService.create(newTransaction);
      setTitle('');
      setAmount('');
      fetchTransactions();
    } catch (error) {
      console.error('Failed to create transaction:', error); // DEBUG LOG
    }
  };
  
  const fetchTransactions = async () => {
    try {
      const data = await transactionService.getAll();
      console.log('Received transactions from backend:', data); // DEBUG LOG
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error); // DEBUG LOG
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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 flex-1"
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-32"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </form>

      {transactions.length === 0 ? (
        <p className="text-gray-600">No transactions yet!</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((transaction) => (
            <li
              key={transaction.id} // fixed "key" warning
              className="flex justify-between items-center p-3 bg-white rounded shadow"
            >
              <div>
                <span className="font-semibold">{transaction.title || 'Untitled'}</span>
                <span className="ml-4 text-gray-700">${transaction.amount?.toFixed(2) || '0.00'}</span>
              </div>
              <button
                onClick={() => handleDelete(transaction.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Transactions;
