import AddTransactionForm from '../components/AddTransactionForm';

function Transactions() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Transactions</h1>
      <AddTransactionForm />
      {/* Later we'll show list of transactions here */}
    </div>
  );
}

export default Transactions;
