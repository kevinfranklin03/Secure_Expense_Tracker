import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">ExpenseTracker</Link>
      <div className="flex gap-4">
        <Link to="/transactions" className="hover:text-gray-300">Transactions</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/signup" className="hover:text-gray-300">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
