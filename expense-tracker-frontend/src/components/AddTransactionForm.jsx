import { useState } from 'react';

function AddTransactionForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Transaction Added:', { title, amount });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="Title"
        className="p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
        Add Transaction
      </button>
    </form>
  );
}

export default AddTransactionForm;
