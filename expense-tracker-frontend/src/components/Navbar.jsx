import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-500">
        Expense Tracker
      </Link>
      <div className="flex space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/transactions" className="text-gray-700 hover:text-blue-500">
              Transactions
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
